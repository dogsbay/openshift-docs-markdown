---
title: Tuning nodes for low latency with the performance profile
---

# Tuning nodes for low latency with the performance profile {#cnf-tuning-low-latency-nodes-with-perf-profile}

Tune nodes for low latency by using the cluster performance profile. You can restrict CPUs for infra and application containers, configure huge pages, Hyper-Threading, and configure CPU partitions for latency-sensitive processes.

**Additional resources**

- [Gathering data about your cluster](/openshift-docs-markdown/support/gathering-cluster-data#nodes-nodes-managing)

## Reference performance profiles {#cnf-create-performance-profiles-reference}

Use the following reference performance profiles as the basis to develop your own custom profiles.

**Additional resources**

- [Understanding workload hints](https://access.redhat.com/articles/7081587)

**Additional resources**

- [About the Performance Profile Creator](/openshift-docs-markdown/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-about-the-profile-creator-tool_cnf-tuning-low-latency-nodes-with-perf-profile)
- [Disabling power saving mode for high priority pods](/openshift-docs-markdown/scalability_and_performance/cnf-provisioning-low-latency-workloads#cnf-configuring-high-priority-workload-pods_cnf-provisioning-low-latency)
- [Managing device interrupt processing for guaranteed pod isolated CPUs](/openshift-docs-markdown/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#managing-device-interrupt-processing-for-guaranteed-pod-isolated-cpus_cnf-tuning-low-latency-nodes-with-perf-profile)

**Additional resources**

- [Affinity of managed interrupts cannot be changed even if they target isolated CPU](https://access.redhat.com/solutions/4819541)

## Reducing NIC queues using the Node Tuning Operator {#cnf-reducing-nic-queues-with-nto}

The Node Tuning Operator facilitates reducing NIC queues for enhanced performance. Adjustments are made using the performance profile, allowing customization of queues for different network devices.
