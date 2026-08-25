---
title: Preparing PXE assets for OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing PXE assets for {{ product_title }} {id="prepare-pxe-assets-agent"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "prepare-pxe-assets-agent" %}

You can create the assets needed to PXE boot an {{ product_title }} cluster by using the Agent-based Installer.

The assets you create in these procedures will deploy a single-node {{ product_title }} installation. You can use these procedures as a basis and modify configurations according to your requirements.

See "Installing an {{ product_title }} cluster with the Agent-based Installer" to learn about more configurations available with the Agent-based Installer.

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation and update](/architecture/architecture-installation#architecture-installation)

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-download.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-inputs.md" %}{% endleveloffset %}

**Additional resources**

*   [Deploying with dual-stack networking](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#modifying-install-config-for-dual-stack-network_ipi-install-installation-workflow)
*   [Configuring the install-config yaml file](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#configuring-the-install-config-file_ipi-install-installation-workflow)
*   [Configuring a three-node cluster](/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-three-node-cluster_installing-restricted-networks-bare-metal)
*   [About root device hints](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#root-device-hints_preparing-to-install-with-agent-based-installer)
*   [NMState state examples (NMState documentation)](https://nmstate.io/examples.html)
*   [Creating additional manifest files](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-ocp-agent-opt-manifests_installing-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/pxe-assets-ocp-agent.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-network-overrides-ibm-z.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-ocp-agent-ibm-z-zvm.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }}](/installing/installing_ibm_z/upi/installing-ibm-z#installing-ibm-z)

{% leveloffset +2 %}{% include "./modules/installing-ocp-agent-ibm-z-kvm.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_title }} and {{ ibm_linuxone_title }}](/installing/installing_ibm_z/upi/installing-ibm-z-kvm#installing-ibm-z-kvm)

{% leveloffset +2 %}{% include "./modules/adding-ibm-z-lpar-agent.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster in an LPAR on {{ ibm_z_title }} and {{ ibm_linuxone_title }}](/installing/installing_ibm_z/upi/installing-ibm-z-lpar#installing-ibm-z-lpar)

## Additional resources {id="additional-resources_{{ context }}"}

*   [Installing an {{ product_title }} cluster with the Agent-based Installer](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)