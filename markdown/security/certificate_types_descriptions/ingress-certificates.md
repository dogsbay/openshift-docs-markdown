---
title: Ingress certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Ingress certificates {id="cert-types-ingress-certificates"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-types-ingress-certificates" %}

Manage ingress certificates in {{ product_title }}, including Prometheus metrics and secured routes, secret locations, default and custom workflows, expiration, and Operator renewal.

## Purpose {id="ingress-certificates-purpose_{{ context }}"}

The Ingress Operator uses certificates for:

*   Securing access to metrics for Prometheus.
*   Securing access to routes.

{% leveloffset +1 %}{% include "./modules/ingress-certificates-location.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-certificates-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-certificates-expiration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-certificates-services.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-certificates-management-renewal.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress)