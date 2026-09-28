{%- set _mod_docs_content_type = "CONCEPT" %}
# Improve the security of the USB ports on your nodes {id="improve-the-security-of-the-usb-ports-on-my-nodes-con_{{ context }}"}

To control which USB devices may be attached to cluster nodes, you can install the {{ op_system_base_full }} `usbguard` extension on a machine config pool. The extension is added through a `MachineConfig` object, which the Machine Config Operator rolls out to the selected nodes.