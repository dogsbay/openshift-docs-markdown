{%- set _mod_docs_content_type = "REFERENCE" %}
# Bare-metal cluster installation requirements for {{ VirtProductName }} {id="virt-planning-bare-metal-cluster-for-ocp-virt_{{ context }}"}

Configure your bare-metal cluster correctly during installation to support {{ VirtProductName }}, as certain required settings cannot be changed after installation. {._abstract}

## High availability requirements for {{ VirtProductName }} {id="virt-planning-bare-metal-cluster-for-ocp-virt-HA_{{ context }}"}

When discussing high availability (HA) features in the context of {{ VirtProductName }}, this refers only to the replication model of the core cluster components, determined by the `controlPlaneTopology` and `infrastructureTopology` fields in the `Infrastructure` custom resource (CR).
Setting these fields to `HighlyAvailable` offers component redundancy, which is distinct from general cluster-wide application HA. Setting these fields to `SingleReplica` disables component redundancy, and therefore disables {{ VirtProductName }} HA features.

If you plan to use {{ VirtProductName }} HA features, you must have three control plane nodes at the time of cluster installation. The `controlPlaneTopology` status in the `Infrastructure` CR for the cluster must be `HighlyAvailable`.


:::note

You can install {{ VirtProductName }} on a single-node cluster, but {{ sno }} does not support HA features.

:::


## Live migration requirements for {{ VirtProductName }} {id="virt-planning-bare-metal-cluster-for-ocp-virt-LM_{{ context }}"}

*   If you plan to use live migration, you must have multiple worker nodes. The `infrastructureTopology` status in the `Infrastructure` CR for the cluster must be `HighlyAvailable`. A minimum of three worker nodes is recommended.

    :::note

    You can install {{ VirtProductName }} on a single-node cluster, but {{ sno }} does not support live migration.
    
    :::

*   Live migration requires shared storage. Storage for {{ VirtProductName }} must support and use the ReadWriteMany (RWX) access mode.

## SR-IOV requirements for {{ VirtProductName }} {id="virt-planning-bare-metal-cluster-for-ocp-virt-SR-IOV_{{ context }}"}

If you plan to use Single Root I/O Virtualization (SR-IOV), ensure that your network interface controllers (NICs) are supported by {{ product_title }}.