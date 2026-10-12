{%- set _mod_docs_content_type = "CONCEPT" %}
# Backing up and restoring etcd on a hosted cluster {id="backup-and-restore-etcd-on-a-hosted-cluster-intro_{{ context }}"}

By backing up and restoring etcd on a hosted cluster, you can fix failures, such as corrupted or missing data in an etcd member of a three-node cluster. If members of the etcd cluster lose data or have a `CrashLoopBackOff` status, this approach helps prevent an etcd quorum loss.