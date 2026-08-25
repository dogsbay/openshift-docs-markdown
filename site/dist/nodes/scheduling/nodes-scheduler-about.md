---
title: Controlling pod placement using the scheduler
---

# Controlling pod placement using the scheduler {#nodes-scheduler-about}

You can rely on the default pod scheduling or use the advanced pod scheduling tool for greater control over pod scheduling. Pod scheduling is an internal process that determines placement of new pods onto nodes within the cluster.

The scheduler code has a clean separation that watches new pods as they get created and identifies the most suitable node to host them. It then creates bindings (pod to node bindings) for the pods using the master API.

Default pod scheduling
:   OpenShift Container Platform comes with a default scheduler that serves the needs of most users. The default scheduler uses both inherent and customization tools to determine the best fit for a pod.

Advanced pod scheduling
:   In situations where you might want more control over where new pods are placed, the OpenShift Container Platform advanced scheduling features allow you to configure a pod so that the pod is required or has a preference to run on a particular node or alongside a specific pod.

    You can control pod placement by using the following scheduling features:

- Scheduler profiles
- Pod affinity and anti-affinity rules
- Node affinity
- Node selectors
- Taints and tolerations
- Node overcommitment

## About the default scheduler {#about-default-scheduler}

The default OpenShift Container Platform pod scheduler is responsible for determining the placement of new pods onto nodes within the cluster. It reads data from the pod and finds a node that is a good fit based on configured profiles. It is completely independent and exists as a standalone solution. It does not modify the pod; it creates a binding for the pod that ties the pod to the particular node.

## Additional resources {#additional-resources_nodes-scheduler-about}

- [Scheduler profiles](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-profiles#nodes-scheduler-profiles)
- [Pod affinity and anti-affinity rules](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity)
- [Node affinity](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity-about_nodes-scheduler-node-affinity)
- [Node selectors](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
- [Taints and tolerations](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
- [Node overcommitment](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-overcommit#nodes-scheduler-overcommit)
- [Controlling pod placement on nodes using node affinity rules](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity)
- [Placing pods relative to other pods using affinity and anti-affinity rules](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity)
