---
title: Configuring certificates with an issuer
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring certificates with an issuer {id="cert-manager-creating-certificate"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-manager-creating-certificate" %}

By using the {{ cert_manager_operator }}, you can manage certificates, handling tasks such as renewal and issuance, for workloads within the cluster, as well as components interacting externally to the cluster.

{% leveloffset +1 %}{% include "./modules/cert-manager-certificate-mgmt.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-certificate-api-server.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-certificate-ingress.md" %}{% endleveloffset %}

**Additional resources**

*   [Red&#160;Hat Knowledgebase solution](https://access.redhat.com/solutions/4542531)

## Additional resources {id="additional-resources_cert-manager-creating-certificate"}

*   [Supported issuer types](/security/cert_manager_operator/index#cert-manager-issuer-types_cert-manager-operator-about)
*   [Configuring an ACME issuer](/security/cert_manager_operator/cert-manager-operator-issuer-acme#cert-manager-operator-issuer-acme)
*   [Adding an API server named certificate](/security/certificates/api-server#customize-certificates-api-add-named_api-server-certificates)
*   [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress)