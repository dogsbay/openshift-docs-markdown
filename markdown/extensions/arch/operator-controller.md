---
title: Operator Controller
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Operator Controller {id="operator-controller"}
{%- set context = "operator-controller" %}

Operator Controller is the central component of {{ olmv1_first }} and consumes the other {{ olmv1 }} component, catalogd. It extends Kubernetes with an API through which users can install Operators and extensions. {._abstract}

{% leveloffset +1 %}{% include "./modules/olmv1-clusterextension-api.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Operator Lifecycle Manager (OLM) → Multitenancy and Operator colocation](/operators/understanding/olm/olm-colocation#olm-colocation)
*   [Supported extensions](/extensions/ce/olmv1-supported-extensions#olmv1-supported-extensions)

{% leveloffset +2 %}{% include "./modules/olmv1-about-target-versions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-object-ownership.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olmv1-clusterobjectsets.md" %}{% endleveloffset %}