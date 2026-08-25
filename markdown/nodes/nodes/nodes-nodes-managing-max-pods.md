---
title: Managing the maximum number of pods per node
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing the maximum number of pods per node {id="nodes-nodes-managing-max-pods"}
{%- set context = "nodes-nodes-managing-max-pods" %}

In {{ product_title }}, you can configure the number of pods that can run on a node based on the number of
processor cores on the node, a hard limit, or both. If you use both options,
the lower of the two limits the number of pods on a node. Setting a maximum number of pods can prevent a node from running more pods than its underlying hardware can handle. {._abstract}

{% include "./snippets/nodes-pods-core-max-pods.md" %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-managing-max-pods-proc.md" %}{% endleveloffset %}