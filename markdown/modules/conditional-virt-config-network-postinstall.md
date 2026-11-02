{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure network infrastructure postinstallation {id="virt-configure-platform-infrastructure-networking_{{ context }}"}

By default, {{ VirtProductName }} uses a single internal pod network after installation. You can configure additional networks and install networking Operators. {._abstract}

**Additional resources**
{._additional-resources}

*   [Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)
*   [SR-IOV Operator](/networking/hardware_networks/about-sriov#about-sriov)
*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
*   [Attaching a virtual machine (VM) to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-attaching-vm-secondary-network-cli_virt-connecting-vm-to-linux-bridge)
*   [Attaching a virtual machine (VM) to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-attaching-vm-to-sriov-network_virt-connecting-vm-to-sriov)