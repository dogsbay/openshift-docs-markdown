---
title: Understand Gateway API
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understand Gateway API {id="understand-gateway-api_{{ context }}"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "understand-gateway-api" %}

To optimize network traffic management and implement routing policies in {{ product_title }}, use Gateway API. By adopting this community-managed Kubernetes mechanism, you can configure advanced routing at both the transport (L4) and application (L7) layers while leveraging various vendor-supported implementations to meet your specific networking requirements.

A well-designed Gateway API deployment helps you achieve a portable, role-oriented routing infrastructure. To successfully plan your Gateway API implementation, review the following concepts:

*   Understand the benefits and limitations of Gateway API.
*   Review {{ product_title }} implementation specifics to avoid unsupported features.
*   Choose between shared or dedicated deployment topologies.


:::important

Gateway API does not support user-defined networks (UDN).

:::


{% leveloffset +1 %}{% include "./modules/gateway-api-benefits-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gateway-api-implementation-specifics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gateway-api-deployment-topologies.md" %}{% endleveloffset %}