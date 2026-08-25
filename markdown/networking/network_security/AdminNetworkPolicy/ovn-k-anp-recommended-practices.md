---
title: Best practices for AdminNetworkPolicy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Best practices for AdminNetworkPolicy {id="ovn-k-anp-recommended-practices"}
{%- set context = "ovn-k-anp-recommended-practices" %}

To apply cluster-wide network policy in {{ product_title }}, you can follow recommended practices for `AdminNetworkPolicy` and `BaselineAdminNetworkPolicy` design, including priorities, actions, and selectors that avoid system namespaces. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-ovn-k-anp-best-practices.md" %}{% endleveloffset %}