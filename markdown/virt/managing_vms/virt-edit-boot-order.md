---
title: Edit the boot order of a virtual machine
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Edit the boot order of a virtual machine {id="virt-edit-boot-order"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-edit-boot-order" %}

You can configure the boot order of disks and network devices on your virtual machine (VM) by using the web console or the CLI.

With **Boot Order** in the **VirtualMachine details** page, you can:

*   Select a disk or network interface controller (NIC) and add it to the boot order list.
*   Edit the order of the disks or NICs in the boot order list.
*   Remove a disk or NIC from the boot order list, and return it back to the inventory of bootable sources.

{% leveloffset +1 %}{% include "./modules/virt-add-boot-order-web.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-edit-boot-order-web.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-edit-boot-order-yaml-web.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-remove-boot-order-item-web.md" %}{% endleveloffset %}