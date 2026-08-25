---
title: Securing routes through ingress objects
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Securing routes through ingress objects {id="creating-advanced-routes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-advanced-routes" %}

You can secure your application traffic by managing certificates directly through ingress objects. This includes creating routes using the destination CA certificate in an ingress annotation or using the default certificate.


:::warning

The Ingress Controller maintains a one-way sync for certificates managed through ingress objects. Do not manually apply changes directly to the generated route’s TLS configuration. Any manual modifications are silently overwritten the next time the parent ingress object is updated or reconciled. This is particularly important to note if you operate a GitOps-managed cluster.

:::


{% leveloffset +1 %}{% include "./modules/nw-ingress-reencrypt-route-custom-cert.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-edge-route-default-certificate.md" %}{% endleveloffset %}