---
title: Backing up persistent volumes with CSI snapshots
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up persistent volumes with CSI snapshots {id="oadp-backing-up-pvs-csi-doc"}
{%- set context = "backing-up-applications" %}

Back up persistent volumes with Container Storage Interface (CSI) snapshots by editing the `VolumeSnapshotClass` custom resource (CR) before you create the `Backup` CR. This helps you to leverage cloud-native snapshot capabilities for faster and more efficient backups. {._abstract}

For more information, see _CSI volume snapshots_ and _Creating a Backup CR_.

{% leveloffset +1 %}{% include "./modules/oadp-backingup-persistent-volumes.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [CSI volume snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots-overview_persistent-storage-csi-snapshots)
*   [Creating a Backup CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-cr#oadp-creating-backup-cr-doc)