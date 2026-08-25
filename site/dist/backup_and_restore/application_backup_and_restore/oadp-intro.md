---
title: Introduction to {{ oadp_full }}
---

# Introduction to {{ oadp_full }} {#oadp-introduction}

Use {{ oadp_first }} to safeguard applications, application-related cluster resources, persistent volumes, and internal images on OpenShift Container Platform. {{ oadp_short }} backs up containerized applications and virtual machines (VMs). This helps you ensure disaster recovery.

However, {{ oadp_short }} does not serve as a disaster recovery solution for `etcd` or {{ OCP_short }} Operators.

> [!IMPORTANT]
> {{ oadp_short }} support is applicable to customer workload namespaces and cluster scope resources.
>
> Full cluster `backup` and `restore` are not supported.

## {{ oadp_full }} APIs {#oadp-apis_oadp-api}

{{ oadp_short }} provides APIs that enable multiple approaches to customizing backups and preventing the inclusion of unnecessary or inappropriate resources.

{{ oadp_short }} provides the following APIs. See the *Additional resources* section for more details.

- `Backup`
- `Restore`
- `Schedule`
- `BackupStorageLocation`
- `VolumeSnapshotLocation`

**Additional resources**

- [Backup](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
- [Restore](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#restoring-applications)
- [Schedule](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-scheduling-backups-doc#oadp-scheduling-backups-doc)
- [BackupStorageLocation](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#oadp-about-backup-snapshot-locations_installing-oadp-aws)
- [VolumeSnapshotLocation](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-pvs-csi-doc#oadp-backing-up-pvs-csi-doc)
- [Backing up etcd](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
