---
title: CSI volume snapshots
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# CSI volume snapshots {id="persistent-storage-csi-snapshots"}
{%- set context = "persistent-storage-csi-snapshots" %}

Container Storage Interface (CSI) snapshots capture point-in-time copies for data protection and recovery. Snapshots enable restoring volumes to previous states or creating new volumes from existing data using `VolumeSnapshot`, `VolumeSnapshotContent`, and `VolumeSnapshotClass` objects. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-snapshots-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-snapshots-controller-sidecar.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-snapshots-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-snapshots-provision.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-snapshots-create.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-snapshots-create-static.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-snapshots-delete.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-snapshots-restore.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-change-max-snapshot.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Persistent volumes](/storage/understanding-persistent-storage#persistent-volumes_understanding-persistent-storage)
*   [Kubernetes CSI Developer Documentation](https://kubernetes-csi.github.io/docs/drivers.html)
*   [Dynamically creating a volume snapshot](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots-create_persistent-storage-csi-snapshots)
*   [Statically creating a volume snapshot](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots-create-static_persistent-storage-csi-snapshots)
*   [Best practices for using VMware snapshots in the vSphere environment](https://kb.vmware.com/s/article/1025279)