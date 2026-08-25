---
title: Backing up persistent volumes with CSI snapshots
---

# Backing up persistent volumes with CSI snapshots {#oadp-backing-up-pvs-csi-doc}

Back up persistent volumes with Container Storage Interface (CSI) snapshots by editing the `VolumeSnapshotClass` custom resource (CR) before you create the `Backup` CR. This helps you to leverage cloud-native snapshot capabilities for faster and more efficient backups.

For more information, see *CSI volume snapshots* and *Creating a Backup CR*.

**Additional resources**

- [CSI volume snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots-overview_persistent-storage-csi-snapshots)
- [Creating a Backup CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-cr#oadp-creating-backup-cr-doc)
