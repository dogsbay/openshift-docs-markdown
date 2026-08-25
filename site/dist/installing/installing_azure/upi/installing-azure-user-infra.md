---
title: Installing a cluster on Azure using ARM templates
---

# Installing a cluster on Azure using ARM templates {#installing-azure-user-infra}

To install OpenShift Container Platform on Microsoft Azure with infrastructure that you provide, you can use Azure Resource Manager (ARM) templates to create required resources and complete the user-provisioned installation.

Several ARM templates are provided to assist in completing these steps or to help model your own. See "Azure Resource Manager templates overview".

> [!IMPORTANT]
> The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of OpenShift Container Platform. Several ARM templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

**Additional resources**

- [Azure Resource Manager templates overview (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)
- [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Configuring an Azure account](/openshift-docs-markdown/installing/installing_azure/installing-azure-account#installing-azure-account)
- [Install the Azure CLI (Azure documentation)](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
- [Alternatives to storing administrator-level secrets in the kube-system project](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-manual-modes_installing-azure-customizations)
- [Configuring the firewall to allow required sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)

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

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Azure resource groups (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups)

**Additional resources**

- [Configuring a public DNS zone in Azure](#installation-azure-network-config_installing-azure-user-infra)

**Additional resources**

- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {#additional-resources_installing-azure-user-infra}

- [Azure Resource Manager templates overview (Azure documentation)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)
