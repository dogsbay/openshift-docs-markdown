{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a public DNS zone in {{ azure_short }} {id="installation-azure-network-config_{{ context }}"}

To install {{ product_title }}, the {{ azure_first }} account you use must have a dedicated public hosted DNS zone in your account that is authoritative for the domain. This zone provides cluster DNS resolution and name lookup for external connections to the cluster. {._abstract}

**Procedure**

1.  Identify your domain, or subdomain, and registrar. You can transfer an
existing domain and registrar or obtain a new one through {{ azure_short }} or another source.
    *   To purchase a new domain through {{ azure_short }}, see [Buy a custom domain name for Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/manage-custom-dns-buy-domain).
    *   If you are using an existing domain and registrar, migrate its DNS to {{ azure_short }}. For more information, see
    [Migrate an active DNS name to Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/manage-custom-dns-migrate-domain)
    in the {{ azure_short }} documentation.
1.  Configure DNS for your domain, which includes creating a public hosted zone for your domain or subdomain, extracting the new authoritative name servers, and updating the registrar records for the name servers that your domain uses. For more information, see
[Tutorial: Host your domain in Azure DNS](https://docs.microsoft.com/en-us/azure/dns/dns-delegate-domain-azure-dns).

    Use an appropriate root domain, such as `openshiftcorp.com`, or subdomain,
    such as `clusters.openshiftcorp.com`.
1.  If you use a subdomain, follow your organization’s procedures to add its delegation
records to the parent domain.