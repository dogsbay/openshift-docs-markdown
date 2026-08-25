{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a VM eviction strategy using the CLI {id="virt-configuring-vm-eviction-strategy-cli_{{ context }}"}

You can configure an eviction strategy for a virtual machine (VM) by using the command line. {._abstract}


:::important

The default eviction strategy is `LiveMigrate`. A non-migratable VM with a `LiveMigrate` eviction strategy might prevent nodes from draining or block an infrastructure upgrade because the VM is not evicted from the node. This situation causes a migration to remain in a `Pending` or `Scheduling` state unless you shut down the VM manually.

You must set the eviction strategy of non-migratable VMs to `LiveMigrateIfPossible`, which does not block an upgrade, or to `None`, for VMs that should not be migrated.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `VirtualMachine` resource by running the following command:
    ```terminal
    $ oc edit vm <vm_name> -n <namespace>
    ```

    Example eviction strategy:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: <vm_name>
    spec:
      template:
        spec:
          evictionStrategy: LiveMigrateIfPossible
    # ...
    ```
    *   `spec.template.spec.evictionStrategy` defines the eviction strategy. The default value is `LiveMigrate`.
1.  Restart the VM to apply the changes:
    ```terminal
    $ virtctl restart <vm_name> -n <namespace>
    ```