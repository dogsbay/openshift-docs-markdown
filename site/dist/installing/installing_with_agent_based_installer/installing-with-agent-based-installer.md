---
title: Installing a cluster with customizations
---

# Installing a cluster with customizations {#installing-with-agent-based-installer}

You can install an OpenShift Container Platform cluster using the Agent-based Installer, with customizations to meet your deployment needs.

The following procedures deploy a single-node OpenShift Container Platform cluster in a disconnected environment. You can use these procedures as a basis and modify according to your requirements.

**Additional resources**

- [Installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Port requirements for the rendezvous host](/openshift-docs-markdown/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-install-networking-ports_preparing-to-install-with-agent-based-installer)

**Additional resources**

- [Deploying with dual-stack networking](/openshift-docs-markdown/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#modifying-install-config-for-dual-stack-network_ipi-install-installation-workflow)
- [Configuring the install-config yaml file](/openshift-docs-markdown/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#configuring-the-install-config-file_ipi-install-installation-workflow)
- [Configuring a three-node cluster](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-three-node-cluster_installing-restricted-networks-bare-metal)
- [About root device hints](/openshift-docs-markdown/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#root-device-hints_preparing-to-install-with-agent-based-installer)
- [NMState state examples (NMState documentation)](https://nmstate.io/examples.html)
- [Configuring regions and zones for a VMware vCenter](/openshift-docs-markdown/installing/installing_vsphere/ipi/installing-vsphere-installer-provisioned-customizations#configuring-vsphere-regions-zones_installing-vsphere-installer-provisioned-customizations)
- [Verifying the supported architecture for installing an Agent-based installer cluster](/openshift-docs-markdown/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#agent-install-verifying-architectures_installing-with-agent-based-installer)
- [Configuring the Agent-based Installer to use mirrored images](/openshift-docs-markdown/installing/installing_with_agent_based_installer/understanding-disconnected-installation-mirroring#agent-install-configuring-for-disconnected-registry_understanding-disconnected-installation-mirroring)

**Additional resources**

- [Using MachineConfig objects to configure nodes](/openshift-docs-markdown/machine_configuration/machine-configs-configure#machine-configs-configure)

**Additional resources**

- [Sample {{ ztp }} custom resources](/openshift-docs-markdown/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#sample-ztp-custom-resources_installing-with-agent-based-installer)
- [Challenges of the network far edge](/openshift-docs-markdown/edge_computing/ztp-deploying-far-edge-clusters-at-scale#ztp-deploying-far-edge-clusters-at-scale)

**Additional resources**

- [About disk encryption](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-storage_installing-customizing)

**Additional resources**

- [Challenges of the network far edge](/openshift-docs-markdown/edge_computing/ztp-deploying-far-edge-clusters-at-scale#ztp-deploying-far-edge-clusters-at-scale)
