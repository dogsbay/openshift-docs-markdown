---
title: Operator Lifecycle Manager architecture
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Operator Lifecycle Manager architecture {id="olm-arch"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-arch" %}

You can learn how Operator Lifecycle Manager (OLM) components interact to manage Operators in {{ product_title }}. The architecture includes the OLM Operator, Catalog Operator, and Catalog Registry.

{% leveloffset +1 %}{% include "./modules/olm-architecture.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-arch-olm-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-arch-catalog-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-arch-catalog-registry.md" %}{% endleveloffset %}