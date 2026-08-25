{%- set _mod_docs_content_type = "CONCEPT" %}
# Workload partitioning in {{ sno }} with {{ ztp }} {id="ztp-workload-partitioning-sno_{{ context }}"}

Workload partitioning configures {{ product_title }} services, cluster management workloads, and infrastructure pods to run on a reserved number of host CPUs. {._abstract}

To configure workload partitioning with {{ ztp_first }}, you configure a `cpuPartitioningMode` field in the `ClusterInstance` custom resource (CR) that you use to install the cluster and you apply a `PerformanceProfile` CR that configures the `isolated` and `reserved` CPUs on the host.

Configuring the `ClusterInstance` CR enables workload partitioning at cluster installation time and applying the `PerformanceProfile` CR configures the specific allocation of CPUs to reserved and isolated sets.
Both of these steps happen at different points during cluster provisioning.

The workload partitioning configuration pins the {{ product_title }} infrastructure pods to the `reserved` CPU set.
Platform services such as systemd, CRI-O, and kubelet run on the `reserved` CPU set.
The `isolated` CPU sets are exclusively allocated to your container workloads.
Isolating CPUs ensures that the workload has guaranteed access to the specified CPUs without contention from other applications running on the same node.
All CPUs that are not isolated should be reserved.


:::important

Ensure that `reserved` and `isolated` CPU sets do not overlap with each other.

:::