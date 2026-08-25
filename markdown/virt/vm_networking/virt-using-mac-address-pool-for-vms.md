---
title: Managing MAC address pools for network interfaces
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing MAC address pools for network interfaces {id="virt-using-mac-address-pool-for-vms"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-using-mac-address-pool-for-vms" %}

KubeMacPool allocates MAC addresses for virtual machine (VM) network interfaces from a shared MAC address pool. This ensures that each network interface is assigned a unique MAC address.

A virtual machine instance created from that VM retains the assigned MAC address across reboots.


:::note

KubeMacPool does not handle virtual machine instances created independently from a virtual machine.

:::


{% leveloffset +1 %}{% include "./modules/virt-managing-kubemacpool-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-custom-kubemacpool-range.md" %}{% endleveloffset %}