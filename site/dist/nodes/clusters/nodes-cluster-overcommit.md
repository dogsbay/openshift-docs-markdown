---
title: Configuring your cluster to place pods on overcommitted nodes
---

# Configuring your cluster to place pods on overcommitted nodes {#nodes-cluster-overcommit}

OpenShift Container Platform administrators can control the level of overcommit and manage container density on developer containers by using the ClusterResourceOverride Operator.

> [!NOTE]
> In OpenShift Container Platform, you must enable cluster-level overcommit. Node overcommitment is enabled by default.

In an *overcommitted* state, the sum of the container compute resource requestsand limits exceeds the resources available on the system. For example, you might want to use overcommitment in development environments where a trade-off of guaranteed performance for capacity is acceptable.

Containers can specify compute resource requests and limits. Requests are used for scheduling your container and provide a minimum service guarantee. Limits constrain the amount of compute resource that can be consumed on your node.

The scheduler attempts to optimize the compute resource use across all nodes in your cluster. It places pods onto specific nodes, taking the pods' compute resource requests and nodes' available capacity into consideration.

## Additional resources {#nodes-cluster-overcommit-addtl-resources}

- [Moving the Cluster Resource Override Operator pods](/machine_management/creating-infrastructure-machinesets#nodes-cluster-resource-override-move-infra_creating-infrastructure-machinesets)
- [Creating infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets)
- [Setting deployment resources](/applications/deployments/managing-deployment-processes#deployments-triggers_deployment-operations)
- [Disabling or enforcing CPU limits using CPU CFS quotas](/nodes/clusters/nodes-cluster-overcommit#nodes-cluster-overcommit-node-enforcing_nodes-cluster-overcommit)
- [Reserving resources for system processes](/nodes/clusters/nodes-cluster-overcommit#nodes-cluster-overcommit-node-resources_nodes-cluster-overcommit)
- [Understanding how to reserve memory across quality of service tiers](/nodes/clusters/nodes-cluster-overcommit#qos-about-reserve_nodes-cluster-overcommit)
- [Allocating resources for nodes](/nodes/nodes/nodes-nodes-resources-configuring#nodes-nodes-resources-configuring-setting_nodes-nodes-resources-configuring)
