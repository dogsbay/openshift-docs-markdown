{%- set _mod_docs_content_type = "REFERENCE" %}
# Considerations when running {{ VirtProductName }} on {{ ibm_z_name }} {id="virt-udn-considerations-ibm-z_{{ context }}"}

When running {{ VirtProductName }} on {{ ibm_z_name }}, the required network configuration depends on the hardware generation and the network adapter in use. Network interfaces on {{ ibm_z_name }} behave differently from standard Ethernet devices, which affects how the bridge forwards virtual machine traffic. {._abstract}

Review the following considerations before configuring a user-defined network (UDN) for virtual machines on {{ ibm_z_name }}. Applying the correct settings ensures stable layer 2 connectivity between the virtual machine and the network bridge.