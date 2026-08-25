---
title: Scheduling NUMA-aware workloads
---

# Scheduling NUMA-aware workloads {#cnf-numa-aware-scheduling}

To deploy high performance workloads with optimal efficiency, use NUMA-aware scheduling. This feature aligns pods with the underlying hardware topology in your OpenShift Container Platform cluster, minimizing latency and maximizing resource utilization.

By using the NUMA Resources Operator, you can schedule high-performance workloads in the same NUMA zone. The Operator deploys a node resources exporting agent that reports on available cluster node NUMA resources, and a secondary scheduler that manages the workloads.

## About NUMA {#cnf-numa-aware-scheduling-about-numa_numa-aware}

**Additional resources**

- [Scheduling pods using a secondary scheduler](/openshift-docs-markdown/nodes/scheduling/secondary_scheduler/nodes-secondary-scheduler-configuring#secondary-scheduler-configuring)
- [Changing where high-performance workloads run](/openshift-docs-markdown/scalability_and_performance/cnf-numa-aware-scheduling#cnf-changing-where-high-performance-workloads-run_numa-aware)

## Installing the NUMA Resources Operator {#installing-the-numa-resources-operator_numa-aware}

NUMA Resources Operator deploys resources that allow you to schedule NUMA-aware workloads and deployments. You can install the NUMA Resources Operator using the OpenShift Container Platform CLI or the web console.

**Additional resources**

- [Configuring image registry repository mirroring](/openshift-docs-markdown/disconnected/updating/disconnected-update#images-configuration-registry-mirror-configuring_updating-disconnected-cluster)
- [About the Performance Profile Creator](/openshift-docs-markdown/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-about-the-profile-creator-tool_cnf-tuning-low-latency-nodes-with-perf-profile)

**Additional resources**

- [Creating a performance profile](/openshift-docs-markdown/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-create-performance-profiles_cnf-tuning-low-latency-nodes-with-perf-profile)

**Additional resources**

- [Configuring image registry repository mirroring](/openshift-docs-markdown/disconnected/updating/disconnected-update#images-configuration-registry-mirror_updating-disconnected-cluster)
