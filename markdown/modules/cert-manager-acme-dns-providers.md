{%- set _mod_docs_content_type = "CONCEPT" %}
# Supported DNS-01 providers {id="cert-manager-acme-dns-providers_{{ context }}"}

To configure DNS-01 challenges for ACME issuers, you can validate domain ownership by integrating with supported services, such as Amazon Route 53, Azure DNS, and Google Cloud DNS, or by using Webhooks.  {._abstract}

The {{ cert_manager_operator }} supports the following DNS-01 providers for ACME issuers:

*   Amazon Route 53
*   Azure DNS

    :::note

    The {{ cert_manager_operator }} does not support using Microsoft Entra ID pod identities to assign a managed identity to a pod.
    
    :::

*   {{ gcp_full }} DNS
*   Webhook
    Red Hat tests and supports DNS providers using an external webhook with cert-manager on {{ product_title }}. The following DNS providers are tested and supported with {{ product_title }}:

    *   [cert-manager-webhook-ibmcis](https://github.com/jb-dk/cert-manager-webhook-ibmcis)


    :::note

    Using a DNS provider that is not listed might work with {{ product_title }}, but the provider was not tested by Red Hat and therefore is not supported by Red Hat.
    
    :::