---
title: Placing pods on specific nodes using node selectors
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-node-selectors" %}
# Placing pods on specific nodes using node selectors {id="nodes-pods-node-selectors"}
{% include "./_attributes/common-attributes.md" %}

For a pod to be eligible to run on a specific node, you can include a _node selector_ in the pod spec that has the indicated key-value pairs as the label on that node.

A _node selector_ specifies a map of key-value pairs. The rules are defined using custom labels on nodes and selectors specified in pods.

If you are using node affinity and node selectors in the same pod configuration, see the important considerations below.

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-selectors-pod.md" %}{% endleveloffset %}