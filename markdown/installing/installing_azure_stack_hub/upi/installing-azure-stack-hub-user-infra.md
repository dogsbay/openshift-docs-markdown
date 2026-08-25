---
title: Installing a cluster on Azure Stack Hub using ARM templates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on Azure Stack Hub using ARM templates {id="installing-azure-stack-hub-user-infra"}
{%- set context = "installing-azure-stack-hub-user-infra" %}

You can install a cluster on Microsoft Azure Stack Hub by using infrastructure that you provide. {._abstract}

Several Azure Resource Manager (ARM) templates are provided to assist in completing these steps or to help model your own. See "Azure Resource Manager templates overview".


:::important

The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of {{ product_title }}. Several ARM templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

:::


{% leveloffset +1 %}{% include "./modules/installation-azure-stack-hub-user-infra-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-stack-hub-user-infra-config-project.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Resolve reserved resource name errors (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-reserved-resource-name)

{% leveloffset +2 %}{% include "./modules/installation-azure-limits.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-azure-stack-hub-network-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Azure Stack Hub datacenter DNS integration (Microsoft documentation)](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-integrate-dns?view=azs-2102)
*   [Example for creating DNS zones](/installing/installing_azure_stack_hub/upi/installing-azure-stack-hub-user-infra#installation-azure-create-dns-zones_installing-azure-stack-hub-user-infra)

{% leveloffset +2 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-stack-hub-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-service-principal.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator-modes)

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for Azure Stack Hub](/installing/installing_azure_stack_hub/installation-config-parameters-ash#installation-config-parameters-ash)

{% leveloffset +2 %}{% include "./modules/installation-azure-stack-hub-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-exporting-common-variables-arm-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually manage cloud credentials](/installing/installing_azure_stack_hub/ipi/installing-azure-stack-hub-default#manually-create-iam_installing-azure-stack-hub-default)

{% leveloffset +2 %}{% include "./modules/installation-disk-partitioning-upi-templates.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-create-resource-group-and-identity.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Azure resource groups (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups)

{% leveloffset +1 %}{% include "./modules/installation-azure-user-infra-uploading-rhcos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-create-dns-zones.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Example for creating DNS zones](/installing/installing_azure_stack_hub/upi/installing-azure-stack-hub-user-infra#installation-azure-create-dns-zones_installing-azure-stack-hub-user-infra)

{% leveloffset +1 %}{% include "./modules/installation-creating-azure-vnet.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-arm-vnet.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-user-infra-deploying-rhcos.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-arm-image-storage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-network-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-azure-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-arm-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-azure-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-arm-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-azure-control-plane.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-arm-control-plane.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-user-infra-wait-for-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-azure-worker.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-arm-worker.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-create-ingress-dns-records.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-user-infra-completing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Azure Resource Manager templates overview (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)