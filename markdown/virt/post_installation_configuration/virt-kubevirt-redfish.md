---
title: Configuring KubeVirt Redfish for VM management
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring KubeVirt Redfish for VM management {id="virt-kubevirt-redfish"}
{%- set context = "virt-kubevirt-redfish" %}

KubeVirt Redfish exposes {{ VirtProductName }} virtual machines (VMs) through a Redfish-compatible API.
This enables external tools and orchestration systems to manage VM power states, query inventory, and attach virtual media using the industry-standard Redfish protocol. {._abstract}

Use KubeVirt Redfish when you need programmatic control over VMs using Redfish, such as deploying virtualized control planes or automating VM lifecycle management.

{%- set FeatureName = "KubeVirt Redfish" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/con_virt-about-kubevirt-redfish.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con_virt-kubevirt-redfish-architecture.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con_virt-kubevirt-redfish-vs-bmc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_virt-installing-kubevirt-redfish.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ref_virt-kubevirt-redfish-api-endpoints.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [BMC addressing for installer-provisioned infrastructure](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)
*   [Deploying far edge sites with ZTP](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)
*   [Redfish standard (DMTF)](https://www.dmtf.org/standards/redfish)