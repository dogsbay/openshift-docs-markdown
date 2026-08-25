{%- set _mod_docs_content_type = "PROCEDURE" %}
# Evicting KubeVirt virtual machines {id="hcp-virt-evict-vms_{{ context }}"}

In cases where KubeVirt virtual machines (VMs) cannot be live migrated, such as when you use GPU passthrough, the VMs must be evicted at the same time as the `NodePool` resource of the hosted cluster.  {._abstract}

Otherwise, the compute nodes might be shut down without being drained from the workload. This might also happen when you are upgrading the {{ VirtProductName }} Operator. 

To achieve a synchronized restart, you can set the `evictionStrategy` parameter on the `hyperconverged` resource to ensure that only VMs that are drained from workloads are rebooted. 

**Procedure**

1.  To learn more about the `hyperconverged` resource and the allowed values for the `evictionStrategy` parameter, enter the following command:
    ```terminal
    $ oc explain --api-version=hco.kubevirt.io/v1beta1 hyperconverged.spec.evictionStrategy
    ```
1.  Patch the `hyperconverged` resource by entering the following command:
    ```terminal {minja}
    $ oc patch -n {{ CNVNamespace }} {{ HCOCliKind }} kubevirt-hyperconverged \
      --type=merge \
      -p '{"spec": {"evictionStrategy": "External"}}'
    ```
1.  Patch the workload update strategy and the workload update methods by entering the following command:
    ```terminal {minja}
    $ oc patch -n {{ CNVNamespace }} {{ HCOCliKind }} kubevirt-hyperconverged \
      --type=merge \
      -p '{"spec": {"workloadUpdateStrategy": {"workloadUpdateMethods": ["LiveMigrate","Evict"]}}}'
    ```

    By applying this patch, you specify that VMs should be live-migrated if possible, and that only the VMs that cannot be live-migrated should be evicted.

**Verification**

*   Check whether the patch command was applied properly by entering the following command:
    ```terminal {minja}
    $ oc get -n {{ CNVNamespace }} {{ HCOCliKind }} kubevirt-hyperconverged -ojsonpath='{.spec.evictionStrategy}'
    ```
    ```terminal title="Example output"
    External
    ```