---
title: Backing up and restoring etcd data
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up and restoring etcd data {id="backup-etcd"}
{%- set context = "backup-etcd" %}

You can back up etcd data for your {{ product_title }} cluster by manually creating an etcd snapshot and saving static pod resources on a control plane host, or by configuring automated single or recurring backups. {._abstract}

etcd is the key-value store for {{ product_title }}, which persists the state of all resource objects.

Back up etcd data for your cluster regularly. Store backups in a secure location, ideally outside the {{ product_title }} environment.

Do not take an etcd backup before the first certificate rotation completes. Certificate rotation occurs 24 hours after installation. A backup taken before rotation completes contains expired certificates.

Take etcd backups during non-peak usage hours when possible. The etcd snapshot has a high I/O cost.

Be sure to take an etcd backup before you update your cluster. Taking a backup before you update is important because when you restore your cluster, you must use an etcd backup that was taken from the same z-stream release. For example, an {{ product_title }} 4.17.5 cluster must use an etcd backup that was taken from 4.17.5.


:::important

Back up etcd data for your cluster by performing a single invocation of the backup script on a control plane host. Do not take a backup for each control plane host.

:::


{% leveloffset +1 %}{% include "./modules/backup-etcd.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_backup-etcd" ._additional-resources}
*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)
*   [Recovering an unhealthy etcd cluster for hosted control planes](/hosted_control_planes/hcp_high_availability/hcp-recovering-etcd-cluster#hcp-recovering-etcd-cluster)

{% leveloffset +1 %}{% include "./modules/etcd-creating-automated-backups.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-single-etcd-backup.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-recurring-etcd-backups.md" %}{% endleveloffset %}