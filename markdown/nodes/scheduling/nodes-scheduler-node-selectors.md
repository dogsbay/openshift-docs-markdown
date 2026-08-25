---
title: Placing pods on specific nodes using node selectors
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-scheduler-node-selectors" %}
# Placing pods on specific nodes using node selectors {id="nodes-scheduler-node-selectors"}
{% include "./_attributes/common-attributes.md" %}

{% include "./snippets/about-node-selectors.md" %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-selectors-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-selectors-pod.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-selectors-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-scheduler-node-selectors-project.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

**Additional resources**

*   [Creating a project with a node selector and toleration](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-projects_nodes-scheduler-taints-tolerations)
{% endif %}