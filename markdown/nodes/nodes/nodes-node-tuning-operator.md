---
title: Using the Node Tuning Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Using the Node Tuning Operator {id="nodes-node-tuning-operator"}
{%- set context = "nodes-node-tuning-operator" %}

{% if not openshift_rosa_hcp %}
The Node Tuning Operator in {{ product_title }} helps you manage node-level tuning by orchestrating the TuneD daemon. You can use this unified interface to apply custom tuning specifications and achieve low latency performance for high-performance applications. {._abstract}
{% endif %}

{% if openshift_rosa_hcp %}
{{ product_title }} supports the Node Tuning Operator to improve performance of your nodes on your clusters. The Node Tuning Operator in {{ product_title }} helps you manage node-level tuning by orchestrating the TuneD daemon. You can use this unified interface to apply custom tuning specifications and achieve low latency performance for high-performance applications.

Before creating a node tuning configuration, you must create a custom tuning specification.
{% endif %}

{% leveloffset +1 %}{% include "./modules/node-tuning-operator.md" %}{% endleveloffset %}

{% if not openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/accessing-an-example-cluster-node-tuning-operator-specification.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/custom-tuning-specification.md" %}{% endleveloffset %}

{% if not openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/cluster-node-tuning-operator-default-profiles-set.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/node-tuning-operator-supported-tuned-daemon-plug-ins.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/rosa-creating-node-tuning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-node-tuning-autonode.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-modifying-node-tuning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rosa-deleting-node-tuning.md" %}{% endleveloffset %}

{% endif %}