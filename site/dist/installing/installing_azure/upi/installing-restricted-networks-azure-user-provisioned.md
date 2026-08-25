---
title: Installing a cluster on Azure in a disconnected environment with user-provisioned infrastructure
---

# Installing a cluster on Azure in a disconnected environment with user-provisioned infrastructure {#installing-restricted-networks-azure-user-provisioned}

To install OpenShift Container Platform on {{ azure_first }} in a disconnected environment, you can use user-provisioned infrastructure and complete the installation from a mirror host that holds your installation media.

> [!IMPORTANT]
> The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of OpenShift Container Platform. Several ARM templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods.

**Additional resources**

- [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Configuring an Azure account](/openshift-docs-markdown/installing/installing_azure/installing-azure-account#installing-azure-account)
- [Mirroring images for a disconnected installation](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images)
- [Configuring the firewall to allow required sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Manually creating long-term credentials](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-customizations#manually-create-iam_installing-azure-customizations)
- [Preparing your Azure environment for encryption](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-preparing-ipi#preparing-disk-encryption-sets_installing-azure-preparing-ipi)

**Additional resources**

- [Resolve reserved resource name errors (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-reserved-resource-name)

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
- [Azure subscription and service limits, quotas, and constraints ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits)

**Additional resources**

- [Example for creating DNS zones](/openshift-docs-markdown/installing/installing_azure/upi/installing-azure-user-infra#installation-azure-create-dns-zones_installing-azure-user-infra)

**Additional resources**

- [About the Cloud Credential Operator](/openshift-docs-markdown/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator-modes)

**Additional resources**

- [Azure resource groups (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups)

**Additional resources**

- [Configuring a public DNS zone in {{ azure_short }}](/openshift-docs-markdown/installing/installing_azure/upi/installing-restricted-networks-azure-user-provisioned#installation-azure-network-config_installing-restricted-networks-azure-user-provisioned)

**Additional resources**

- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {#additional-resources_installing-restricted-networks-azure-user-provisioned}

- [Azure Resource Manager templates overview (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview#)
