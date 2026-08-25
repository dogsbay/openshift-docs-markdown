---
title: Use a virtual Trusted Platform Module (vTPM) device
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Use a virtual Trusted Platform Module (vTPM) device {id="virt-using-vtpm-devices"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-using-vtpm-devices" %}

To run Windows 11 or other workloads that require a Trusted Platform Module, you can add a virtual TPM (vTPM) to a new or existing virtual machine. Enable this by editing the `VirtualMachine` or `VirtualMachineInstance` manifest.


:::important

With {{ VirtProductName }} 4.18 and newer, you can export virtual machines (VMs) with attached vTPM devices, create snapshots of these VMs, and restore VMs from these snapshots. However, cloning a VM with a vTPM device attached to it or creating a new VM from its snapshot is not supported.

:::


{% leveloffset +1 %}{% include "./modules/virt-about-vtpm-devices.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-adding-vtpm-to-vm.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Exporting virtual machines](/virt/managing_vms/virt-exporting-vms#virt-exporting-vms)
*   [Creating a snapshot by using the CLI](/virt/backup_restore/virt-backup-restore-snapshots#virt-creating-vm-snapshot-cli_virt-backup-restore-snapshots)
*   [Restoring a virtual machine from a snapshot by using the CLI](/virt/backup_restore/virt-backup-restore-snapshots#virt-restoring-vm-from-snapshot-cli_virt-backup-restore-snapshots)