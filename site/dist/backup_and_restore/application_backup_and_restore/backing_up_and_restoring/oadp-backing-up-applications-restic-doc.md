---
title: "Backing up applications with File System Backup: Kopia or Restic"
---

# Backing up applications with File System Backup: Kopia or Restic {#oadp-backing-up-applications-restic-doc}

Use {{ oadp_short }} File System Backup (FSB) with Kopia or Restic to back up and restore Kubernetes volumes attached to pods when snapshots are not available. This helps you to protect application data on NFS or other non-snapshot storage.

If your cloud provider does not support snapshots or if your applications are on NFS data volumes, you can create backups by using FSB.

FSB integration with OADP provides a solution for backing up and restoring almost any type of Kubernetes volumes. This integration is an additional capability of OADP and is not a replacement for existing functionality.

You back up Kubernetes resources, internal images, and persistent volumes with Kopia or Restic by editing the `Backup` custom resource (CR).

You do not need to specify a snapshot location in the `DataProtectionApplication` CR.

> [!NOTE]
> In OADP version 1.3 and later, you can use either Kopia or Restic for backing up applications.
>
> For the Built-in DataMover, you must use Kopia.
>
> In OADP version 1.2 and earlier, you can only use Restic for backing up applications.

> [!IMPORTANT]
> FSB does not support backing up `hostPath` volumes. For more information, see *FSB limitations*.

**Additional resources**

- [FSB limitations](https://velero.io/docs/v1.12/file-system-backup/#limitations)
