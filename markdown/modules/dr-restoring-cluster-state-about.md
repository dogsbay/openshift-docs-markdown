{%- set _mod_docs_content_type = "CONCEPT" %}
# About restoring to an earlier cluster state {id="dr-scenario-2-restoring-cluster-state-about_{{ context }}"}

To assess restore risks before you choose rollback as a last resort, review how an etcd snapshot restore affects your {{ product_title }} cluster, including Operators, workloads, and persistent storage. {._abstract}

You can use an etcd backup to restore your cluster to an earlier state. This can be used to recover from the following situations:

*   The cluster has lost the majority of control plane hosts and quorum.
*   An administrator has deleted something critical and must restore to recover the cluster.

If applicable, you might also need to recover from expired control plane certificates.


:::warning

Restoring to an earlier cluster state is a destructive and destabilizing action to take on a running cluster. This should only be used as a last resort.

If you cannot retrieve data using the Kubernetes API server, then etcd is available and you should not restore using an etcd backup.

:::


Restoring etcd effectively takes a cluster back in time and all clients experience a conflicting, parallel history. This can impact the behavior of watching components like kubelets, Kubernetes controller managers, persistent volume controllers, and {{ product_title }} Operators, including the network Operator.

It can cause Operator churn when the content in etcd does not match the actual content on disk, causing Operators for the Kubernetes API server, Kubernetes controller manager, Kubernetes scheduler, and etcd to get stuck when files on disk conflict with content in etcd. This can require manual actions to resolve the issues.

In extreme cases, the cluster can lose track of persistent volumes, delete critical workloads that no longer exist, reimage machines, and rewrite CA bundles with expired certificates.