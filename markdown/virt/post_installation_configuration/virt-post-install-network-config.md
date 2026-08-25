---
title: Postinstallation network configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Postinstallation network configuration {id="virt-post-install-network-config"}
{%- set context = "virt-post-install-network-config" %}

By default, {{ VirtProductName }} uses a single internal pod network after installation. {._abstract}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
After you install {{ VirtProductName }}, you can install networking Operators and configure additional networks.

*   You must install the Kubernetes NMState Operator to configure a Linux bridge network for live migration or external access to virtual machines (VMs).
*   You can install the SR-IOV Operator to manage SR-IOV network devices and network attachments.
*   You can add the MetalLB Operator to manage the lifecycle for an instance of MetalLB on your cluster.
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-creating-linux-bridge-nncp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-linux-bridge-nad-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-secondary-network-vm-live-migration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-selecting-migration-network-ui.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-configuring-device.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-network-attachment.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-enabling-load-balancer-service-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-cdiuploadproxy-routes.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)
*   [SR-IOV Operator](/networking/hardware_networks/about-sriov#about-sriov)
*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
*   [Attaching a virtual machine (VM) to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-attaching-vm-secondary-network-cli_virt-connecting-vm-to-linux-bridge)
*   [Attaching a virtual machine (VM) to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-attaching-vm-to-sriov-network_virt-connecting-vm-to-sriov)
{% endif %}