---
title: "Securing routes with the {{ cert_manager_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Securing routes with the {{ cert_manager_operator }} {id="cert-manager-securing-routes"}
{%- set context = "cert-manager-securing-routes" %}

In the {{ product_title }}, the route API is extended to provide a configurable option to reference TLS certificates via secrets. With externally managed certificates enabled, you can minimize errors from manual intervention, streamline the certificate management process, and enable the {{ product_title }} router to promptly serve the referenced certificate. {._abstract}

{% leveloffset +1 %}{% include "./modules/cert-manager-configuring-routes.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Creating a route with externally managed certificate](/networking/ingress_load_balancing/routes/nw-configuring-routes#nw-ingress-route-secret-load-external-cert_secured-routes)
*   [Configuring an ACME issuer](/security/cert_manager_operator/cert-manager-operator-issuer-acme#cert-manager-operator-issuer-acme)
*   [Externally managed certificates](/networking/ingress_load_balancing/routes/securing-routes#nw-ingress-route-secret-load-external-cert_secured-routes)