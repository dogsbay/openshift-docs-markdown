{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a VM from a container disk by using the CLI {id="virt-creating-vm-import-cli_{{ context }}"}

You can create a virtual machine (VM) from a container disk by using the command line. {._abstract}

**Prerequisites**

*   You must have access credentials for the container registry that contains the container disk.
*   You have installed the `virtctl` CLI.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `VirtualMachine` manifest for your VM and save it as a YAML file. For example, to create a minimal {{ op_system_base_full }} VM from a container disk, run the following command:
    ```terminal
    $ virtctl create vm --name vm-rhel-9 --instancetype u1.small --preference rhel.9 --volume-containerdisk src:registry.redhat.io/rhel9/rhel-guest-image:9.5
    ```
1.  Review the `VirtualMachine` manifest for your VM:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: vm-rhel-9
    spec:
      instancetype:
        name: u1.small
      preference:
        name: rhel.9
      runStrategy: Always
      template:
        metadata:
          creationTimestamp: null
        spec:
          domain:
            devices: {}
            resources: {}
          terminationGracePeriodSeconds: 180
          volumes:
          - containerDisk:
              image: registry.redhat.io/rhel9/rhel-guest-image:9.5
            name: vm-rhel-9-containerdisk-0
    ```
    *   `metadata.name` defines the VM name.
    *   `spec.instancetype.name` defines the instance type to use to control resource sizing of the VM.
    *   `spec.preference.name` defines the preference to use.
    *   `spec.template.spec.volumes.containerDisk.image` defines the URL of the container disk.
1.  Create the VM by running the following command:
    ```terminal
    $ oc create -f <vm_manifest_file>.yaml
    ```

**Verification**

1.  Monitor the status of the VM:
    ```terminal
    $ oc get vm <vm_name>
    ```

    If the provisioning is successful, the VM status is `Running`. Example output:
    ```terminal
    NAME        AGE   STATUS    READY
    vm-rhel-9   18s   Running   True
    ```
1.  Verify that provisioning is complete and that the VM has started by accessing its serial console:
    ```terminal
    $ virtctl console <vm_name>
    ```

    If the VM is running and the serial console is accessible, the output looks as follows:
    ```terminal
    Successfully connected to vm-rhel-9 console. The escape sequence is ^]
    ```