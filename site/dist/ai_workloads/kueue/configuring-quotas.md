---
title: Configuring quotas
---

# Configuring quotas {#configuring-quotas}

As an administrator, you can use {{ kueue_name }} to configure quotas to optimize resource allocation and system throughput for user workloads. You can configure quotas for compute resources such as CPU, memory, pods, and GPU.

You can configure quotas in {{ kueue_name }} by completing the following steps:

1. Configure a cluster queue.
2. Configure a resource flavor.
3. Configure a local queue.

Users can then submit their workloads to the local queue.

<a name="clusterqueues-next-steps_configuring-quotas"></a>**Next steps**

The cluster queue is not ready for use until a [`ResourceFlavor` object](/ai_workloads/kueue/configuring-quotas#configuring-resourceflavors_configuring-quotas) has also been configured.

## Additional resources {#clusterqueues-additional-resources_configuring-quotas}

- [RBAC permissions](/ai_workloads/kueue/rbac-permissions#rbac-permissions)
- [Kubernetes documentation about cluster queues](https://kueue.sigs.k8s.io/docs/concepts/cluster_queue/)
