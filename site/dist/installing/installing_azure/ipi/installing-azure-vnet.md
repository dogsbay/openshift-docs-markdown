---
title: Installing a cluster on Azure into an existing VNet
---

# Installing a cluster on Azure into an existing VNet {#installing-azure-vnet}

In OpenShift Container Platform version 4.22, you can install a cluster into an existing {{ azure_short }} Virtual Network (VNet) on {{ azure_full }}. The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, you modify parameters in the `install-config.yaml` file before you install the cluster.

**Additional resources**

- [About the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
- [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Availability zones](https://azure.microsoft.com/en-us/global-infrastructure/availability-zones/)
- [Regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)

**Additional resources**

- [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

**Additional resources**

- [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Installation configuration parameters for Azure](/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

**Additional resources**

- [Accelerated Networking for Microsoft Azure VMs](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-accelerated-networking_creating-machineset-azure)

**Additional resources**

- [Accessing the web console](/web_console/web-console#web-console)
- [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
