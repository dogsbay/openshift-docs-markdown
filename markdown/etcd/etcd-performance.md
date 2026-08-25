---
title: Ensuring reliable etcd performance and scalability
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Ensuring reliable etcd performance and scalability {id="etcd-performance"}
{%- set context = "etcd-performance" %}

Optimize etcd reliability and scalability by understanding hardware, network, and cluster factors that affect control plane performance, from storage latency to API transaction rates. {._abstract}

{% leveloffset +1 %}{% include "./modules/etcd-leader-election-log-replication.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [The etcd learner design](https://etcd.io/docs/v3.5/learning/design-learner/)
*   [Failure modes](https://etcd.io/docs/v3.5/op-guide/failures/)

{% leveloffset +1 %}{% include "./modules/etcd-node-scaling.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Adding hosts](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/installing-with-api#adding-hosts_installing-with-api)
*   [Replacing a control plane node in a healthy cluster](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/expanding-the-cluster#installing-control-plane-node-healthy-cluster_expanding-the-cluster)
*   [Expanding the cluster](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/expanding-the-cluster)
*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)

{% leveloffset +1 %}{% include "./modules/etcd-customize-ttl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-disk-latency.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-consensus-latency.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/move-etcd-different-disk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-defrag-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/etcd-defrag-automatic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/etcd-defrag.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-tuning-parameters.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-about_nodes-cluster-enabling-features)

{% leveloffset +1 %}{% include "./modules/etcd-timer-tunables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-database-size.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-increase-db.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-increase-db-troubleshooting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-network-latency-jitter.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Setting tuning parameters for etcd](/etcd/etcd-performance#etcd-tuning-parameters_etcd-performance)

{% leveloffset +1 %}{% include "./modules/etcd-peer-round-trip.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [How to query from the command line Prometheus statistics (Red&#160;Hat Knowledgebase)](https://access.redhat.com/solutions/5151831)

{% leveloffset +1 %}{% include "./modules/etcd-determine-kube-api-transaction-rate.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [kube-burner-ocp documentation](https://kube-burner.github.io/kube-burner-ocp/latest/)