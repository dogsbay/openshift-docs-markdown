---
title: Installing a cluster on Azure in a disconnected environment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on Azure in a disconnected environment {id="installing-restricted-networks-azure-installer-provisioned"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-restricted-networks-azure-installer-provisioned" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on Microsoft Azure in a restricted network by creating an internal mirror of the installation release content on an existing Azure Virtual Network (VNet).


:::important

You can install an {{ product_title }} cluster by using mirrored installation release content, but your cluster requires internet access to use the Azure APIs.

:::


## Prerequisites {id="prerequisites_installing-restricted-networks-azure-installer-provisioned"}

*   You have mirrored the images for a disconnected installation to your registry and obtained the `imageContentSources` data for your version of {{ product_title }}. For more information, see "Mirroring images for a disconnected installation by using the oc adm command".

    :::important

    Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
    
    :::

*   You have an existing VNet in Azure. While installing a cluster in a restricted network that uses installer-provisioned infrastructure, you cannot use the installer-provisioned VNet. You must use a user-provisioned VNet that satisfies one of the following requirements:
    *   The VNet contains the mirror registry.
    *   The VNet has firewall rules or a peering connection to access the mirror registry hosted elsewhere.

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-user-defined-routing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-about-custom-azure-vnet.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-about-custom-azure-vnet-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-about-custom-azure-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-about-custom-azure-vnet-isolation.md" %}{% endleveloffset %}

**Additional resources**

*   [About the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Availability zones](https://azure.microsoft.com/en-us/global-infrastructure/availability-zones/)
*   [Regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-arm-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-trusted-launch.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-confidential-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-dedicated-disks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-azure-managing-dns-solution.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-config-yaml-simple.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-azure-manual-modes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-azure-with-short-term-creds.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-azure-provisioning-dns-records.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_installing-restricted-networks-azure-installer-provisioned"}

*   [Mirroring images for a disconnected installation by using the oc adm command](/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)