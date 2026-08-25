---
title: "Configuring an {{ azure_short }} account"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an {{ azure_short }} account {id="installing-azure-account"}
{%- set context = "installing-azure-account" %}

Before you can install {{ product_title }} on {{ azure_first }}, you must configure an {{ azure_short }} account with the correct identity and permissions before you start the installation.


:::important

All {{ azure_short }} resources that are available through public endpoints are subject to resource name restrictions. For a list of terms that {{ azure_short }} restricts for resource names, see "Resolve errors for reserved resource names".

:::


{% leveloffset +1 %}{% include "./modules/installation-azure-limits.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
*   [Azure subscription and service limits, quotas, and constraints ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits)

{% leveloffset +1 %}{% include "./modules/installation-azure-network-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-subscription-tenant-id.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-identities.md" %}{% endleveloffset %}

**Additional resources**

*   [Managed identity types ({{ azure_short }} documentation)](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview#managed-identity-types)

{% leveloffset +2 %}{% include "./modules/installation-azure-permissions.md" %}{% endleveloffset %}

**Additional resources**

*   [Assign {{ azure_short }} roles using the {{ azure_short }} portal ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)

{% leveloffset +3 %}{% include "./modules/minimum-required-permissions-ipi-azure.md" %}{% endleveloffset %}

**Additional resources**

*   [Managing access to Azure resources using the Azure portal ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)
*   [Custom roles ({{ azure_short }} documentation)](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles)

{% leveloffset +2 %}{% include "./modules/installation-using-azure-managed-identities.md" %}{% endleveloffset %}

**Additional resources**

*   [List user-assigned managed identities ({{ azure_short }} documentation)](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/how-manage-user-assigned-managed-identities?pivots=identity-mi-methods-azp#list-user-assigned-managed-identities)

{% leveloffset +2 %}{% include "./modules/installation-creating-azure-service-principal.md" %}{% endleveloffset %}

**Additional resources**

*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator-modes)

{% leveloffset +1 %}{% include "./modules/installation-azure-marketplace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-regions.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Resolve errors for reserved resource names ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-reserved-resource-name)
*   [Install a customized cluster on Azure](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations)
*   [Quickly install a cluster on Azure with default options](/installing/installing_azure/ipi/installing-azure-default#installing-azure-default)