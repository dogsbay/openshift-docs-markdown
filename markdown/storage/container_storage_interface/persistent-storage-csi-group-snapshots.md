---
title: CSI volume group snapshots
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# CSI volume group snapshots {id="persistent-storage-csi-group-snapshots"}
{%- set context = "persistent-storage-csi-group-snapshots" %}

Volume group snapshots capture point-in-time copies of multiple volumes simultaneously, gathering data across related volumes. This enables restoring multi-volume applications to a previous state or provisioning new volume sets with the same data for testing or development purposes. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-group-snapshots-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-group-snapshots-limitations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Quiesce and Unquiesce Hooks](https://github.com/kubernetes/community/blob/master/wg-data-protection/data-protection-workflows-white-paper.md#quiesce-and-unquiesce-hooks)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-group-snapshot-create-admin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-group-snapshots-create.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-group-snapshots-restore.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Understanding persistent volumes](/storage/understanding-persistent-storage#persistent-volumes_understanding-persistent-storage)
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
*   [CSI volume snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots)