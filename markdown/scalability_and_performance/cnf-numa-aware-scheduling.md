---
title: Scheduling NUMA-aware workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Scheduling NUMA-aware workloads {id="cnf-numa-aware-scheduling"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "numa-aware" %}

To deploy high performance workloads with optimal efficiency, use NUMA-aware scheduling. This feature aligns pods with the underlying hardware topology in your {{ product_title }} cluster, minimizing latency and maximizing resource utilization.

{%- set FeatureName = "NUMA-aware scheduling" %}

By using the NUMA Resources Operator, you can schedule high-performance workloads in the same NUMA zone. The Operator deploys a node resources exporting agent that reports on available cluster node NUMA resources, and a secondary scheduler that manages the workloads.

## About NUMA {id="cnf-numa-aware-scheduling-about-numa_{{ context }}"}

{% include "./snippets/about-numa.md" %}

{% leveloffset +1 %}{% include "./modules/cnf-about-numa-aware-scheduling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-numa-resource-scheduling-strategies.md" %}{% endleveloffset %}

**Additional resources**

*   [Scheduling pods using a secondary scheduler](/nodes/scheduling/secondary_scheduler/nodes-secondary-scheduler-configuring#secondary-scheduler-configuring)
*   [Changing where high-performance workloads run](/scalability_and_performance/cnf-numa-aware-scheduling#cnf-changing-where-high-performance-workloads-run_numa-aware)

## Installing the NUMA Resources Operator {id="installing-the-numa-resources-operator_{{ context }}"}

NUMA Resources Operator deploys resources that allow you to schedule NUMA-aware workloads and deployments. You can install the NUMA Resources Operator using the {{ product_title }} CLI or the web console.

{% leveloffset +2 %}{% include "./modules/cnf-installing-numa-resources-operator-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-installing-numa-resources-operator-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-configuring-single-numa-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-managing-ha-nrop-scheduler.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cnf-customizing-schedulder-ha-nro.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cnf-disabling-schedulder-ha-nro.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cnf-verifying-schedulder-ha-status.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring image registry repository mirroring](/disconnected/updating/disconnected-update#images-configuration-registry-mirror-configuring_updating-disconnected-cluster)
*   [About the Performance Profile Creator](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-about-the-profile-creator-tool_cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +2 %}{% include "./modules/cnf-sample-single-numa-policy-from-pp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-configuring-kubelet-nro.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-scheduling-numa-aware-workloads-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-creating-nrop-cr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-creating-nrop-cr-hosted-control-plane.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a performance profile](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-create-performance-profiles_cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +2 %}{% include "./modules/cnf-deploying-the-numa-aware-scheduler.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring image registry repository mirroring](/disconnected/updating/disconnected-update#images-configuration-registry-mirror_updating-disconnected-cluster)

{% leveloffset +2 %}{% include "./modules/cnf-scheduling-numa-aware-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-nrop-support-schedulable-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-configuring-nrop-on-schedlable-control-planes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-configuring-node-groups-for-the-numaresourcesoperator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-topology-aware-scheduler-scalability.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-optimizing-topology-aware-scheduler-large-clusters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-troubleshooting-numa-aware-workloads.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-reporting-more-exact-reource-availability.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-scheduling-exact-based-on-reource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-checking-numa-aware-scheduler-logs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-troubleshooting-resource-topo-exporter.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-troubleshooting-missing-rte-config-maps.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-about-collecting-nro-data.md" %}{% endleveloffset %}