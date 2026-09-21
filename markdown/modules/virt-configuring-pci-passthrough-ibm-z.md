{%- set _mod_docs_content_type = "CONCEPT" %}
# PCI passthrough on {{ ibm_z_title }} {id="virt-configuring-pci-passthrough-ibm-z_{{ context }}"}

On {{ ibm_z_name }} and {{ ibm_linuxone_name }}, you can configure PCI passthrough for Network Express RoCE adapters and {{ ibm_name }} Internal Shared Memory (ISM) virtual PCI devices. Both use `vfio-pci` to pass devices directly to virtual machines.