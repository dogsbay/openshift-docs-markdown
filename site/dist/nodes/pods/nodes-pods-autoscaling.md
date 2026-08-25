---
title: Automatically scaling pods with the horizontal pod autoscaler
---

# Automatically scaling pods with the horizontal pod autoscaler {#nodes-pods-autoscaling}

As a developer, you can use a horizontal pod autoscaler (HPA) to specify how OpenShift Container Platform should automatically increase or decrease the scale of a replication controller or deployment configuration, based on metrics collected from the pods that belong to that replication controller or deployment configuration.

You can create an HPA for any deployment, deployment config, replica set, replication controller, or stateful set.

For information on scaling pods based on custom metrics, see "Automatically scaling pods based on custom metrics".

> [!NOTE]
> It is recommended to use a `Deployment` object or `ReplicaSet` object unless you need a specific feature or behavior provided by other objects. For more information on these objects, see "Understanding deployments".

## Additional resources {#additional-resources_nodes-pods-autoscaling}

- [Automatically scaling pods based on custom metrics](/nodes/cma/nodes-cma-autoscaling-custom#nodes-cma-autoscaling-custom)
- [Understanding deployments](/applications/deployments/what-deployments-are#what-deployments-are)
- [Understanding resource requests and limits](/nodes/pods/nodes-pods-using#nodes-pods-understanding-requests-limits_nodes-pods-using-ssy)
- [Scaling policies](/nodes/pods/nodes-pods-autoscaling#nodes-pods-autoscaling-policies_nodes-pods-autoscaling)
- [Understanding deployments and deployment configs](/applications/deployments/what-deployments-are#what-deployments-are)
- [Horizontal Pod Autoscaling of Quarkus Application Based on Memory Utilization](https://cloud.redhat.com/blog/horizontal-pod-autoscaling-of-quarkus-application-based-on-memory-utilization)
