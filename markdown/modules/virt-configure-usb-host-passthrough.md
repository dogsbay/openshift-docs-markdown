{%- set _mod_docs_content_type = "CONCEPT" %}
# USB host passthrough configuration {id="virt-configure-usb-host-passthrough_{{ context }}"}

You can enable passthrough of USB devices to allow a virtual machine (VM) to connect to USB hardware that is attached to an {{ product_title }} node, as if the hardware and the VM are physically connected. {._abstract}

To expose a USB device, first enable host passthrough and then configure the VM to use the USB device.