---
title: Securing routes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Securing routes {id="securing-routes"}
{%- set context = "securing-routes" %}

To secure application traffic, you can configure routes to serve custom certificates to clients by using edge, passthrough, or re-encrypt TLS termination, aand manage externally provided certificates. Additionally, you can enforce strict security protocols by securing a route with HTTP strict transport security (HSTS). {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-ingress-creating-an-edge-route-with-a-custom-certificate.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-creating-a-reencrypt-route-with-a-custom-certificate.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-creating-a-passthrough-route.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-route-secret-load-external-cert.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-enabling-hsts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-enabling-hsts-per-route.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-disabling-hsts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-enforcing-hsts-per-domain.md" %}{% endleveloffset %}