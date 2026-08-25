---
title: Securing HTTPRoutes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Securing HTTPRoutes {id="securing-httproutes"}
{%- set context = "securing-httproutes" %}

To protect sensitive data and meet security compliance requirements, you must secure your Gateway API application traffic. You can secure 'HTTPRoute' custom resources (CRs) by either applying edge or re-encrypt Transport Layer Security (TLS) termination. Choose your method based on your security architecture and performance needs. {._abstract}

{% leveloffset +1 %}{% include "./modules/httproute-tls-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/securing-client-connections-edge-tls.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-backend-tls-validation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-backend-reencrypt-tls.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_securing-httproutes" ._additional-resources}

*   [Routing HTTP requests to services](/networking/ingress_load_balancing/configuring_gateway_api/routing-http-requests-to-services#routing-http-requests-to-services)
*   [Securing routes](/networking/ingress_load_balancing/routes/securing-routes#securing-routes)