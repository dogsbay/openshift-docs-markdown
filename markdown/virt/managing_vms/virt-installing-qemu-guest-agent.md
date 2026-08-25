---
title: Install the QEMU guest agent
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Install the QEMU guest agent {id="virt-installing-qemu-guest-agent"}
{%- set context = "virt-installing-qemu-guest-agent" %}

The QEMU guest agent is a daemon that runs on the VM and passes information to the host about the VM, users, file systems, and secondary networks. You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red&#160;Hat. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-installing-qemu-guest-agent-on-linux-vm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-installing-qemu-guest-agent-on-windows-vm.md" %}{% endleveloffset %}