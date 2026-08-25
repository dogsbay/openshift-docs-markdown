---
title: Backup and restore by using VM snapshots
---

# Backup and restore by using VM snapshots {#virt-backup-restore-snapshots}

You can back up and restore virtual machines (VMs) by using snapshots.

Snapshots are supported by the following storage providers:

- {{ rh_storage_first }}
- Any other cloud storage provider with the Container Storage Interface (CSI) driver that supports the Kubernetes Volume Snapshot API

To create snapshots of a VM in the `Running` state with the highest integrity, install the QEMU guest agent if it is not included with your operating system. The QEMU guest agent is included with the default Red Hat templates.

> [!IMPORTANT]
> Online snapshots are supported for virtual machines that have hot plugged virtual disks. However, hot plugged disks that are not in the virtual machine specification are not included in the snapshot.
>
> Ensure that the QEMU guest agent is installed and running on the virtual machine before you take an online snapshot.
>
> The QEMU guest agent stops responding to file system operations to ensure that the snapshot captures a consistent state.

The QEMU guest agent takes a consistent snapshot by attempting to quiesce the VM file system. This ensures that in-flight I/O is written to the disk before the snapshot is taken. If the guest agent is not present, quiescing is not possible and a best-effort snapshot is taken.

The conditions under which a snapshot is taken are reflected in the snapshot indications that are displayed in the web console or CLI. If these conditions do not meet your requirements, try creating the snapshot again or use an offline snapshot

## Additional resources {#_additional_resources}

- [CSI Volume Snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots)
