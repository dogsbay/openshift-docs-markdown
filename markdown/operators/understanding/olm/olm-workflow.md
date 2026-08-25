---
title: Operator Lifecycle Manager workflow
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Operator Lifecycle Manager workflow {id="olm-workflow"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-workflow" %}

The Operator Lifecycle Manager (OLM) resolves Operator installs and upgrades in {{ product_title }}. The OLM lifecycle involves interacting with catalog sources, subscriptions, and cluster service versions (CSVs).

{% leveloffset +1 %}{% include "./modules/olm-upgrades.md" %}{% endleveloffset %}