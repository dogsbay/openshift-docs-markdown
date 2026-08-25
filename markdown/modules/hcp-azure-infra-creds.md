{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ azure_short }} infrastructure and credentials {id="hcp-azure-infra-creds_{{ context }}"}

Before you get started with {{ hcp }} on {{ azure_first }}, get familiar with the required {{ azure_short }} resources and the necessary permissions. {._abstract}

## Summary of requirements {id="hcp-azure-prereq-summary_{{ context }}"}

You need the following resources, tools, access, and permissions to set up {{ hcp }} on {{ azure_short }}:


{{ azure_short }} resources

:   *   An {{ product_title }} management cluster on {{ azure_short }}.
    *   An {{ azure_short }} subscription with contributor and user-access administrator permissions.
    *   (Optional) A parent DNS zone in {{ azure_short }} for delegating cluster DNS records. This DNS zone is required only if you plan to use external DNS.

Tools and access

:   *   {{ azure_short }} command-line interface (CLI), `az`, configured with your subscription
    *   {{ oc_first }}
    *   {{ hcp }} CLI, `hcp`
    *   `jq` command-line JSON processor
    *   Cloud Credential Operator utility (`ccoctl`)
    *   A valid {{ product_title }} pull secret

Permissions

:   *   Subscription-level contributor and user access administrator roles
    *   Microsoft Graph API permissions for creating service principals

## DNS management options {id="hcp-azure-dns-options_{{ context }}"}

You can set up {{ hcp }} on {{ azure_short }} with or without external DNS. If you plan to use a private or a public-private topology, external DNS is required. See the following table for more information:

**DNS approaches for {{ hcp }} on {{ azure_short }}**

|  | With external DNS | Without external DNS |
| --- | --- | --- |
| **Best for** | Production, multi-cluster | Development, testing |
| **API server DNS** | Custom (`api-cluster.example.com`) | {{ azure_short }} Load Balancer (`abc123.region.cloudapp.azure.com`) |
| **Setup complexity** | Low, requires DNS zones and service principals | None |
| **Management** | Fully automatic | Manual or {{ azure_short }}-provided |

## Resource group strategy {id="hcp-azure-resource-group_{{ context }}"}

Cluster-specific resource groups are created and deleted with each hosted cluster. These resources include managed resource groups for cluster infrastructure. If you use custom networking, these resources also include Virtual Network (VNet) resource groups and Network Security Group (NSG) resource groups.

## Security considerations for {{ hcp }} on {{ azure_short }} {id="hcp-azure-security_{{ context }}"}

{{ hcp_capital }} on {{ azure_short }} employs the following security best practices:

*   Workload identity federation, which eliminates long-lived credentials by using OIDC-based authentication.
*   Least-privilege access, where each component has its own managed identity with minimal required permissions.
*   Network isolation, where you can use custom VNets and NSGs to implement network segmentation and security policies.
*   Federated credentials, where trust relationships are scoped to specific service accounts, preventing unauthorized access.
*   Private connectivity, available as an option through Azure Private Link, which provides private API server access to ensure that control-plane traffic never traverses the public internet. Private connectivity is available for private and public-private topologies only.