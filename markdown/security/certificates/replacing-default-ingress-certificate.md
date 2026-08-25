---
title: Replacing the default ingress certificate
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Replacing the default ingress certificate {id="replacing-default-ingress"}
{%- set context = "replacing-default-ingress" %}

To allow external clients to connect securely to applications under the .apps subdomain in {{ product_title }}, you can replace the default wildcard ingress certificate with one issued by a trusted public CA. {._abstract}

{% leveloffset +1 %}{% include "./modules/customize-certificates-understanding-default-router.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customize-certificates-replace-default-router.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Replacing the CA Bundle certificate](/security/certificates/updating-ca-bundle#ca-bundle-understanding_updating-ca-bundle)
*   [Proxy certificate customization](/security/certificate_types_descriptions/proxy-certificates#proxy-cert-customization_proxy-certificates)