---
title: Overview of nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Overview of nodes {id="overview-of-nodes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "overview-of-nodes" %}

In an {{ product_title }} cluster, nodes, pods, and application containers are foundational components that you use to create and manage workloads.

{% leveloffset +1 %}{% include "./modules/nodes-overview-glossary-common-terms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-overview-about-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-overview-nodes-operations-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-overview-about-pods.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-overview-pods-operations-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-overview-about-containers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-overview-containers-tasks-reference.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/nodes-overview-about-autoscaling-pods.md" %}{% endleveloffset %}

**Additional resources**

*   [Automatically scaling pods with the horizontal pod autoscaler](/nodes/pods/nodes-pods-autoscaling#nodes-pods-autoscaling)
*   [Custom Metrics Autoscaler Operator overview](/nodes/cma/nodes-cma-autoscaling-custom#nodes-cma-autoscaling-custom)
*   [Automatically adjust pod resource levels with the vertical pod autoscaler](/nodes/pods/nodes-pods-vertical-autoscaler#nodes-pods-vpa)
{% endif %}