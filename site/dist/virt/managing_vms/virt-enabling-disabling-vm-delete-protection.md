---
title: Enable or disable virtual machine delete protection
---

# Enable or disable virtual machine delete protection {#virt-enabling-disabling-vm-delete-protection}

You can prevent accidental deletion of a virtual machine (VM) by enabling delete protection. If delete protection is enabled, you must disable it before you can delete that VM.

You enable or disable delete protection from either the command line or the VM’s **VirtualMachine details** page in the OpenShift Container Platform web console. The option is disabled by default.

You can also choose to remove availability of the delete protection option for any VMs in a cluster you administer. In this case, VMs with the feature already enabled retain the protection, while the option is unavailable for any newly created VMs.

{% include "./modules/virt-enabling-disabling-vm-delete-protection-web.md" %}

## Additional resources {#additional-resources_virt-enabling-disabling-vm-delete-protection}

- [Enabling or disabling virtual machine delete protection by using the web console](/virt/managing_vms/virt-enabling-disabling-vm-delete-protection#virt-enabling-disabling-vm-delete-protection-web_virt-enabling-disabling-vm-delete-protection)
- [Enabling or disabling virtual machine delete protection by using the CLI](/virt/managing_vms/virt-enabling-disabling-vm-delete-protection#virt-enabling-disabling-vm-delete-protection-cli_virt-enabling-disabling-vm-delete-protection)
