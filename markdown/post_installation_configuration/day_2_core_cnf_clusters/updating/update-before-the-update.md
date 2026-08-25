---
title: Before you update the telco core CNF cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Before you update the telco core CNF cluster {id="update-before-the-update"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "update-before-the-update" %}

Before you start the cluster update, you must pause worker nodes, back up the etcd database, and do a final cluster health check before proceeding.

{% leveloffset +1 %}{% include "./modules/update-pause-worker-nodes-before-the-update.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-backup-etcd-database-before-update.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/backup-etcd.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-single-etcd-backup.md" %}{% endleveloffset %}

**Additional resources**

*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)

{% leveloffset +1 %}{% include "./modules/update-checking-the-cluster-health.md" %}{% endleveloffset %}