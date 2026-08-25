---
title: Deploying a virtualized control plane
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying a virtualized control plane {id="vcp-installing-cluster"}
{%- set context = "vcp-installing-cluster" %}

After preparing your environment, install the virtualized control plane cluster by using your preferred installation method.
The agent-based installer and {{ ztp_first }} are the recommended methods for virtualized control plane deployments. {._abstract}

{%- set FeatureName = "KubeVirt Redfish" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/proc_virt-installing-vcp-abi.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_virt-installing-vcp-ztp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_virt-installing-vcp-ipi.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Preparing to install with the agent-based installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)
*   [Installation configuration parameters for the agent-based installer](/installing/installing_with_agent_based_installer/installation-config-parameters-agent#installation-config-parameters-agent)
*   [Installation configuration parameters for bare metal](/installing/installing_bare_metal/upi/installation-config-parameters-bare-metal#installation-config-parameters-bare-metal)
*   [Deploying far edge sites with ZTP](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)
*   [BMC addressing for installer-provisioned infrastructure](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
*   [Configuring KubeVirt Redfish for VM management](/virt/post_installation_configuration/virt-kubevirt-redfish#virt-kubevirt-redfish)
*   [Preparing the provisioner node for {{ product_title }} installation](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#preparing-the-provisioner-node-for-openshift-install_ipi-install-installation-workflow)