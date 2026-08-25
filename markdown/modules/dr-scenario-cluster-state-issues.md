{%- set _mod_docs_content_type = "CONCEPT" %}
# Issues and workarounds for restoring a persistent storage state {id="dr-scenario-cluster-state-issues_{{ context }}"}

To restore workloads safely after an etcd snapshot restore, identify and resolve outdated persistent storage references, including volumes, credentials, attachments, and devices on your {{ product_title }} cluster. {._abstract}

If your {{ product_title }} cluster uses persistent storage of any form, a state of the cluster is typically stored outside etcd. When you restore from an etcd backup, the status of the workloads in {{ product_title }} is also restored. However, if the etcd snapshot is old, the status might be invalid or outdated.


:::important

The contents of persistent volumes (PVs) are never part of the etcd snapshot. When you restore an {{ product_title }} cluster from an etcd snapshot, non-critical workloads might gain access to critical data, or vice-versa.

:::


The following are some example scenarios that produce an out-of-date status:

*   MySQL database is running in a pod backed up by a PV object. Restoring {{ product_title }} from an etcd snapshot does not bring back the volume on the storage provider, and does not produce a running MySQL pod, despite the pod repeatedly attempting to start. You must manually restore this pod by restoring the volume on the storage provider, and then editing the PV to point to the new volume.
*   Pod P1 is using volume A, which is attached to node X. If the etcd snapshot is taken while another pod uses the same volume on node Y, then when the etcd restore is performed, pod P1 might not be able to start correctly due to the volume still being attached to node Y. {{ product_title }} is not aware of the attachment, and does not automatically detach it. When this occurs, the volume must be manually detached from node Y so that the volume can attach on node X, and then pod P1 can start.
*   Cloud provider or storage provider credentials were updated after the etcd snapshot was taken. This causes any CSI drivers or Operators that depend on those credentials to not work. You might have to manually update the credentials required by those drivers or Operators.
*   A device is removed or renamed from {{ product_title }} nodes after the etcd snapshot is taken. The Local Storage Operator creates symlinks for each PV that it manages from `/dev/disk/by-id` or `/dev` directories. This situation might cause the local PVs to refer to devices that no longer exist.

    To fix this problem, an administrator must:
    1.  Manually remove the PVs with invalid devices.
    1.  Remove symlinks from respective nodes.
    1.  Delete `LocalVolume` or `LocalVolumeSet` objects. For more information, see "Deleting the Local Storage Operator resources".