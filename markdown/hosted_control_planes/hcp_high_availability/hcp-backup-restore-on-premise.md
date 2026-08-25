---
title: Backing up and restoring etcd on a hosted cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up and restoring etcd on a hosted cluster {id="hcp-backup-restore-on-premise"}
{%- set context = "hcp-backup-restore-on-premise" %}

By backing up and restoring etcd on a hosted cluster, you can fix failures, such as corrupted or missing data in an etcd member of a three-node cluster. If members of the etcd cluster lose data or have a `CrashLoopBackOff` status, this approach helps prevent an etcd quorum loss. {._abstract}

{% leveloffset +1 %}{% include "./modules/hosted-cluster-etcd-backup-restore-on-premise.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring Amazon Web Services](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#migration-configuring-aws-s3_installing-oadp-aws)

{% leveloffset +1 %}{% include "./modules/hosted-cluster-etcd-restore-on-premise.md" %}{% endleveloffset %}