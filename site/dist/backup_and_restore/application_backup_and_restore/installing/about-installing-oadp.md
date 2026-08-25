---
title: About installing OADP
---

# About installing OADP {#about-installing-oadp}

As a cluster administrator, you install the OpenShift API for Data Protection (OADP) by installing the OADP Operator. The OADP Operator installs {{ velero_link }}.

To back up Kubernetes resources and internal images, you must have object storage as a backup location, such as one of the following storage types:

- Amazon Web Services
- Microsoft Azure
- {{ gcp_full }}
- Multicloud Object Gateway
- {{ ibm_cloud_name }} Object Storage S3
- AWS S3 compatible object storage, such as Multicloud Object Gateway or MinIO

You can configure multiple backup storage locations within the same namespace for each individual OADP deployment.

You can back up persistent volumes (PVs) by using snapshots or a File System Backup (FSB).

To back up PVs with snapshots, you must have a cloud provider that supports either a native snapshot API or Container Storage Interface (CSI) snapshots, such as one of the following cloud providers:

- Amazon Web Services
- Microsoft Azure
- {{ gcp_full }}
- CSI snapshot-enabled cloud provider, such as {{ rh_storage }}

If your cloud provider does not support snapshots or if your storage is NFS, you can back up applications with File System Backup: Kopia or Restic on object storage.

You create a default `Secret` and then you install the Data Protection Application.

## Additional resources {#additional-resources_about-installing-oadp}

- [Installing OADP on Amazon Web Services](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#installing-oadp-aws)
- [Installing OADP on Microsoft Azure](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-azure#installing-oadp-azure)
- [Installing OADP on {{ gcp_full }}](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-gcp#installing-oadp-gcp)
- [Installing OADP on Multicloud Object Gateway](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#installing-oadp-mcg)
- [Installing OADP on {{ rh_storage }}](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-ocs#installing-oadp-ocs)
- [Backing up applications with File System Backup: Kopia or Restic](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-applications-restic-doc#backing-up-applications)
- [Cluster service version](/operators/understanding/olm/olm-understanding-olm#olm-csv_olm-understanding-olm)

{% include "./modules/about-oadp-update-channels.md" %}
