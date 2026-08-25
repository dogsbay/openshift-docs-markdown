---
title: Installing a cluster on Azure in a disconnected environment
---

# Installing a cluster on Azure in a disconnected environment {#installing-restricted-networks-azure-installer-provisioned}

In OpenShift Container Platform version 4.22, you can install a cluster on Microsoft Azure in a restricted network by creating an internal mirror of the installation release content on an existing Azure Virtual Network (VNet).

> [!IMPORTANT]
> You can install an OpenShift Container Platform cluster by using mirrored installation release content, but your cluster requires internet access to use the Azure APIs.

## Prerequisites {#prerequisites_installing-restricted-networks-azure-installer-provisioned}

- You have mirrored the images for a disconnected installation to your registry and obtained the `imageContentSources` data for your version of OpenShift Container Platform. For more information, see "Mirroring images for a disconnected installation by using the oc adm command".

  > [!IMPORTANT]
  > Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
- You have an existing VNet in Azure. While installing a cluster in a restricted network that uses installer-provisioned infrastructure, you cannot use the installer-provisioned VNet. You must use a user-provisioned VNet that satisfies one of the following requirements:

  - The VNet contains the mirror registry.
  - The VNet has firewall rules or a peering connection to access the mirror registry hosted elsewhere.

**Additional resources**

- [About the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
- [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Availability zones](https://azure.microsoft.com/en-us/global-infrastructure/availability-zones/)
- [Regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)

**Additional resources**

- [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

**Additional resources**

- [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

## Additional resources {#additional-resources_installing-restricted-networks-azure-installer-provisioned}

- [Mirroring images for a disconnected installation by using the oc adm command](/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images)
- [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
