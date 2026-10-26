{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage MAC address pools {id="virt-manage-mac-address-pools_{{ context }}"}

You can manage KubeMacPool to control MAC address allocation for virtual machine (VM) network interfaces, including disabling automatic allocation for specific namespaces and customizing the MAC address range. KubeMacPool allocates MAC addresses for VM network interfaces from a shared MAC address pool. This ensures that each network interface is assigned a unique MAC address. {._abstract}

A virtual machine instance created from that VM retains the assigned MAC address across reboots.


:::note

KubeMacPool does not handle virtual machine instances created independently from a VM.

:::