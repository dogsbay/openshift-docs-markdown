---
title: Configuring USB host passthrough
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring USB host passthrough {id="virt-configuring-usb-host-passthrough"}
{%- set context = "virt-configuring-usb-host-passthrough" %}

You can enable passthrough of USB devices to allow a virtual machine (VM) to connect to USB hardware that is attached to an {{ product_title }} node, as if the hardware and the VM are physically connected. {._abstract}

To expose a USB device, first enable host passthrough and then configure the VM to use the USB device.

{% leveloffset +1 %}{% include "./modules/virt-enabling-usb-host-passthrough.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-configuring-vm-use-usb-device.md" %}{% endleveloffset %}