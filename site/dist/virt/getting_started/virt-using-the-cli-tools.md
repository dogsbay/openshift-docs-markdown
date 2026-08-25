---
title: Using the CLI tools
---

# Using the CLI tools {#virt-using-the-cli-tools}

You can manage {{ VirtProductName }} resources by using the `virtctl` command-line tool. Virtual machine (VM) commands can also be used to manage virtual machine instances (VMIs) unless otherwise specified.

> [!NOTE]
> You can access and change VM disk images by using the `libguestfs` command-line tool. You deploy `libguestfs` by using the `virtctl libguestfs` command.

{% include "./modules/virt-installing-virtctl-binary.md" %} {% include "./modules/virt-virtctl-information-commands.md" %} {% include "./modules/virt-vm-information-commands.md" %} {% include "./modules/virt-vm-manifest-creation-commands.md" %} {% include "./modules/virt-vm-management-commands.md" %} {% include "./modules/virt-vm-connection-commands.md" %} {% include "./modules/virt-vm-export-commands.md" %} {% include "./modules/virt-hot-plug-and-hot-unplug-commands.md" %} {% include "./modules/virt-image-upload-commands.md" %}

## Additional resources {#_additional_resources}

- [Red Hat Ansible Automation Hub](https://console.redhat.com/ansible/automation-hub)
- [`libguestfs`](https://libguestfs.org)
