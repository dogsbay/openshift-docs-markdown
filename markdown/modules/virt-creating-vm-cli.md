{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VM from a VirtualMachine manifest {id="virt-creating-vm-cli_{{ context }}"}

You can create a virtual machine (VM) from a `VirtualMachine` manifest. To simplify the creation of these manifests, you can use the `virtctl` command-line tool. {._abstract}

**Prerequisites**

*   You have installed the `virtctl` CLI.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `VirtualMachine` manifest for your VM and save it as a YAML file. For example, to create a minimal {{ op_system_base_full }} VM, run the following command:
    ```terminal
    $ virtctl create vm --name rhel-9-minimal --volume-import type:ds,src:openshift-virtualization-os-images/rhel9
    ```
1.  Review the `VirtualMachine` manifest for your VM:

    :::note

    This example manifest does not configure VM authentication.
    
    :::

    ```yaml title="Example manifest for a {{ op_system_base }} VM"
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: rhel-9-minimal
    spec:
      dataVolumeTemplates:
      - metadata:
          name: imported-volume-mk4lj
        spec:
          sourceRef:
            kind: DataSource
            name: rhel9
            namespace: openshift-virtualization-os-images
          storage:
            resources: {}
      instancetype:
        inferFromVolume: imported-volume-mk4lj
        inferFromVolumeFailurePolicy: Ignore
      preference:
        inferFromVolume: imported-volume-mk4lj
        inferFromVolumeFailurePolicy: Ignore
      runStrategy: Always
      template:
        spec:
          domain:
            devices:
              video:
                type: virtio
            memory:
              guest: 512Mi
            resources: {}
          terminationGracePeriodSeconds: 180
          volumes:
          - dataVolume:
              name: imported-volume-mk4lj
            name: imported-volume-mk4lj
    ```
    *   `name: rhel-9-minimal` specifies the name of the VM.
    *   `name: rhel9` specifies the boot source for the guest operating system in the `sourceRef` section.
    *   `namespace: openshift-virtualization-os-images` specifies the namespace for the boot source. Golden images are stored in the `openshift-virtualization-os-images` namespace.
    *   `instancetype: inferFromVolume: imported-volume-mk4lj` specifies the instance type inferred from the selected `DataSource` object.
    *   `preference: inferFromVolume: imported-volume-mk4lj` specifies that the preference is inferred from the selected `DataSource` object.
    *   `type: virtio` specifies the use of a custom video device (a VirtIO device in this example) to enable hardware graphics acceleration. Enabling a custom video device is in Technology Preview for {{ VirtProductName }} 4.21.
1.  Create a virtual machine by using the manifest file:
    ```terminal
    $ oc create -f <vm_manifest_file>.yaml
    ```
1.  Optional: Start the virtual machine:
    ```terminal
    $ virtctl start <vm_name>
    ```