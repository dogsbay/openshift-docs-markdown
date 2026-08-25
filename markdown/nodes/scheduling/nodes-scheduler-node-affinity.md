---
title: Controlling pod placement on nodes using node affinity rules
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-scheduler-node-affinity" %}
{% include "./_attributes/common-attributes.md" %}
# Controlling pod placement on nodes using node affinity rules {id="nodes-scheduler-node-affinity"}

You can use a node affinity to control which nodes your pod can be scheduled on based on node labels. Node affinity helps you ensure your applications run on nodes with specific capabilities or configurations. {._abstract}

In {{ product_title }} node affinity is a set of rules used by the scheduler to determine where a pod can be placed.
The rules are defined using custom labels on the nodes and label selectors specified in pods.

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-affinity-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-affinity-configuring-required.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-affinity-configuring-preferred.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-affinity-example.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/olm-overriding-operator-pod-affinity.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Additional resources {id="nodes-scheduler-node-affinity-addtl-resources_{{ context }}" ._additional-resources}

*   [Understanding how to update labels on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)
{% endif %}