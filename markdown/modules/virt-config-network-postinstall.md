{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure network infrastructure postinstallation {id="virt-configure-platform-infrastructure-networking_{{ context }}"}

By default, {{ VirtProductName }} uses a single internal pod network after installation. You can configure additional networks and install networking Operators. {._abstract}

{% leveloffset +1 %}{% include "./virt-creating-linux-bridge-nncp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-creating-linux-bridge-nad-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-configuring-secondary-network-vm-live-migration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-selecting-migration-network-ui.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./shared-nw-sriov-configuring-device.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./shared-nw-sriov-network-attachment.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./virt-enabling-load-balancer-service-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-configuring-cdiuploadproxy-routes.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./virt-networking-glossary.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)
*   [SR-IOV Operator](/networking/hardware_networks/about-sriov#about-sriov)
*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
*   [Attaching a virtual machine (VM) to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-attaching-vm-secondary-network-cli_virt-connecting-vm-to-linux-bridge)
*   [Attaching a virtual machine (VM) to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-attaching-vm-to-sriov-network_virt-connecting-vm-to-sriov)
{% endif %}