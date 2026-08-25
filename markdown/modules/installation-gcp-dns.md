{% if context == "installing-gcp-user-infra-vpc" %}
{%- set user_infra_vpc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring DNS for {{ gcp_short }} {id="installation-gcp-dns_{{ context }}"}

To install {{ product_title }}, the {{ gcp_first }} account you use must
have a dedicated public hosted zone
{%- if not user_infra_vpc %}
in the same project that you host the {{ product_title }} cluster.
{% endif %}
{% if user_infra_vpc %}
in the project that hosts the shared VPC that you install the cluster into.
{%- endif %}
This zone must be authoritative for the domain. The
DNS service provides cluster DNS resolution and name lookup for external
connections to the cluster.

**Procedure**

1.  Identify your domain, or subdomain, and registrar. You can transfer an existing domain and
registrar or obtain a new one through {{ gcp_short }} or another source.

    :::note

    If you purchase a new domain, it can take time for the relevant DNS
    changes to propagate. For more information about purchasing domains
    through Google, see [Google Domains](https://domains.google/).
    
    :::

1.  Create a public hosted zone for your domain or subdomain in your {{ gcp_short }} project. See
[Creating public zones](https://cloud.google.com/dns/zones/#creating_public_zones)
in the {{ gcp_short }} documentation.

    Use an appropriate root domain, such as `openshiftcorp.com`, or subdomain,
    such as `clusters.openshiftcorp.com`.
1.  Extract the new authoritative name servers from the hosted zone records. See
[Look up your Cloud DNS name servers](https://cloud.google.com/dns/docs/update-name-servers#look_up_your_name_servers)
in the {{ gcp_short }} documentation.

    You typically have four name servers.
1.  Update the registrar records for the name servers that your domain
uses. For example, if you registered your domain to Google Domains, see the
following topic in the Google Domains Help:
[How to switch to custom name servers](https://support.google.com/domains/answer/3290309?hl=en).
1.  If you migrated your root domain to {{ gcp_full }} DNS, migrate your DNS records. See [Migrating to Cloud DNS](https://cloud.google.com/dns/docs/migrating) in the {{ gcp_short }} documentation.
1.  If you use a subdomain, follow your company’s procedures to add its delegation records to the parent domain. This process might include a request to your company’s IT department or the division that controls the root domain and DNS services for your company.

{% if context == "installing-gcp-user-infra-vpc" %}
{%- set user_infra_vpc = false -%}
{% endif %}