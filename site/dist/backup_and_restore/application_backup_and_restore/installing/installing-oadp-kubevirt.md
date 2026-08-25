---
title: Configuring the {{ oadp_full }} with {{ VirtProductName }}
---

# Configuring the {{ oadp_full }} with {{ VirtProductName }} {#installing-oadp-kubevirt}

You can install the {{ oadp_first }} with {{ VirtProductName }} by installing the OADP Operator and configuring a backup location. Then, you can install the Data Protection Application.

Back up and restore virtual machines by using the {{ oadp_full }}.

{{ oadp_full }} with {{ VirtProductName }} supports the following backup and restore storage options:

- Container Storage Interface (CSI) backups
- Container Storage Interface (CSI) backups with DataMover

The following storage options are excluded:

- File system backup and restore
- Volume snapshot backups and restores

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.

> [!IMPORTANT]
> Red Hat only supports the combination of {{ oadp_short }} versions 1.3.0 and later, and {{ VirtProductName }} versions 4.14 and later.
>
> {{ oadp_short }} versions before 1.3.0 are not supported for back up and restore of {{ VirtProductName }}.

## Additional resources {#additional-resources_installing-oadp-kubevirt}

- [Application backup and restore operations](/openshift-docs-markdown/backup_and_restore/index#application-backup-restore-operations-overview_backup-restore-overview)
- [Backing up applications with File System Backup: Kopia or Restic](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-applications-restic-doc#oadp-backing-up-applications-restic-doc)
- [{{ oadp_short }} plugins](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/oadp-features-plugins#oadp-plugins_oadp-features-plugins)
- [`Backup` custom resource (CR)](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
- [`Restore` CR](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#restoring-applications)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- \[Velero {{ velero_version }}\](https://velero.io/docs/v{{ velero_version }})
