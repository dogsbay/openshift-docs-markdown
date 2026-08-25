---
title: User-provided certificates for default ingress
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# User-provided certificates for default ingress {id="cert-types-user-provided-certificates-for-default-ingress"}
{%- set context = "cert-types-user-provided-certificates-for-default-ingress" %}

Review user-provided ingress certificates in {{ product_title }}, including transport layer security (TLS) secret storage, `IngressController` references, and replacing Operator-generated defaults. {._abstract}

Use user-provided certificates for the default `IngressController` CR to complete the following tasks:

*   Replace Operator-generated default certificates before production use.
*   Store TLS secrets in the correct namespace.
*   Reference the secret in the `IngressController` CR.

{% leveloffset +1 %}{% include "./modules/user-provided-certificates-ingress-ref.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress)
*   [Setting a custom default certificate](/networking/networking_operators/ingress-operator#nw-ingress-setting-a-custom-default-certificate_configuring-ingress)