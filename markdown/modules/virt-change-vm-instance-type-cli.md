{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the instance type of a VM by using the CLI {id="virt-change-vm-instance-type-cli_{{ context }}"}

To change the instance type of a VM, change the `name` field in the VM spec. This triggers the update logic, which ensures that a new, immutable controller revision snapshot is taken of the new resource configuration. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You created the VM by using an instance type, or have administrator privileges for the VM that you want to modify.

**Procedure**

1.  Stop the VM.
1.  Run the following command, and replace `<vm_name>` with the name of your VM, and `<new_instancetype>` with the name of the instance type you want to change to:
    ```terminal
    $ oc patch vm/<vm_name> --type merge -p '{"spec":{"instancetype":{"name": "<new_instancetype>"}}}'
    ```

**Verification**

*   Check the controller revision reference in the updated VM `status` field. Run the following command and verify that the revision name is updated in the output:
    ```terminal
    $ oc get vms/<vm_name> -o json | jq .status.instancetypeRef
    ```

    Example output:
    ```terminal
    {
      "controllerRevisionRef": {
        "name": "vm-cirros-csmall-csmall-3e86e367-9cd7-4426-9507-b14c27a08671-2"
      },
      "kind": "VirtualMachineInstancetype",
      "name": "csmall"
    }
    ```
*   Optional: Check that the VM instance is running the new configuration defined in the latest controller revision. For example, if you updated the instance type to use 2 vCPUs instead of 1, run the following command and check the output:
    ```terminal
    $ oc get vmi/<vm_name> -o json | jq .spec.domain.cpu
    ```

    Example output that verifies that the revision uses 2 vCPUs:
    ```terminal
    {
      "cores": 1,
      "model": "host-model",
      "sockets": 2,
      "threads": 1
    }
    ```