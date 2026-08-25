---
title: Managing your cluster resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing your cluster resources {id="managing-cluster-resources"}

{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "managing-cluster-resources" %}

To keep consistent behavior across your {{ product_title }} cluster, set global configuration options that Operators apply to all nodes. {._abstract}

{% leveloffset +1 %}{% include "./modules/cluster-resources.md" %}{% endleveloffset %}