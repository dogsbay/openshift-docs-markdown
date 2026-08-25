---
title: Installing a cluster with customizations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster with customizations {id="installing-with-agent-based-installer"}
{%- set context = "installing-with-agent-based-installer" %}

You can install an {{ product_title }} cluster using the Agent-based Installer, with customizations to meet your deployment needs. {._abstract}

The following procedures deploy a single-node {{ product_title }} cluster in a disconnected environment. You can use these procedures as a basis and modify according to your requirements.

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-prereqs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Port requirements for the rendezvous host](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-install-networking-ports_preparing-to-install-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-download.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/agent-installer-architectures.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-inputs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Deploying with dual-stack networking](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#modifying-install-config-for-dual-stack-network_ipi-install-installation-workflow)
*   [Configuring the install-config yaml file](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#configuring-the-install-config-file_ipi-install-installation-workflow)
*   [Configuring a three-node cluster](/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-three-node-cluster_installing-restricted-networks-bare-metal)
*   [About root device hints](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#root-device-hints_preparing-to-install-with-agent-based-installer)
*   [NMState state examples (NMState documentation)](https://nmstate.io/examples.html)
*   [Configuring regions and zones for a VMware vCenter](/installing/installing_vsphere/ipi/installing-vsphere-installer-provisioned-customizations#configuring-vsphere-regions-zones_installing-vsphere-installer-provisioned-customizations)
*   [Verifying the supported architecture for installing an Agent-based installer cluster](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#agent-install-verifying-architectures_installing-with-agent-based-installer)
*   [Configuring the Agent-based Installer to use mirrored images](/installing/installing_with_agent_based_installer/understanding-disconnected-installation-mirroring#agent-install-configuring-for-disconnected-registry_understanding-disconnected-installation-mirroring)

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-additional-manifests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-ocp-agent-manifest-folder.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using MachineConfig objects to configure nodes](/machine_configuration/machine-configs-configure#machine-configs-configure)

{% leveloffset +2 %}{% include "./modules/creating-manifest-file-customized-br-ex-bridge.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-machines-advanced-disk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-ocp-agent-ZTP.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Sample {{ ztp }} custom resources](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#sample-ztp-custom-resources_installing-with-agent-based-installer)
*   [Challenges of the network far edge](/edge_computing/ztp-deploying-far-edge-clusters-at-scale#ztp-deploying-far-edge-clusters-at-scale)

{% leveloffset +2 %}{% include "./modules/installing-ocp-agent-encrypt.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About disk encryption](/installing/install_config/installing-customizing#installation-special-config-storage_installing-customizing)

{% leveloffset +2 %}{% include "./modules/installing-ocp-agent-cluster-network-mtu.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-boot.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-ibm-z-kvm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-tui.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-verify.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sample-ztp-custom-resources.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Challenges of the network far edge](/edge_computing/ztp-deploying-far-edge-clusters-at-scale#ztp-deploying-far-edge-clusters-at-scale)

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-gather-log.md" %}{% endleveloffset %}