---
title: "Introduction to {{ oadp_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}

# Introduction to {{ oadp_full }} {id="oadp-introduction"}
{%- set context = "oadp-api" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" %}

Use {{ oadp_first }} to safeguard applications, application-related cluster resources, persistent volumes, and internal images on {{ product_title }}. {{ oadp_short }} backs up containerized applications and virtual machines (VMs). This helps you ensure disaster recovery. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
However, {{ oadp_short }} does not serve as a disaster recovery solution for `etcd` or {{ OCP_short }} Operators.
{% endif %}


:::important

{{ oadp_short }} support is applicable to customer workload namespaces and cluster scope resources.

Full cluster `backup` and `restore` are not supported.

:::


## {{ oadp_full }} APIs {id="oadp-apis_{{ context }}"}

{{ oadp_short }} provides APIs that enable multiple approaches to customizing backups and preventing the inclusion of unnecessary or inappropriate resources.

{{ oadp_short }} provides the following APIs. See the _Additional resources_ section for more details.

*   `Backup`
*   `Restore`
*   `Schedule`
*   `BackupStorageLocation`
*   `VolumeSnapshotLocation`

{% leveloffset +2 %}{% include "./modules/oadp-operator-supported.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Backup](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
*   [Restore](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#restoring-applications)
*   [Schedule](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-scheduling-backups-doc#oadp-scheduling-backups-doc)

{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   [BackupStorageLocation](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#oadp-about-backup-snapshot-locations_installing-oadp-aws)
*   [VolumeSnapshotLocation](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-backing-up-pvs-csi-doc#oadp-backing-up-pvs-csi-doc)
*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
{% endif %}