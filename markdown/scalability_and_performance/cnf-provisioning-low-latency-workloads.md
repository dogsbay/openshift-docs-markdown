---
title: Provisioning real-time and low latency workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Provisioning real-time and low latency workloads {id="cnf-provisioning-low-latency-workloads"}
{%- set context = "cnf-provisioning-low-latency" %}

If your organization needs high performance computing and low, predictable latency, especially in the financial and telecommunications industries, you can use the Node Tuning Operator to implement automatic tuning to achieve low latency performance and consistent response time for {{ product_title }} applications. {._abstract}

You use the performance profile configuration to make these changes.

You can update the kernel to kernel-rt, reserve CPUs for cluster and operating system housekeeping duties, including pod infra containers, isolate CPUs for application containers to run the workloads, and disable unused CPUs to reduce power consumption.


:::note

When writing your applications, follow the general recommendations described in [RHEL for Real Time processes and threads](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_for_real_time/9/html-single/understanding_rhel_for_real_time/index#assembly_rhel-for-real-time-processes-and-threads_understanding-RHEL-for-Real-Time-core-concepts).

:::


**Additional resources**
{._additional-resources}

*   [Creating a performance profile](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-create-performance-profiles_cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +1 %}{% include "./modules/cnf-scheduling-workload-onto-worker-with-real-time-capabilities.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-pods-node-selectors)
*   [Assigning pods to nodes](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)

{% leveloffset +1 %}{% include "./modules/cnf-node-tuning-operator-creating-pod-with-guaranteed-qos-class.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-node-tuning-operator-disabling-cpu-load-balancing-for-dpdk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-configuring-high-priority-workload-pods.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring power saving for nodes that run colocated high and low priority workloads](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-configuring-power-saving-for-nodes_cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +1 %}{% include "./modules/cnf-disabling-cpu-cfs-quota.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Recommended firmware configuration for vDU cluster hosts](/edge_computing/ztp-vdu-validating-cluster-tuning#ztp-du-firmware-config-reference_vdu-config-ref)

{% leveloffset +1 %}{% include "./modules/cnf-disabling-interrupt-processing-for-individual-pods.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Managing device interrupt processing for guaranteed pod isolated CPUs](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#managing-device-interrupt-processing-for-guaranteed-pod-isolated-cpus_cnf-tuning-low-latency-nodes-with-perf-profile)