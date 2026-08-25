---
title: Installing a cluster on Azure in a disconnected environment with user-provisioned infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on Azure in a disconnected environment with user-provisioned infrastructure {id="installing-restricted-networks-azure-user-provisioned"}
{%- set context = "installing-restricted-networks-azure-user-provisioned" %}

To install {{ product_title }} on {{ azure_first }} in a disconnected environment, you can use user-provisioned infrastructure and complete the installation from a mirror host that holds your installation media. {._abstract}


:::important

The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of {{ product_title }}. Several ARM templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods.

:::


{% leveloffset +1 %}{% include "./modules/installation-restricted-networks-azure-user-provisioned-prerequisites.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring an Azure account](/installing/installing_azure/installing-azure-account#installing-azure-account)
*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images)
*   [Configuring the firewall to allow required sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Manually creating long-term credentials](/installing/installing_azure/ipi/installing-azure-customizations#manually-create-iam_installing-azure-customizations)
*   [Preparing your Azure environment for encryption](/installing/installing_azure/ipi/installing-azure-preparing-ipi#preparing-disk-encryption-sets_installing-azure-preparing-ipi)

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-config-project-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Resolve reserved resource name errors (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-reserved-resource-name)

{% leveloffset +2 %}{% include "./modules/installation-azure-limits.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
*   [Azure subscription and service limits, quotas, and constraints ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits)

{% leveloffset +2 %}{% include "./modules/installation-azure-network-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Example for creating DNS zones](/installing/installing_azure/upi/installing-azure-user-infra#installation-azure-create-dns-zones_installing-azure-user-infra)

{% leveloffset +2 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/minimum-required-permissions-upi-azure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-service-principal.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator-modes)

{% leveloffset +2 %}{% include "./modules/installation-azure-regions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-requirements-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-arm-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-marketplace-subscribe.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-disk-partitioning-upi-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-exporting-common-variables-arm-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-create-resource-group-and-identity.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Azure resource groups (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups)

{% leveloffset +1 %}{% include "./modules/installation-azure-user-infra-uploading-rhcos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-create-dns-zones.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring a public DNS zone in {{ azure_short }}](/installing/installing_azure/upi/installing-restricted-networks-azure-user-provisioned#installation-azure-network-config_installing-restricted-networks-azure-user-provisioned)

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

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-create-ingress-dns-records.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-user-infra-completing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Azure Resource Manager templates overview (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview#)