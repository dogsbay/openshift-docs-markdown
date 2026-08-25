---
title: Backing up applications
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Backing up applications {id="backing-up-applications"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "backing-up-applications" %}

Back up applications by creating a `Backup` custom resource (CR) using snapshots, CSI, or File System Backup with Kopia or Restic.

Frequent backups might consume storage on the backup storage location. Check the frequency of backups, retention time, and the amount of data of the persistent volumes (PVs) if using non-local backups, for example, S3 buckets. Because all backups are retained until they expire, check the time to live (TTL) setting of the schedule.

Review the following information regarding backing up applications by using {{ oadp_short }}:

{% if openshift_rosa or openshift_rosa_hcp %}
The `Backup` CR creates backup files for Kubernetes resources and internal images on S3 object storage.
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   The `Backup` CR creates backup files for Kubernetes resources and internal images on S3 object storage.
*   If you use Velero’s snapshot feature to back up data stored on the persistent volume, only snapshot related information is stored in the S3 bucket along with the OpenShift object data.
*   If your cloud provider has a native snapshot API or supports CSI snapshots, the `Backup` CR backs up persistent volumes (PVs) by creating snapshots. For more information about working with CSI snapshots, see _Backing up persistent volumes with CSI snapshots_. For more information about CSI volume snapshots, see _CSI volume snapshots_.
*   If the underlying storage or the backup bucket are part of the same cluster, then the data might be lost in case of disaster. Ensure you configure your backup storage off-cluster.
*   If your cloud provider does not support snapshots or if your applications are on NFS data volumes, you can create backups by using Kopia or Restic. See _Backing up applications with File System Backup: Kopia or Restic_.
*   You can create backup hooks to run commands before or after the backup operation. See _Creating backup hooks_.
*   You can schedule backups by creating a `Schedule` CR instead of a `Backup` CR. See _Scheduling backups using Schedule CR_.
*   {{ product_title }} {{ product_version }} enforces a pod security admission (PSA) policy that can hinder the readiness of pods during a Restic restore process.

    This issue has been resolved in the OADP 1.1.6 and OADP 1.2.2 releases, therefore it is recommended that users upgrade to these releases.
{%- if not (openshift_rosa or openshift_rosa_hcp) %}

    For more information, see _Restic restore partially failing on Red Hat {{ product_title }} 4.15 due to changed PSA policy_.
{% endif %}


:::important

The {{ oadp_first }} does not support backing up volume snapshots that were created by other software.

:::

{% endif %}

{% include "./snippets/pod-volume-restore-snapshot-read-only.md" %}

{% leveloffset +1 %}{% include "./modules/oadp-review-backup-restore.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a Backup CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-cr#oadp-creating-backup-cr-doc)
*   [Creating backup hooks](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-hooks-doc#oadp-creating-backup-hooks-doc)
*   [Scheduling backups using Schedule CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-scheduling-backups-doc#oadp-scheduling-backups-doc)

{% if not openshift_rosa_hcp %}
*   [Installing Operators on clusters for administrators](/operators/admin/olm-adding-operators-to-cluster#olm-installing-operators-from-software-catalog_olm-adding-operators-to-a-cluster)

{%- endif %}
{%- if not (openshift_rosa or openshift_rosa_hcp) %}

*   [Backing up persistent volumes with CSI snapshots](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-pvs-csi-doc#oadp-backing-up-pvs-csi-doc)
*   [CSI volume snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots)
*   [Backing up applications with File System Backup: Kopia or Restic](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-applications-restic-doc#oadp-backing-up-applications-restic-doc)
*   [Installing Operators in namespaces for non-administrators](/operators/user/olm-installing-operators-in-namespace#olm-installing-operators-in-namespace)
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   [Restic restore partially failing on OCP 4.15 due to changed PSA policy](/backup_and_restore/application_backup_and_restore/troubleshooting/restic-issues#oadp-restic-restore-failing-psa-policy_restic-issues)
{% endif %}