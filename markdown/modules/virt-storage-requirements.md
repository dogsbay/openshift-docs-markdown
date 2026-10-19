{%- set _mod_docs_content_type = "REFERENCE" %}
# Storage requirements {id="virt-storage-requirements_{{ context }}"}

{{ VirtProductName }} requires {{ product_title }}-supported storage with specific configuration for VM workloads and snapshots. {._abstract}


Storage requirements for {{ VirtProductName }}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
:   *   Storage must be supported by {{ product_title }}. For more information, see "Optimizing storage" in the Additional resources section.
{% endif %}
{%- if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
:   *   Storage must be supported by {{ product_title }}.
{% endif %}
{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
    *   You must create a default {{ VirtProductName }} or {{ product_title }} storage class. The purpose of this is to address the unique storage needs of VM workloads and offer optimized performance, reliability, and user experience. If both {{ VirtProductName }} and {{ product_title }} default storage classes exist, the {{ VirtProductName }} class takes precedence when creating VM disks.

    :::note


    To mark a storage class as the default for virtualization workloads, set the annotation `storageclass.kubevirt.io/is-default-virt-class` to `"true"`.
    
    :::

{% endif %}
    *   If the storage provisioner supports snapshots, you must associate a `VolumeSnapshotClass` object with the default storage class.

## Storage I/O latency requirements for Windows virtual machines {id="virt-storage-io-latency-requirements_{{ context }}"}

Windows guest operating systems require consistently low storage I/O latency to remain stable. If the latency of the underlying storage exceeds the following thresholds, Windows VMs can become unstable or crash. {._abstract}

**Storage I/O latency thresholds for Windows VMs**

| Storage I/O latency | Impact |
| --- | --- |
| Less than 15 ms | Healthy. Storage performance is within the expected range for stable VM operation. |
| 15 ms to less than 100 ms | Unhealthy. Exceeding this threshold can eventually lead to workload instability and crashes. |
| 100 ms to less than 1,000 ms | Windows crashes are highly likely to occur. |
| 1,000 ms or more | Windows crashes are almost certain to occur. |


:::note

If storage I/O latency exceeds 100 ms multiple times a day, prioritize identifying the root cause of the latency. Troubleshooting the affected workload is a secondary concern until you resolve the underlying latency issue.

:::