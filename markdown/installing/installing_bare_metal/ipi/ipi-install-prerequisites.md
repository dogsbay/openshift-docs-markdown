---
title: Prerequisites
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Prerequisites {id="ipi-install-prerequisites"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ipi-install-prerequisites" %}

You must meet several prerequisites before installing a cluster on bare metal by using installer-provisioned infrastructure.

Installer-provisioned installation of {{ product_title }} requires:

{% if openshift_origin %}
1.  One provisioner node with {{ op_system_first }} installed. You can remove the provisioner node after installation.
{% endif %}
{% if not openshift_origin %}
1.  One provisioner node with {{ op_system_base_full }} {{ op_system_version }} installed. The provisioner can be removed after installation.
{% endif %}
1.  Three control plane nodes
1.  Baseboard management controller (BMC) access to each node
1.  At least one network:
    1.  One required routable network
    1.  One optional provisioning network
    1.  One optional management network

Before starting an installer-provisioned installation of {{ product_title }}, ensure the hardware environment meets the following requirements.

{% leveloffset +1 %}{% include "./modules/ipi-install-node-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-planning-bare-metal-cluster-for-ocp-virt.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing your cluster for {{ VirtProductName }}](/virt/install/preparing-cluster-for-virt#preparing-cluster-for-virt)
*   [About Single Root I/O Virtualization (SR-IOV) hardware networks](/networking/hardware_networks/about-sriov#about-sriov)
*   [Connecting a virtual machine to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-connecting-vm-to-sriov)

{% leveloffset +1 %}{% include "./modules/ipi-install-firmware-requirements-for-installing-with-virtual-media.md" %}{% endleveloffset %}

**Additional resources**

*   [Red Hat third-party support policy](https://access.redhat.com/third-party-software-support)
*   [UCSHCL](https://ucshcltool.cloudapps.cisco.com/public/)
*   [Unable to discover new bare-metal hosts by using the BMC](/installing/installing_bare_metal/ipi/ipi-install-troubleshooting#unable-to-discover-new-bare-metal-hosts-using-the-bmc_ipi-install-troubleshooting)

{% leveloffset +1 %}{% include "./modules/ipi-install-nc-si-hardware-requirements-for-bare-metal.md" %}{% endleveloffset %}

**Additional resources**

*   [Ironic NC-SI Specification](https://specs.openstack.org/openstack/ironic-specs/specs/approved/nc-si.html)
*   [DMTF: Network Controller Sideband Interface (NC-SI) Specification](https://www.dmtf.org/sites/default/files/standards/documents/DSP0222_1.1.1.pdf)

{% leveloffset +1 %}{% include "./modules/ipi-install-network-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Using DNS forwarding](/networking/networking_operators/dns-operator#nw-dns-forward_dns-operator)

{% leveloffset +1 %}{% include "./modules/ipi-install-configuring-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ipi-install-configuring-nodes-secure-boot.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-out-of-band-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-required-data-for-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-validation-checklist-for-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ref_ipi-installation-overview.md" %}{% endleveloffset %}