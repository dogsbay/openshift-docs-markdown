---
title: Configuring an Azure Stack Hub account
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an Azure Stack Hub account {id="installing-azure-stack-hub-account"}
{%- set context = "installing-azure-stack-hub-account" %}

Before you can install {{ product_title }}, you must configure a Microsoft Azure account. {._abstract}


:::important

All Azure resources that are available through public endpoints are subject to resource name restrictions, and you cannot create resources that use certain terms. For a list of terms that Azure restricts, see "Resolve reserved resource name errors".

:::


{% leveloffset +1 %}{% include "./modules/installation-azure-limits.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +1 %}{% include "./modules/installation-azure-stack-hub-network-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Azure Stack Hub datacenter DNS integration (Microsoft documentation)](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-integrate-dns?view=azs-2102)

{% leveloffset +1 %}{% include "./modules/installation-azure-stack-hub-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-service-principal.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator-modes)

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Resolve reserved resource name errors (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-reserved-resource-name)
*   [Installing a cluster on Azure Stack Hub with customizations](/installing/installing_azure_stack_hub/ipi/installing-azure-stack-hub-default#installing-azure-stack-hub-default)
*   [Installing a cluster on Azure Stack Hub using ARM templates](/installing/installing_azure_stack_hub/upi/installing-azure-stack-hub-user-infra#installing-azure-stack-hub-user-infra)