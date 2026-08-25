{%- set _mod_docs_content_type = "REFERENCE" %}
# Tested maximums for {{ VirtProductName }} {id="virt-tested-maximums_{{ context }}"}

Maximums are based on a single cluster of the largest possible size for a {{ VirtProductName }} 4.x environment. Approaching the maximum values can reduce performance and increase latency. Consider using multiple smaller clusters if possible to improve performance. {._abstract}

## Virtual machine maximums {id="vm-maximums_{{ context }}"}

Maximums apply to virtual machines (VMs) running on {{ VirtProductName }} and are subject to the limits specified in "Virtualization limits for Red Hat&#160;Enterprise Linux with KVM".

| Objective (per VM) | Tested limit | Theoretical limit |
| --- | --- | --- |
| Virtual CPUs | 255 vCPUs | 255 vCPUs |
| Memory | 6 TB | 16 TB |
| Single disk size | 100 TB | 100 TB |
| Hot-pluggable disks | 255 disks | N/A |


:::note

Each VM must have at least 512 MB of memory.
The `fstype` in the guest operating system (OS) must support the maximum limits. Do not use preallocation in data volumes that are larger than 99 TB.

:::


## Host maximums {id="host-maximums_{{ context }}"}

The following maximums apply to the {{ product_title }} hosts used for {{ VirtProductName }}.

| Objective (per host) | Tested limit | Theoretical limit |
| --- | --- | --- |
| Logical CPU cores or threads | Same as {{ op_system_base_full }} | N/A |
| RAM | Same as {{ op_system_base }} | N/A |
| Simultaneous live migrations | Defaults to 2 outbound migrations per node, and 5 concurrent migrations per cluster | Depends on NIC bandwidth |
| Live migration bandwidth | No default limit | Depends on NIC bandwidth |

## Cluster maximums {id="cluster-maximums_{{ context }}"}

The following maximums apply to objects defined in {{ VirtProductName }}.

| Objective (per cluster) | Tested limit | Theoretical limit |
| --- | --- | --- |
| Number of attached PVs per node | N/A | CSI storage provider dependent |
| Maximum PV size | N/A | CSI storage provider dependent |
| Hosts | 500 hosts (100 or fewer recommended) ^[1]^ | Same as {{ product_title }} |
| Defined VMs | 10,000 VMs ^[2]^ | Same as {{ product_title }} |
1.  If you use more than 100 nodes, consider using {{ rh_rhacm_first }} to manage multiple clusters instead of scaling out a single control plane. Larger clusters add complexity, require longer updates, and depending on node size and total object density, they can increase control plane stress.

    Using multiple clusters can be beneficial in areas like per-cluster isolation and high availability.
1.  The maximum number of VMs per node depends on the host hardware and resource capacity. It is also limited by the following parameters:
    *   Settings that limit the number of pods that can be scheduled to a node. For example: `maxPods`.
    *   The default number of KVM devices. For example: `devices.kubevirt.io/kvm: 1k`.