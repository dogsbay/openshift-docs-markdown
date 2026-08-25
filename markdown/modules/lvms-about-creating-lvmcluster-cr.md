{%- set _mod_docs_content_type = "CONCEPT" %}
# Ways to create an LVMCluster custom resource {id="about-creating-lvmcluster-cr_{{ context }}"}

You can create an `LVMCluster` custom resource (CR) to configure {{ lvms }} deployment and provision storage for your workloads by using the {{ oc_first }}, {{ product_title }} web console, or {{ rh_rhacm_first }}. {._abstract}

You must install {{ lvms }} by using {{ rh_rhacm }} if you want to create an `LVMCluster` CR by using {{ rh_rhacm }}. 


:::important

You must create the `LVMCluster` CR in the same namespace where you installed the {{ lvms }} Operator, which is `openshift-storage` by default.

:::


After creating the `LVMCluster` CR, {{ lvms }} creates the following system-managed CRs:

*   A `storageClass` and `volumeSnapshotClass` for each device class.

    :::note

    {{ lvms }} configures the name of the storage class and volume snapshot class in the format `lvms-<device_class_name>`, where, `<device_class_name>` is the value of the `deviceClasses.name` field in the `LVMCluster` CR. For example, if the `deviceClasses.name` field is set to vg1, the name of the storage class and volume snapshot class is `lvms-vg1`.
    
    :::

*   `LVMVolumeGroup`: This CR is a specific type of persistent volume (PV) that is backed by an LVM volume group. It tracks the individual volume groups across multiple nodes.
*   `LVMVolumeGroupNodeStatus`: This CR tracks the status of the volume groups on a node.