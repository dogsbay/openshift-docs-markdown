---
title: Automatically adjust pod resource levels with the vertical pod autoscaler
---

# Automatically adjust pod resource levels with the vertical pod autoscaler {#nodes-pods-vpa}

You can use the OpenShift Container Platform Vertical Pod Autoscaler Operator (VPA) to help you understand the optimal CPU and memory usage for your pods and automatically maintain pod resources through the pod lifecycle.

The VPA automatically reviews the historic and current CPU and memory resources for containers in pods. The VPA can update the resource limits and requests based on the usage values it learns. By using individual custom resources (CR), the VPA updates all the pods in a project associated with any built-in workload objects. This includes the following list of object types:

- `Deployment`
- `DeploymentConfig`
- `StatefulSet`
- `Job`
- `DaemonSet`
- `ReplicaSet`
- `ReplicationController`

The VPA can also update certain custom resource object that manage pods. For more information, see "Example custom resources for the Vertical Pod Autoscaler".

## Additional resources {#additional-resources_nodes-pods-vertical-autoscaler}

- [Example custom resources for the Vertical Pod Autoscaler](/nodes/pods/nodes-pods-vertical-autoscaler#nodes-pods-vertical-autoscaler-custom-resource_nodes-pods-vertical-autoscaler)
- [About using the Vertical Pod Autoscaler Operator](/nodes/pods/nodes-pods-vertical-autoscaler#nodes-pods-vertical-autoscaler-using-about_nodes-pods-vertical-autoscaler)
- [Adjust pod resource levels without pod disruption](/nodes/pods/nodes-pods-adjust-resources-in-place#nodes-pods-adjust-resources-in-place)
- [Understanding OOM kill policy](/nodes/clusters/nodes-cluster-resource-configure#nodes-cluster-resource-configure-oom_nodes-cluster-resource-configure)
