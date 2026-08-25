---
title: Recommended control plane practices
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Recommended control plane practices {id="recommended-control-plane-practices"}
{%- set context = "recommended-control-plane-practices" %}

Review the recommended performance and scalability practices for control planes in {{ product_title }}. By doing this task, you can better scale the number of compute machines and set the control plane node sizing for your cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/recommended-scale-practices.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/master-node-sizing.md" %}{% endleveloffset %}