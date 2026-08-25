---
title: Provisioning real-time and low latency workloads
---

# Provisioning real-time and low latency workloads {#cnf-provisioning-low-latency-workloads}

If your organization needs high performance computing and low, predictable latency, especially in the financial and telecommunications industries, you can use the Node Tuning Operator to implement automatic tuning to achieve low latency performance and consistent response time for OpenShift Container Platform applications.

You use the performance profile configuration to make these changes.

You can update the kernel to kernel-rt, reserve CPUs for cluster and operating system housekeeping duties, including pod infra containers, isolate CPUs for application containers to run the workloads, and disable unused CPUs to reduce power consumption.

> [!NOTE]
> When writing your applications, follow the general recommendations described in [RHEL for Real Time processes and threads](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_for_real_time/9/html-single/understanding_rhel_for_real_time/index#assembly_rhel-for-real-time-processes-and-threads_understanding-RHEL-for-Real-Time-core-concepts).

**Additional resources**

- [Creating a performance profile](/openshift-docs-markdown/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-create-performance-profiles_cnf-tuning-low-latency-nodes-with-perf-profile)

**Additional resources**

- [Placing pods on specific nodes using node selectors](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-node-selectors#nodes-pods-node-selectors)
- [Assigning pods to nodes](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)

**Additional resources**

- [Configuring power saving for nodes that run colocated high and low priority workloads](/openshift-docs-markdown/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-configuring-power-saving-for-nodes_cnf-tuning-low-latency-nodes-with-perf-profile)

**Additional resources**

- [Recommended firmware configuration for vDU cluster hosts](/openshift-docs-markdown/edge_computing/ztp-vdu-validating-cluster-tuning#ztp-du-firmware-config-reference_vdu-config-ref)

**Additional resources**

- [Managing device interrupt processing for guaranteed pod isolated CPUs](/openshift-docs-markdown/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#managing-device-interrupt-processing-for-guaranteed-pod-isolated-cpus_cnf-tuning-low-latency-nodes-with-perf-profile)
