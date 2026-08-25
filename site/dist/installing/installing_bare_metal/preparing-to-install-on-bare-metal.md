---
title: Preparing for bare-metal cluster installation
---

# Preparing for bare-metal cluster installation {#preparing-to-install-on-bare-metal}

Review the different methods for installing OpenShift Container Platform on bare metal and prepare your environment for installation.

## Prerequisites {#preparing_preparing-to-install-on-bare-metal}

- You have read details about the OpenShift Container Platform installation and update processes.
- You have read the documentation on selecting a cluster installation method and preparing it for users.
- You have read the documentation for supported and unsupported OVN-Kubernetes network plugin use cases.

## Choosing a method to install OpenShift Container Platform on bare metal {#choosing-a-method-to-install-ocp-on-bare-metal}

The OpenShift Container Platform installation program offers four methods for deploying a cluster:

- **Interactive**: You can deploy a cluster with the web-based {{ ai_full }}. This is the recommended approach for clusters with networks connected to the internet. The {{ ai_full }} is the easiest way to install OpenShift Container Platform, it provides smart defaults, and it performs pre-flight validations before installing the cluster. It also provides a RESTful API for automation and advanced configuration scenarios.
- **Local Agent-based**: You can deploy a cluster locally with the agent-based installer for air-gapped or restricted networks. It provides many of the benefits of the {{ ai_full }}, but you must download and configure the agent-based installer first. Configuration is done with a commandline interface. This approach is ideal for air-gapped or restricted networks.
- **Automated**: You can deploy a cluster on installer-provisioned infrastructure and the cluster it maintains. The installation program uses each cluster host’s baseboard management controller (BMC) for provisioning. You can deploy clusters with both connected or air-gapped or restricted networks.
- **Full control**: You can deploy a cluster on infrastructure that you prepare and maintain, which provides maximum customizability. You can deploy clusters with both connected or air-gapped or restricted networks.

The clusters have the following characteristics:

- Highly available infrastructure with no single points of failure is available by default.
- Administrators maintain control over what updates are applied and when.

## Installing a cluster on installer-provisioned infrastructure {#choosing-a-method-to-install-ocp-on-bare-metal-installer-provisioned}

You can install a cluster on bare-metal infrastructure that is provisioned by the OpenShift Container Platform installation program, by using the following method:

***Installing an installer-provisioned cluster on bare metal***
:   You can install OpenShift Container Platform on bare metal by using installer provisioning.

## Installing a cluster on user-provisioned infrastructure {#choosing-a-method-to-install-ocp-on-bare-metal-user-provisioned}

You can install a cluster on bare-metal infrastructure that you provision, by using one of the following methods:

***Installing a user-provisioned cluster on bare metal***
:   You can install OpenShift Container Platform on bare-metal infrastructure that you provision. For a cluster that contains user-provisioned infrastructure, you must deploy all of the required machines.

***Installing a user-provisioned bare-metal cluster with network customizations***
:   You can install a bare-metal cluster on user-provisioned infrastructure with network-customizations. By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations. Most of the network customizations must be applied at the installation stage.

***Installing a user-provisioned bare-metal cluster on a restricted network***
:   You can install a user-provisioned bare-metal cluster on a restricted or disconnected network by using a mirror registry. You can also use this installation method to ensure that your clusters only use container images that satisfy your organizational controls on external content.

## Additional resources {#additional-resources_preparing-to-install-on-bare-metal}

- [OpenShift Container Platform installation and update processes](/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
- [OVN-Kubernetes purpose](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#nw-ovn-kubernetes-purpose_about-ovn-kubernetes)
- [{{ ai_full }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform)
- [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)
- [Agent-based installer](https://console.redhat.com/openshift/install/metal/agent-based)
- [Deploying installer-provisioned clusters on bare metal](/installing/installing_bare_metal/ipi/ipi-install-overview#ipi-install-overview)
- [Installing a user-provisioned cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
- [Installing a user-provisioned bare-metal cluster with network customizations](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installing-bare-metal-network-customizations)
- [Installing a user-provisioned bare-metal cluster on a restricted network](/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installing-restricted-networks-bare-metal)
- [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)
- [Getting started with {{ VirtProductName }}](/virt/getting_started/virt-getting-started#virt-getting-started)
- [Preparing your cluster for {{ VirtProductName }}](/virt/install/preparing-cluster-for-virt#preparing-cluster-for-virt)
- [About Single Root I/O Virtualization (SR-IOV) hardware networks](/networking/hardware_networks/about-sriov#about-sriov)
- [Connecting a virtual machine to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-connecting-vm-to-sriov)
- [Example: Bonds and SR-IOV dual-NIC node network configuration](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-install-sample-config-bond-sriov_preparing-to-install-with-agent-based-installer)
- [Optional: Configuring host network interfaces for dual port NIC](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#configuring-host-dual-network-interfaces-in-the-install-config-yaml-file_ipi-install-installation-workflow)
- [Bonding multiple SR-IOV network interfaces to a dual port NIC interface](/installing/installing_bare_metal/upi/installing-bare-metal#bonding-multiple-sriov-network-interfaces-to-dual-port_installing-bare-metal)
