{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring workload update methods {id="virt-configuring-workload-update-methods_{{ context }}"}

You can configure how virtual machine workloads are updated during cluster upgrades by editing the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have enabled live migration in the cluster.

    :::note

    If a `VirtualMachineInstance` CR contains `evictionStrategy: LiveMigrate` and the virtual machine instance (VMI) does not support live migration, the VMI will not update.
    
    :::

*   You have installed the {{ oc_first }}.

**Procedure**

1.  To open the `HyperConverged` CR in your default editor, run the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Edit the `workloadUpdateStrategy` stanza of the `HyperConverged` CR. For example:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
      workloadUpdateStrategy:
        workloadUpdateMethods:
        - LiveMigrate
        - Evict
        batchEvictionSize: 10
        batchEvictionInterval: "1m0s"
    # ...
    ```
    *   `spec.workloadUpdateStrategy.workloadUpdateMethods` defines the methods that can be used to perform automated workload updates. The available values are `LiveMigrate` and `Evict`. If you enable both options as shown in this example, updates use `LiveMigrate` for VMIs that support live migration and `Evict` for any VMIs that do not support live migration. To disable automatic workload updates, you can either remove the `workloadUpdateStrategy` stanza or set `workloadUpdateMethods: []` to leave the array empty.
        *   `LiveMigrate` is the least disruptive update method. VMIs that support live migration are updated by migrating the virtual machine (VM) guest into a new pod with the updated components enabled. If `LiveMigrate` is the only workload update method listed, VMIs that do not support live migration are not disrupted or updated.
        *   `Evict` is a disruptive method that shuts down VMI pods during upgrade. `Evict` is the only update method available if live migration is not enabled in the cluster. If a VMI is controlled by a `VirtualMachine` object that has `runStrategy: Always` configured, a new VMI is created in a new pod with updated components.
    *   `spec.workloadUpdateStrategy.batchEvictionSize` defines the number of VMIs that can be forced to be updated at a time by using the `Evict` method. This does not apply to the `LiveMigrate` method.
    *   `spec.workloadUpdateStrategy.batchEvictionInterval` defines the interval to wait before evicting the next batch of workloads. This does not apply to the `LiveMigrate` method.

        :::note

        You can configure live migration limits and timeouts by editing the `spec.liveMigrationConfig` stanza of the `HyperConverged` CR.
        
        :::

1.  To apply your changes, save and exit the editor.