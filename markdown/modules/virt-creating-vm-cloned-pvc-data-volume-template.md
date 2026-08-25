{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VM from a cloned PVC by using a data volume template {id="virt-creating-vm-cloning-pvc-data-volume-template_{{ context }}"}

You can create a virtual machine (VM) that clones the persistent volume claim (PVC) of an existing VM by using a data volume template. This method creates a data volume whose lifecycle is independent on the original VM. {._abstract}

**Prerequisites**

*   The VM with the source PVC must be powered down.
*   You have installed the `virtctl` CLI.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `VirtualMachine` manifest for your VM and save it as a YAML file, for example:
    ```terminal
    $ virtctl create vm --name rhel-9-clone --volume-import type:pvc,src:my-project/imported-volume-q5pr9
    ```
1.  Review the `VirtualMachine` manifest for your VM:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: rhel-9-clone
    spec:
      dataVolumeTemplates:
      - metadata:
          name: imported-volume-h4qn8
        spec:
          source:
            pvc:
              name: imported-volume-q5pr9
              namespace: my-project
          storage:
            resources: {}
      instancetype:
        inferFromVolume: imported-volume-h4qn8
        inferFromVolumeFailurePolicy: Ignore
      preference:
        inferFromVolume: imported-volume-h4qn8
        inferFromVolumeFailurePolicy: Ignore
      runStrategy: Always
      template:
        spec:
          domain:
            devices: {}
            memory:
              guest: 512Mi
            resources: {}
          terminationGracePeriodSeconds: 180
          volumes:
          - dataVolume:
              name: imported-volume-h4qn8
            name: imported-volume-h4qn8
    ```
    *   `metadata.name` defines the VM name.
    *   `spec.dataVolumeTemplates.spec.source.pvc.name` defines the name of the source PVC.
    *   `spec.dataVolumeTemplates.spec.source.pvc.namespace` defines the namespace of the source PVC.
    *   `spec.instancetype.inferFromVolume` defines that if the PVC source has appropriate labels, the instance type is inferred from the selected `DataSource` object.
    *   `spec.preference.inferFromVolume` defines that if the PVC source has appropriate labels, the preference is inferred from the selected `DataSource` object.
1.  Create the virtual machine with the PVC-cloned data volume:
    ```terminal
    $ oc create -f <vm_manifest_file>.yaml
    ```