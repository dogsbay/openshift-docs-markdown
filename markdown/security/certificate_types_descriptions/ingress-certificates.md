---
title: Ingress certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Ingress certificates {id="cert-types-ingress-certificates"}
{%- set context = "cert-types-ingress-certificates" %}

Manage ingress certificates in {{ product_title }}, including Prometheus metrics and secured routes, secret locations, default and custom workflows, expiration, and Operator renewal. {._abstract}

## Purpose {id="ingress-certificates-purpose_{{ context }}"}

The Ingress Operator uses certificates for:

*   Securing access to metrics for Prometheus.
*   Securing access to routes.

{% leveloffset +1 %}{% include "./modules/ingress-certificates-location.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-certificates-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-certificates-expiration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-certificates-services.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ingress-certificates-management-renewal.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress)