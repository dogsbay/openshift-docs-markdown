{%- set _mod_docs_content_type = "CONCEPT" %}
# Update the boot loader on RHCOS nodes {id="update-the-boot-loader-on-rhcos-nodes-con_{{ context }}"}

To update the boot loader on {{ op_system }} nodes using `bootupd`, you must either run the `bootupctl update` command on {{ op_system }} machines manually or provide a machine config with a `systemd` unit. {._abstract}

Unlike `grubby` or other boot loader tools, `bootupd` does not manage kernel space configuration such as passing kernel arguments.
To configure kernel arguments, see "Add kernel arguments to nodes".

For example, you can use `bootupd` to update the boot loader to protect against the BootHole vulnerability.


:::note

On clusters that use the `x86_64` or ARM CPU architecture, {{ op_system }} automatically updates the boot loader when a node gets upgraded to a new operating system image. For UEFI systems, the `bootloader-update.service` updates the boot loader inside the EFI System Partition. For Legacy BIOS systems, the `bootloader-update.service` writes the boot loader directly to the boot sectors. With these clusters, there is no need to manually update the boot loader.

On the `ppc64le` architecture, `bootupd` support exists, but RAID setups are not currently supported. On the `s390x` architecture, `bootupd` has no boot loader to update.

:::