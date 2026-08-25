---
title: Installing a cluster on Azure into a government region
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on Azure into a government region {id="installing-azure-government-region"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-azure-government-region" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on
Microsoft Azure into a government region. To configure the government region,
you modify parameters in the `install-config.yaml` file before you install the
cluster.

{% leveloffset +1 %}{% include "./modules/installation-azure-about-government-region.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/private-clusters-default.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/private-clusters-about-azure.md" %}{% endleveloffset %}

**Additional resources**

*   [What is Azure Private DNS?](https://docs.microsoft.com/en-us/azure/dns/private-dns-overview)
*   [What is IP address 168.63.129.16?](https://docs.microsoft.com/en-us/azure/virtual-network/what-is-ip-address-168-63-129-16)

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

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-azure-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-trusted-launch.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-confidential-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-config-yaml-simple.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

**Additional resources**

*   [Accelerated Networking for Microsoft Azure VMs](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-accelerated-networking_creating-machineset-azure)

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_installing-azure-government-region"}

*   [Accessing the web console](/web_console/web-console#web-console)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)