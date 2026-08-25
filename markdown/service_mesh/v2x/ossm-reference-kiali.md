---
title: Kiali configuration reference
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Kiali configuration reference {id="kiali-config-ref"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "kiali-config-ref" %}

When the {{ SMProductShortName }} Operator creates the `ServiceMeshControlPlane` it also processes the Kiali resource. The Kiali Operator then uses this object when creating Kiali instances.

{% leveloffset +1 %}{% include "./modules/ossm-config-smcp-kiali.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-configuring-external-kiali.md" %}{% endleveloffset %}