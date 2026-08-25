---
title: Installing a private cluster on Azure
---

# Installing a private cluster on Azure {#installing-azure-private}

In OpenShift Container Platform version 4.22, you can install a private cluster into an existing {{ azure_short }} Virtual Network (VNet) on {{ azure_full }}. The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, you modify parameters in the `install-config.yaml` file before you install the cluster.

**Additional resources**

- [About the OVN-Kubernetes network plugin](/openshift-docs-markdown/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Availability zones](https://azure.microsoft.com/en-us/global-infrastructure/availability-zones/)
- [Regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)

**Additional resources**

- [Installation configuration parameters for Azure](/openshift-docs-markdown/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Installation configuration parameters for Azure](/openshift-docs-markdown/installing/installing_azure/installation-config-parameters-azure#installation-config-parameters-azure)

**Additional resources**

- For more details about Accelerated Networking, see [Accelerated Networking for Microsoft Azure VMs](/openshift-docs-markdown/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-accelerated-networking_creating-machineset-azure).

## Alternatives to storing administrator-level secrets in the kube-system project {#installing-azure-manual-modes_installing-azure-private}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

- To manage long-term cloud credentials manually, follow the procedure in [Manually creating long-term credentials](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-private#manually-create-iam_installing-azure-private).
- To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in [Configuring an Azure cluster to use short-term credentials](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-private#installing-azure-with-short-term-creds_installing-azure-private).

### Configuring an Azure cluster to use short-term credentials {#installing-azure-with-short-term-creds_installing-azure-private}

To install a cluster that uses {{ entra_first }}, you must configure the Cloud Credential Operator utility and create the required Azure resources for your cluster.

**Additional resources**

- For the list of permissions needed to create a private storage endpoint, see [Required Azure permissions for installer-provisioned infrastructure](/openshift-docs-markdown/installing/installing_azure/installing-azure-account#minimum-required-permissions-ipi-azure_installing-azure-account).

**Additional resources**

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)

## Next steps {#_next_steps}

- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- If necessary, you can [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
