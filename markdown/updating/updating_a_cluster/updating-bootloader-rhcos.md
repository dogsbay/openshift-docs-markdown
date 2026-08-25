---
title: "Updating the boot loader on {{ op_system }} nodes using bootupd"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Updating the boot loader on {{ op_system }} nodes using bootupd {id="updating-bootloader-rhcos"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "updating-bootloader-rhcos" %}

To update the boot loader on {{ op_system }} nodes using `bootupd`, you must either run the `bootupctl update` command on {{ op_system }} machines manually or provide a machine config with a `systemd` unit.

Unlike `grubby` or other boot loader tools, `bootupd` does not manage kernel space configuration such as passing kernel arguments.
To configure kernel arguments, see [Adding kernel arguments to nodes](/nodes/nodes/nodes-nodes-managing#nodes-nodes-kernel-arguments_nodes-nodes-managing).


:::note

You can use `bootupd` to update the boot loader to protect against the BootHole vulnerability.

:::


{% leveloffset +1 %}{% include "./modules/updating-bootloader-manual.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/updating-bootloader-auto.md" %}{% endleveloffset %}