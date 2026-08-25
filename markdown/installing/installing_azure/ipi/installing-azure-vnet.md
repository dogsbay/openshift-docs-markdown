---
title: Installing a cluster on Azure into an existing VNet
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on Azure into an existing VNet {id="installing-azure-vnet"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-azure-vnet" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster into an existing {{ azure_short }} Virtual Network (VNet) on {{ azure_full }}. The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, you modify parameters in the `install-config.yaml` file before you install the cluster.

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

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-azure-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-arm-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-trusted-launch.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-confidential-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-azure-managing-dns-solution.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-azure-config-yaml-simple.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

**Additional resources**

*   [Accelerated Networking for Microsoft Azure VMs](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-accelerated-networking_creating-machineset-azure)

{% leveloffset +1 %}{% include "./modules/installing-azure-manual-modes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-azure-with-short-term-creds.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-azure-provisioning-dns-records.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)