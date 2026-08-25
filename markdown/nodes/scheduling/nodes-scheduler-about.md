---
title: Controlling pod placement using the scheduler
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-scheduler-about" %}
# Controlling pod placement using the scheduler {id="nodes-scheduler-about"}
{% include "./_attributes/common-attributes.md" %}

You can rely on the default pod scheduling or use the advanced pod scheduling tool for greater control over pod scheduling. Pod scheduling is an internal process that determines placement of new pods onto nodes within the cluster. 

The scheduler code has a clean separation that watches new pods
as they get created and identifies the most suitable node to host them. It then
creates bindings (pod to node bindings) for the pods using the master API.


Default pod scheduling
:   {{ product_title }} comes with a default scheduler that serves the needs of most users. The default scheduler uses both inherent and customization tools to determine the best fit for a pod.


Advanced pod scheduling
:   In situations where you might want more control over where new pods are placed, the {{ product_title }} advanced scheduling features allow you to configure a pod so that the pod is required or has a preference to run on a particular node or alongside a specific pod.

    You can control pod placement by using the following scheduling features:

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   Scheduler profiles
{%- endif %}
*   Pod affinity and anti-affinity rules
*   Node affinity
*   Node selectors
{%- if not (openshift_dedicated or openshift_rosa_hcp or openshift_rosa) %}
*   Taints and tolerations
{%- endif %}
*   Node overcommitment

## About the default scheduler {id="about-default-scheduler"}

The default {{ product_title }} pod scheduler is responsible for determining the placement of new pods onto nodes within the cluster. It reads data from the pod and finds a node that is a good fit based on configured profiles. It is completely independent and exists as a standalone solution. It does not modify the pod; it creates a binding for the pod that ties the pod to the particular node.

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-default-about.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/nodes-scheduler-use-cases.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Scheduler profiles](/nodes/scheduling/nodes-scheduler-profiles#nodes-scheduler-profiles)
{%- endif %}
*   [Pod affinity and anti-affinity rules](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity)
*   [Node affinity](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity-about_nodes-scheduler-node-affinity)
*   [Node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
{%- if not (openshift_dedicated or openshift_rosa_hcp or openshift_rosa) %}
*   [Taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
{%- endif %}
*   [Node overcommitment](/nodes/scheduling/nodes-scheduler-overcommit#nodes-scheduler-overcommit)
*   [Controlling pod placement on nodes using node affinity rules](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity)
*   [Placing pods relative to other pods using affinity and anti-affinity rules](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity)