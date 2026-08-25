{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a virtual machine snapshot in the CLI {id="virt-deleting-vm-snapshot-cli_{{ context }}"}

You can delete an existing virtual machine (VM) snapshot by deleting the appropriate `VirtualMachineSnapshot` object. {._abstract}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).

**Procedure**

*   Delete the `VirtualMachineSnapshot` object:
    ```terminal
    $ oc delete vmsnapshot <snapshot_name>
    ```

    The snapshot controller deletes the `VirtualMachineSnapshot` along with the associated `VirtualMachineSnapshotContent` object.

**Verification**

*   Verify that the snapshot is deleted and no longer attached to this VM:
    ```terminal
    $ oc get vmsnapshot
    ```