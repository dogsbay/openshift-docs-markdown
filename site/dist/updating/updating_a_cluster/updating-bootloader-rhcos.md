---
title: Updating the boot loader on {{ op_system }} nodes using bootupd
---

# Updating the boot loader on {{ op_system }} nodes using bootupd {#updating-bootloader-rhcos}

To update the boot loader on {{ op_system }} nodes using `bootupd`, you must either run the `bootupctl update` command on {{ op_system }} machines manually or provide a machine config with a `systemd` unit.

Unlike `grubby` or other boot loader tools, `bootupd` does not manage kernel space configuration such as passing kernel arguments. To configure kernel arguments, see [Adding kernel arguments to nodes](/nodes/nodes/nodes-nodes-managing#nodes-nodes-kernel-arguments_nodes-nodes-managing).

> [!NOTE]
> You can use `bootupd` to update the boot loader to protect against the BootHole vulnerability.
