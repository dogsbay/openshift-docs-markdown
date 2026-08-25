---
title: Connecting a virtual machine to an SR-IOV network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connecting a virtual machine to an SR-IOV network {id="virt-connecting-vm-to-sriov"}
{%- set context = "virt-connecting-vm-to-sriov" %}

You can connect a virtual machine (VM) to the physical network by using a Single Root I/O Virtualization (SR-IOV) device.  {._abstract}

To configure the SR-IOV network and attach the VM to that network, perform the following steps:

1.  Configure an SR-IOV physical network device.
1.  Define the secondary SR-IOV network.
1.  Attach the VM to the SR-IOV network.

{% leveloffset +1 %}{% include "./modules/nw-sriov-configuring-device.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-additional-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-attaching-vm-to-sriov-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-attaching-vm-to-sriov-network-web-console.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Configuring DPDK workloads for improved performance](/virt/vm_networking/virt-using-dpdk-with-sriov#virt-using-dpdk-with-sriov)