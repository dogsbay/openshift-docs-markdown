{%- set _mod_docs_content_type = "REFERENCE" %}
# etcd backups before cluster updates {id="update-etcd-backup_{{ context }}"}

Create etcd backups before you update clusters to preserve your cluster state and to enable disaster recovery. {._abstract}

etcd backups record the state of your cluster and all of its resource objects. You can use backups to try to restore the state of a cluster when the cluster has become unrecoverable.

In the context of updates, you can attempt an etcd restoration of the cluster if an update introduced catastrophic conditions that cannot be fixed without reverting to the previous cluster version.

etcd restorations might be destructive and destabilizing to a running cluster, use them only as a last resort.


:::warning

Due to their high consequences, etcd restorations are not intended to be used as a rollback solution.
Rolling your cluster back to a previous version is not supported.
If your update is failing to complete, contact Red&#160;Hat support.

:::


There are several factors that affect the viability of an etcd restoration.
For more information, see "Backing up etcd data" and "Restoring to an earlier cluster state".