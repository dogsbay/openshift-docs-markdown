---
title: Multitenancy and Operator colocation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Multitenancy and Operator colocation {id="olm-colocation"}
{%- set context = "olm-colocation" %}

When Operators share a namespace, Operator Lifecycle Manager (OLM) treats them as related, which affects how they behave during updates. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-colocation-namespaces.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing global Operators in custom namespaces](/operators/admin/olm-adding-operators-to-cluster#olm-installing-global-namespaces_olm-adding-operators-to-a-cluster)
*   [Operators in multitenant clusters](/operators/understanding/olm-multitenancy#olm-multitenancy)