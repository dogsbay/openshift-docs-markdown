---
title: Installing OpenShift on a single node
---

# Installing OpenShift on a single node {#install-sno-installing-sno}

You can install {{ sno }} by using either the web-based Assisted Installer or the `coreos-installer` tool to generate a discovery ISO image.

The discovery ISO image writes the {{ op_system_first }} system configuration to the target installation disk, so that you can run a single-cluster node to meet your needs.

Consider using {{ sno }} when you want to run a cluster in a low-resource or an isolated environment for testing, troubleshooting, training, or small-scale project purposes.

**Additional resources**

- [Installing OpenShift Container Platform with the Assisted Installer](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/index)

**Additional resources**

- [Persistent storage using logical volume manager storage](/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms_logical-volume-manager-storage)
- [What you can do with OpenShift Virtualization](/virt/about_virt/about-virt#virt-what-you-can-do-with-virt_about-virt)

**Additional resources**

- [Creating a bootable ISO image on a USB drive](/installing/installing_sno/install-sno-installing-sno#installing-with-usb-media_install-sno-installing-sno-with-the-assisted-installer)
- [Booting from an HTTP-hosted ISO image using the Redfish API](/installing/installing_sno/install-sno-installing-sno#install-booting-from-an-iso-over-http-redfish_install-sno-installing-sno-with-the-assisted-installer)
- [Adding worker nodes to {{ sno }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)

**Additional resources**

- [Networking requirements for user-provisioned infrastructure](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-network-user-infra_installing-bare-metal-network-customizations)
- [User-provisioned DNS requirements](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-dns-user-infra_installing-bare-metal-network-customizations)
- [Configuring DHCP or static IP addresses](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#configuring-dhcp-or-static-ip-addresses_installing-bare-metal-network-customizations)

**Additional resources**

- [Requirements for installing OpenShift on a single node](/installing/installing_sno/install-sno-preparing-to-install-sno#preparing-to-install-sno)
- [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)
- [Optional cluster capabilities in OpenShift Container Platform 4.22](/installing/overview/cluster-capabilities#explanation_of_capabilities_cluster-capabilities)

**Additional resources**

- [Creating a bootable ISO image on a USB drive](/installing/installing_sno/install-sno-installing-sno#installing-with-usb-media_install-sno-installing-sno-with-the-assisted-installer)
- [Booting from an HTTP-hosted ISO image using the Redfish API](/installing/installing_sno/install-sno-installing-sno#install-booting-from-an-iso-over-http-redfish_install-sno-installing-sno-with-the-assisted-installer)
- [Adding worker nodes to {{ sno }} clusters](/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)

**Additional resources**

- [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)

**Additional resources**

- [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)

**Additional resources**

- [Installing a cluster on AWS with customizations](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)

**Additional resources**

- [Installing a cluster on Azure with customizations](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations)

**Additional resources**

- [Installing a cluster on {{ gcp_short }} with customizations](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)

**Additional resources**

- [Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z#installing-ibm-z)
- [Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z-kvm#installing-ibm-z-kvm)
- [Installing a cluster in an LPAR on {{ ibm_z_name }} and {{ ibm_linuxone_name }}](/installing/installing_ibm_z/upi/installing-ibm-z-lpar#installing-ibm-z-lpar)

**Additional resources**

- [Installing a cluster on {{ ibm_power_name }}](/installing/installing_ibm_power/installing-ibm-power#installing-ibm-power)
