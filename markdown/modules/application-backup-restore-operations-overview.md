{%- set _mod_docs_content_type = "REFERENCE" %}
# Application backup and restore operations {id="application-backup-restore-operations-overview_{{ context }}"}

As a cluster administrator, you can back up and restore applications running on {{ product_title }} by using the OpenShift API for Data Protection (OADP). {._abstract}

OADP backs up and restores Kubernetes resources and internal images, at the granularity of a namespace, by using the version of Velero that is appropriate for the version of OADP you install, according to the table in [OADP-Velero-{{ product_title }} version relationship](/backup_and_restore/application_backup_and_restore/troubleshooting/oadp-cli-tool#velero-oadp-version-relationship_oadp-cli-tool).  OADP backs up and restores persistent volumes (PVs) by using snapshots or Restic. For details, see [OADP features](/backup_and_restore/application_backup_and_restore/oadp-features-plugins#oadp-features_oadp-features-plugins).

## OADP requirements {id="oadp-requirements_{{ context }}"}

OADP has the following requirements:

*   You must be logged in as a user with a `cluster-admin` role.
*   You must have object storage for storing backups, such as one of the following storage types:
    *   {{ rh_storage }}
    *   Amazon Web Services
    *   Microsoft Azure
    *   {{ gcp_full }}
    *   S3-compatible object storage
    *   {{ ibm_cloud_name }} Object Storage S3

{% include "./snippets/oadp-ocp-compat.md" %}
*   To back up PVs with snapshots, you must have cloud storage that has a native snapshot API or supports Container Storage Interface (CSI) snapshots, such as the following providers:
    *   Amazon Web Services
    *   Microsoft Azure
    *   {{ gcp_full }}
    *   CSI snapshot-enabled cloud storage, such as Ceph RBD or Ceph FS


:::note

If you do not want to back up PVs by using snapshots, you can use [Restic](https://restic.net/), which is installed by the OADP Operator by default.

:::


## Backing up and restoring applications {id="backing-up-and-restoring-applications_{{ context }}"}

You back up applications by creating a `Backup` custom resource (CR). See [Creating a Backup CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-cr#backing-up-applications). You can configure the following backup options:

*   [Creating backup hooks](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-hooks-doc#backing-up-applications) to run commands before or after the backup operation
*   [Scheduling backups](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-scheduling-backups-doc#backing-up-applications)
*   [Backing up applications with File System Backup: Kopia or Restic](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-applications-restic-doc#backing-up-applications)
*   You restore application backups by creating a `Restore` (CR). See [Creating a Restore CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#oadp-creating-restore-cr_restoring-applications).
*   You can configure [restore hooks](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#oadp-creating-restore-hooks_restoring-applications) to run commands in init containers or in the application container during the restore operation.