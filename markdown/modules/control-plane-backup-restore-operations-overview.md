{%- set _mod_docs_content_type = "REFERENCE" %}
# Control plane backup and restore operations {id="control-plane-backup-restore-operations-overview_{{ context }}"}

As a cluster administrator, you might need to stop an {{ product_title }} cluster for a period and restart it later. {._abstract}

Some reasons for restarting a cluster are that you need to perform maintenance on a cluster or want to reduce resource costs. In {{ product_title }}, you can perform a [graceful shutdown of a cluster](/backup_and_restore/graceful-cluster-shutdown#graceful-shutdown-cluster) so that you can easily restart the cluster later.

You must [back up etcd data](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd) before shutting down a cluster; etcd is the key-value store for {{ product_title }}, which persists the state of all resource objects. An etcd backup plays a crucial role in disaster recovery. In {{ product_title }}, you can also [replace an unhealthy etcd member](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#replacing-unhealthy-etcd-member).

When you want to get your cluster running again, [restart the cluster gracefully](/backup_and_restore/graceful-cluster-restart#graceful-restart-cluster).


:::note

A cluster’s certificates expire one year after the installation date. You can shut down a cluster and expect it to restart gracefully while the certificates are still valid. Although the cluster automatically retrieves the expired control plane certificates, you must still [approve the certificate signing requests (CSRs)](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-recovering-expired-certs).

:::


You might run into several situations where {{ product_title }}  does not work as expected, such as:

*   You have a cluster that is not functional after the restart because of unexpected conditions, such as node failure or network connectivity issues.
*   You have deleted something critical in the cluster by mistake.
*   You have lost the majority of your control plane hosts, leading to etcd quorum loss.

You can always recover from a disaster situation by [restoring your cluster to its previous state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state) using the saved etcd snapshots.