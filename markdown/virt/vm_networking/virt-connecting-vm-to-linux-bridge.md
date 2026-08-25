---
title: Connecting a virtual machine to a Linux bridge network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Connecting a virtual machine to a Linux bridge network {id="virt-connecting-vm-to-linux-bridge"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-connecting-vm-to-linux-bridge" %}

By default, {{ VirtProductName }} is installed with a single, internal pod network. You can connect a virtual machine (VM) to the physical network by using a Linux bridge.

To create a Linux bridge network and attach a VM to the network, perform the following steps:

1.  Prepare the node network by creating a Linux bridge node network configuration policy (NNCP).
1.  Define the secondary Linux bridge network by creating a network attachment definition (NAD).
1.  Attach the VM to the Linux bridge network.


:::note

{{ VirtProductName }} does not support Linux bridge bonding modes 0, 5, and 6. For more information, see "Additional resources".

:::


{% leveloffset +1 %}{% include "./modules/virt-creating-linux-bridge-nncp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-linux-bridge-nad-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-linux-bridge-nad-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-linux-bridge-nad-port-isolation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-vm-creating-nic-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-networking-wizard-fields-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-attaching-vm-secondary-network-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Configuring IP addresses for virtual machines](/virt/vm_networking/virt-configuring-viewing-ips-for-vms#virt-configuring-viewing-ips-for-vms)
*   [Which bonding modes work when used with a bridge that virtual machine guests or containers connect to?](https://access.redhat.com/solutions/67546)