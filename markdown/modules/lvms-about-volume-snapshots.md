{%- set _mod_docs_content_type = "CONCEPT" %}
# About volume snapshots {id="lvms-about-volume-snapshots_{{ context }}"}

You can create volume snapshots of persistent volume claims (PVCs) provisioned by {{ lvms }} to back up application data or revert to a previous state, providing data protection and recovery capabilities. {._abstract}

You can perform the following actions using the volume snapshots:

*   Back up your application data.

    :::important

    Volume snapshots are located on the same devices as the original data. To use the volume snapshots as backups, you must move the snapshots to a secure location. You can use OpenShift API for Data Protection (OADP) backup and restore solutions. For information about OADP, see "OADP features".
    
    :::

*   Revert to a state at which the volume snapshot was taken.


:::note

You can also create volume snapshots of the volume clones. 

:::


## Limitations for creating volume snapshots in multi-node topology {id="lvms-about-volume-snapshots-limits_{{ context }}"}
{{ lvms }} has the following limitations for creating volume snapshots in multi-node topology:

*   Creating volume snapshots is based on the LVM thin pool capabilities.
*   After creating a volume snapshot, the node must have additional storage space for further updating the original data source.
*   You can create volume snapshots only on the node where you have deployed the original data source.
*   Pods relying on the PVC that uses the snapshot data can be scheduled only on the node where you have deployed the original data source.