---
title: Backing up and restoring etcd on the management cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up and restoring etcd on the management cluster {id="hcp-backup-restore-aws"}
{%- set context = "hcp-backup-restore-aws" %}

You can back up and restore etcd on the management cluster to fix failures.

{% leveloffset +1 %}{% include "./modules/backup-etcd-hosted-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restoring-etcd-snapshot-hosted-cluster.md" %}{% endleveloffset %}