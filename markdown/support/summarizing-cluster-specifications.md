---
title: Summarizing cluster specifications
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Summarizing cluster specifications {id="summarizing-cluster-specifications"}

{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "summarizing-cluster-specifications" %}

To verify the version, update history, and component status of your {{ product_title }} cluster, query the `clusterversion` resource. {._abstract}

{% leveloffset +1 %}{% include "./modules/summarizing-cluster-specifications-through-clusterversion.md" %}{% endleveloffset %}