---
title: Tuning nodes for low latency with the performance profile
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Tuning nodes for low latency with the performance profile {id="cnf-tuning-low-latency-nodes-with-perf-profile"}
{%- set context = "cnf-tuning-low-latency-nodes-with-perf-profile" %}

Tune nodes for low latency by using the cluster performance profile. You can restrict CPUs for infra and application containers, configure huge pages, Hyper-Threading, and configure CPU partitions for latency-sensitive processes. {._abstract}

{% leveloffset +1 %}{% include "./modules/cnf-create-performance-profiles.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-about-the-profile-creator-tool.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-creating-mcp-for-ppc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-gathering-data-about-cluster-using-must-gather.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Gathering data about your cluster](/support/gathering-cluster-data#nodes-nodes-managing)

{% leveloffset +2 %}{% include "./modules/cnf-running-the-performance-creator-profile.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-running-the-performance-creator-profile-offline.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-performance-profile-creator-arguments.md" %}{% endleveloffset %}

## Reference performance profiles {id="cnf-create-performance-profiles-reference" ._additional-resources}

Use the following reference performance profiles as the basis to develop your own custom profiles.

{% leveloffset +2 %}{% include "./modules/installation-openstack-ovs-dpdk-performance-profile.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-telco-ran-reference-design-performance-profile-template.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-telco-core-reference-design-performance-profile-template.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-use-device-interrupt-processing-for-isolated-cpus.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-configuring-workload-hints.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding workload hints](https://access.redhat.com/articles/7081587)

{% leveloffset +1 %}{% include "./modules/cnf-configuring-power-saving-for-nodes.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the Performance Profile Creator](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-about-the-profile-creator-tool_cnf-tuning-low-latency-nodes-with-perf-profile)
*   [Disabling power saving mode for high priority pods](/scalability_and_performance/cnf-provisioning-low-latency-workloads#cnf-configuring-high-priority-workload-pods_cnf-provisioning-low-latency)
*   [Managing device interrupt processing for guaranteed pod isolated CPUs](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#managing-device-interrupt-processing-for-guaranteed-pod-isolated-cpus_cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +1 %}{% include "./modules/cnf-cpu-infra-container.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restricting-cnf-cpu-infra-container.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-configuring-hyperthreading-for-a-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/disabling-hyperthreading-for-low-latency-applications.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-managing-device-interrupt-processing-for-guaranteed-pod-isolated-cpus.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-about-irq-affinity-setting.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Affinity of managed interrupts cannot be changed even if they target isolated CPU](https://access.redhat.com/solutions/4819541)

{% leveloffset +2 %}{% include "./modules/cnf-configure_for_irq_dynamic_load_balancing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-memory-optimization.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-kernal-page-size.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-configuring-huge-pages.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-allocating-multiple-huge-page-sizes.md" %}{% endleveloffset %}

## Reducing NIC queues using the Node Tuning Operator {id="cnf-reducing-nic-queues-with-nto" ._additional-resources}

The Node Tuning Operator facilitates reducing NIC queues for enhanced performance.
Adjustments are made using the performance profile, allowing customization of queues for different network devices.

{% leveloffset +2 %}{% include "./modules/cnf-adjusting-nic-queues-with-the-performance-profile.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-verifying-queue-status.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-logging-associated-with-adjusting-nic-queues.md" %}{% endleveloffset %}