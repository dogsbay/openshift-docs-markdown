---
title: Scheduling resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Scheduling resources {id="network-observability-scheduling-resources"}
{%- set context = "network_observability_scheduling" %}

Taints and tolerations help you control which nodes host certain pods. Use these tools, along with node selectors, to guide the placement of network observability components. {._abstract}

A node selector specifies a map of key/value pairs that are defined using custom labels on nodes and selectors specified in pods.

For the pod to be eligible to run on a node, the pod must have the same key/value node selector as the label on the node.

{% leveloffset +1 %}{% include "./modules/network-observability-nodes-taints-tolerations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)
*   [Assign Pods to Nodes (Kubernetes documentation)](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)
*   [Pod Priority and Preemption (Kubernetes documentation)](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#priorityclass)