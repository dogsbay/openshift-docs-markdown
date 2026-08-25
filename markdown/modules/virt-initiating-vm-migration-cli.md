{%- set _mod_docs_content_type = "PROCEDURE" %}
# Initiating live migration by using the CLI {id="virt-initiating-vm-migration-cli_{{ context }}"}

You can initiate the live migration of a running virtual machine (VM) by using the command line to create a `VirtualMachineInstanceMigration` object for the VM. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have the `kubevirt.io:migrate` RBAC role or you are a cluster administrator.

**Procedure**

1.  Create a `VirtualMachineInstanceMigration` manifest for the VM that you want to migrate:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachineInstanceMigration
    metadata:
      name: <migration_name>
    spec:
      vmiName: <vm_name>
    ```
1.  Create the object by running the following command:
    ```terminal
    $ oc create -f <migration_name>.yaml
    ```

    The `VirtualMachineInstanceMigration` object triggers a live migration of the VM. This object exists in the cluster only while the virtual machine instance is running, unless manually deleted.

**Verification**

*   Obtain the VM status by running the following command:
    ```terminal
    $ oc describe vmi <vm_name> -n <namespace>
    ```

    Example output:
    ```yaml
    # ...
    Status:
      Conditions:
        Last Probe Time:       <nil>
        Last Transition Time:  <nil>
        Status:                True
        Type:                  LiveMigratable
      Migration Method:  LiveMigration
      Migration State:
        Completed:                    true
        End Timestamp:                2018-12-24T06:19:42Z
        Migration UID:                d78c8962-0743-11e9-a540-fa163e0c69f1
        Source Node:                  node2.example.com
        Start Timestamp:              2018-12-24T06:19:35Z
        Target Node:                  node1.example.com
        Target Node Address:          10.9.0.18:43891
        Target Node Domain Detected:  true
    ```