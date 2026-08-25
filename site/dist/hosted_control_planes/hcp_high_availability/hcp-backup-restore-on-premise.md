---
title: Backing up and restoring etcd on a hosted cluster
---

# Backing up and restoring etcd on a hosted cluster {#hcp-backup-restore-on-premise}

By backing up and restoring etcd on a hosted cluster, you can fix failures, such as corrupted or missing data in an etcd member of a three-node cluster. If members of the etcd cluster lose data or have a `CrashLoopBackOff` status, this approach helps prevent an etcd quorum loss.

**Additional resources**

- [Configuring Amazon Web Services](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#migration-configuring-aws-s3_installing-oadp-aws)
