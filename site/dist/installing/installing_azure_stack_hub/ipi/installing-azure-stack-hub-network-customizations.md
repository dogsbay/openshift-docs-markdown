---
title: Installing a cluster on Azure Stack Hub with network customizations
---

# Installing a cluster on Azure Stack Hub with network customizations {#installing-azure-stack-hub-network-customizations}

In OpenShift Container Platform version 4.22, you can install a cluster with a customized network configuration on infrastructure that the installation program provisions on Azure Stack Hub. By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

> [!NOTE]
> While you can select `azure` when using the installation program to deploy a cluster using installer-provisioned infrastructure, this option is only supported for the Azure Public Cloud.

## Prerequisites {#prerequisites_installing-azure-stack-hub-network-customizations}

- You reviewed details about the [OpenShift Container Platform installation and update](/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
- You have installed Azure Stack Hub version 2008 or later.
- You [configured an Azure Stack Hub account](/installing/installing_azure_stack_hub/installing-azure-stack-hub-account#installing-azure-stack-hub-account) to host the cluster.
- If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
- You verified that you have approximately 16 GB of local disk space. Installing the cluster requires that you download the {{ op_system }} virtual hard drive (VHD) cluster image and upload it to your Azure Stack Hub environment so that it is accessible during deployment. Decompressing the VHD files requires this amount of local disk space.

**Additional resources**

- [Installation configuration parameters for Azure Stack Hub](/installing/installing_azure_stack_hub/installation-config-parameters-ash#installation-config-parameters-ash)

<a name="additional-resources_installing-azure-stack-hub-network-customizations-cco"></a>**Additional resources**

- [Updating a cluster using the web console](/updating/updating_a_cluster/updating-cluster-web-console#manually-maintained-credentials-upgrade_updating-cluster-web-console)
- [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#manually-maintained-credentials-upgrade_updating-cluster-cli)

<a name="additional-resources_installing-azure-stack-hub-network-customizations-console"></a>**Additional resources**

- [Accessing the web console](/web_console/web-console#web-console)

## Next steps {#next-steps_installing-azure-stack-hub-network-customizations}

- [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
- [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- Optional: [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- Optional: [Remove cloud provider credentials](/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)
