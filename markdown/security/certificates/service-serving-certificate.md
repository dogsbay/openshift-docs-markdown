---
title: Securing service traffic using service serving certificate secrets
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Securing service traffic using service serving certificate secrets {id="add-service-serving"}
{%- set context = "service-serving-certificate" %}

Service serving certificates provide automatic TLS encryption for service-to-service communication. Configure certificates for services, ConfigMaps, APIServices, CRDs, and webhooks to secure internal cluster traffic. {._abstract}

{% leveloffset +1 %}{% include "./modules/customize-certificates-understanding-service-serving.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customize-certificates-add-service-serving.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating a re-encrypt route with a custom certificate](/networking/ingress_load_balancing/routes/securing-routes#nw-ingress-creating-a-reencrypt-route-with-a-custom-certificate_secured-routes)

{% leveloffset +1 %}{% include "./modules/customize-certificates-add-service-serving-configmap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customize-certificates-add-service-serving-apiservice.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customize-certificates-add-service-serving-crd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customize-certificates-add-service-serving-mutating-webhook.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customize-certificates-add-service-serving-validating-webhook.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customize-certificates-rotate-service-serving.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customize-certificates-manually-rotate-service-ca.md" %}{% endleveloffset %}