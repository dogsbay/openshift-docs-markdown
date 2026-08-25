{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VM from an image on a web page by using the CLI {id="virt-creating-vm-import-cli_{{ context }}"}

You can create a virtual machine (VM) from an image on a web page by using the command line. {._abstract}

When the VM is created, the data volume with the image is imported into persistent storage.

**Prerequisites**

*   You must have access credentials for the web page that contains the image.
*   You have installed the `virtctl` CLI.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `VirtualMachine` manifest for your VM and save it as a YAML file. For example, to create a minimal {{ op_system_base_full }} VM from an image on a web page, run the following command:
    ```terminal
    $ virtctl create vm --name vm-rhel-9 --instancetype u1.small --preference rhel.9 --volume-import type:http,url:https://example.com/rhel9.qcow2,size:10Gi
    ```
1.  Review the `VirtualMachine` manifest for your VM:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: vm-rhel-9
    spec:
      dataVolumeTemplates:
      - metadata:
          name: imported-volume-6dcpf
        spec:
          source:
            http:
              url: https://example.com/rhel9.qcow2
          storage:
            resources:
              requests:
                storage: 10Gi
      instancetype:
        name: u1.small
      preference:
        name: rhel.9
      runStrategy: Always
      template:
        spec:
          domain:
            devices: {}
            resources: {}
          terminationGracePeriodSeconds: 180
          volumes:
          - dataVolume:
              name: imported-volume-6dcpf
            name: imported-volume-6dcpf
    ```
    *   `metadata.name` defines the VM name.
    *   `spec.dataVolumeTemplates.metadata.name` defines the data volume name.
    *   `spec.dataVolumeTemplates.spec.source.http.url` defines the URL of the image.
    *   `spec.dataVolumeTemplates.spec.storage.resources.requests.storage` defines the size of the storage requested for the data volume.
    *   `spec.instancetype.name` defines the instance type to use to control resource sizing of the VM.
    *   `spec.preference.name` defines the preference to use.
1.  Create the VM by running the following command:
    ```terminal
    $ oc create -f <vm_manifest_file>.yaml
    ```

    The `oc create` command creates the data volume and the VM. The CDI controller creates an underlying PVC with the correct annotation and the import process begins. When the import is complete, the data volume status changes to `Succeeded`. You can start the VM.

    Data volume provisioning happens in the background, so there is no need to monitor the process.

**Verification**

1.  The importer pod downloads the image from the specified URL and stores it on the provisioned persistent volume. View the status of the importer pod:
    ```terminal
    $ oc get pods
    ```
1.  Monitor the status of the data volume:
    ```terminal
    $ oc get dv <data_volume_name>
    ```

    If the provisioning is successful, the data volume phase is `Succeeded`.

    Example output:
    ```terminal
    NAME                    PHASE       PROGRESS   RESTARTS   AGE
    imported-volume-6dcpf   Succeeded   100.0%                18s
    ```
1.  Verify that provisioning is complete and that the VM has started by accessing its serial console:
    ```terminal
    $ virtctl console <vm_name>
    ```

    If the VM is running and the serial console is accessible, the output looks as follows:
    ```terminal
    Successfully connected to vm-rhel-9 console. The escape sequence is ^]
    ```