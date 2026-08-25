{%- set _mod_docs_content_type = "CONCEPT" %}
# Disaster recovery solutions for Red&#160;Hat managed clusters {id="virt-dr-solutions-rh-managed-clusters_{{ context }}"}

You can use disaster recovery (DR) solutions that combine {{ rh_rhacm_first }}, Red&#160;Hat Ceph Storage, and {{ rh_storage }} components to failover applications between sites. {._abstract}

## Metro-DR for {{ rh_storage_first }} {id="metro-dr-odf_{{ context }}"}

{{ VirtProductName }} supports the Metro-DR solution for {{ rh_storage }}, which provides two-way synchronous data replication between managed {{ VirtProductName }} clusters installed on primary and secondary sites.

**Metro-DR differences**

*   This synchronous solution is only available to metropolitan distance data centers with a network round-trip latency of 10 milliseconds or less.
*   Multiple disk VMs are supported.
*   To prevent data corruption, you must ensure that storage is fenced during failover.

    :::tip

    Fencing means isolating a node so that workloads do not run on it.
    
    :::


For more information about using the Metro-DR solution for {{ rh_storage }} with {{ VirtProductName }}, see {{ ibm_title }}'s {{ rh_storage }} Metro-DR documentation.

## Regional-DR for {{ rh_storage_first }} {id="regional-dr-odf_{{ context }}"}

{{ VirtProductName }} supports the Regional-DR solution for {{ rh_storage }}, which provides asynchronous data replication at regular intervals between managed {{ VirtProductName }} clusters installed on primary and secondary sites.

**Regional-DR differences**

*   Regional-DR supports higher network latency between the primary and secondary sites.
*   Regional-DR uses RBD snapshots to replicate data asynchronously. Currently, your applications must be resilient to small variances between VM disks. You can prevent these variances by using single disk VMs.
*   Using the import method when selecting a population source for your VM disk is recommended. However, you can protect VMs that use cloned PVCs if you select a `VolumeReplicationClass` that enables image flattening. For more information, see the {{ rh_storage }} documentation.

For more information about using the Regional-DR solution for {{ rh_storage }} with {{ VirtProductName }}, see {{ ibm_title }}'s {{ rh_storage }} Regional-DR documentation.