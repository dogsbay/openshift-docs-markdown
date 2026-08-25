---
title: Installation methods
---

# Installation methods {#preparing-to-install-on-azure}

When you plan an OpenShift Container Platform deployment on Microsoft Azure, you can select installer-provisioned or user-provisioned infrastructure. Compare installation methods to find the path that matches your network, security, and operational requirements.

The default installation type uses installer-provisioned infrastructure, where the installation program provisions the underlying infrastructure for the cluster.

You can also install OpenShift Container Platform on infrastructure that you provision. If you do not use infrastructure that the installation program provisions, you must manage and support the cluster resources yourself.

## Installing a cluster on installer-provisioned infrastructure {#_installing_a_cluster_on_installer-provisioned_infrastructure}

You can install a cluster on {{ azure_first }} infrastructure that is provisioned by the OpenShift Container Platform installation program, by using one of the following methods:

- You can install OpenShift Container Platform on {{ azure_short }} infrastructure that the installation program provisions and use default configuration options for a quick deployment. For more information, see "Installing a cluster quickly on Azure".
- You can install a customized cluster on {{ azure_short }} infrastructure that the installation program provisions. The installation program supports some customization during installation, and many other options are available postinstallation. For more information, see "Installing a customized cluster on {{ azure_short }}".
- You can customize your OpenShift Container Platform configuration during installation so that your cluster coexists with existing IP address allocations and meets customized network requirements. For more information, see "Installing a cluster on {{ azure_short }} with customizations".
- You can install a cluster on {{ azure_short }} in a restricted network by creating an internal mirror of the installation release content on an existing Azure Virtual Network (`VNet`). For more information, see "Installing a cluster on {{ azure_short }} in a restricted network".
- You can install OpenShift Container Platform on an existing Azure `VNet` when company guidelines limit new accounts or infrastructure. For more information, see "Installing a cluster on {{ azure_short }} into an existing `VNet`".
- You can install a private cluster into an existing Azure `VNet` on {{ azure_short }} and deploy OpenShift Container Platform on an internal network that is not visible to the internet. For more information, see "Installing a private cluster on {{ azure_short }}".
- You can deploy OpenShift Container Platform into Microsoft Azure Government (MAG) regions for US government agencies, contractors, educational institutions, and other US customers that must run sensitive workloads on {{ azure_short }}. For more information, see "Installing a cluster on {{ azure_short }} into a government region".

**Additional resources**

- [Installing a cluster quickly on Azure](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-default#installing-azure-default)
- [Installing a cluster on {{ azure_short }} with customizations](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations)
- [Installing a cluster on {{ azure_short }} in a restricted network](/openshift-docs-markdown/installing/installing_azure/ipi/installing-restricted-networks-azure-installer-provisioned#installing-restricted-networks-azure-installer-provisioned)
- [Installing a cluster on {{ azure_short }} into an existing `VNet`](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-vnet#installing-azure-vnet)
- [Installing a private cluster on {{ azure_short }}](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-private#installing-azure-private)
- [Installing a cluster on {{ azure_short }} into a government region](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-government-region#installing-azure-government-region)

## Installing a cluster on user-provisioned infrastructure {#choosing-an-method-to-install-ocp-on-azure-user-provisioned}

You can install a cluster on {{ azure_short }} infrastructure that you provision, by using one of the following methods:

- You can install a cluster on {{ azure_short }} in a restricted network with user-provisioned infrastructure when you do not require an active internet connection to obtain software components. For more information, see "Installing a cluster on {{ azure_short }} in a restricted network with user-provisioned infrastructure".
- You can install OpenShift Container Platform on {{ azure_short }} by using infrastructure that you manage and Azure Resource Manager (ARM) templates to assist with the installation. For more information, see "Installing a cluster on {{ azure_short }} using ARM templates".

**Additional resources**

- [Installing a cluster on {{ azure_short }} in a restricted network with user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_azure/upi/installing-restricted-networks-azure-user-provisioned#installing-restricted-networks-azure-user-provisioned)
- [Installing a cluster on {{ azure_short }} using ARM templates](/openshift-docs-markdown/installing/installing_azure/upi/installing-azure-user-infra#installing-azure-user-infra)

## Additional resources {#preparing-to-install-on-azure-additional-resources}

- [Configuring an {{ azure_short }} account](/openshift-docs-markdown/installing/installing_azure/installing-azure-account#installing-azure-account)
- [Installation process](/openshift-docs-markdown/architecture/architecture-installation#installation-process_architecture-installation)
