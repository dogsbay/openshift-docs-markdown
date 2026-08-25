---
title: Controlling pod placement by using pod topology spread constraints
---

# Controlling pod placement by using pod topology spread constraints {#nodes-scheduler-pod-topology-spread-constraints}

To achieve high availability and more efficient resource utilization, you can use pod topology spread constraints to control the placement of your pods across nodes, zones, regions, or other user-defined topology domains.

## Example use cases {#nodes-scheduler-pod-topology-spread-constraints-example-use-cases}

- As an administrator, I want my workload to automatically scale between two to fifteen pods. I want to ensure that when there are only two pods, they are not placed on the same node, to avoid a single point of failure.
- As an administrator, I want to distribute my pods evenly across multiple infrastructure zones to reduce latency and network costs. I want to ensure that my cluster can self-heal if issues arise.

## Important considerations {#nodes-scheduler-pod-topology-spread-constraints-considerations}

- Pods in an OpenShift Container Platform cluster are managed by *workload controllers* such as deployments, stateful sets, or daemon sets. These controllers define the desired state for a group of pods, including how they are distributed and scaled across the nodes in the cluster. You should set the same pod topology spread constraints on all pods in a group to avoid confusion. When using a workload controller, such as a deployment, the pod template typically handles this for you.
- Mixing different pod topology spread constraints can make OpenShift Container Platform behavior confusing and troubleshooting more difficult. You can avoid this by ensuring that all nodes in a topology domain are consistently labeled. OpenShift Container Platform automatically populates well-known labels, such as `kubernetes.io/hostname`. This helps avoid the need for manual labeling of nodes. These labels provide essential topology information, ensuring consistent node labeling across the cluster.
- Only pods within the same namespace are matched and grouped together when spreading due to a constraint.
- You can specify multiple pod topology spread constraints, but you must ensure that they do not conflict with each other. All pod topology spread constraints must be satisfied for a pod to be placed.

## Additional resources {#_additional_resources}

- [Understanding how to update labels on nodes](/openshift-docs-markdown/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)
