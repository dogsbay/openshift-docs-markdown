---
title: Export a virtual machine
---

# Export a virtual machine {#virt-exporting-vms}

Export a virtual machine (VM) and its associated disks to import it into another cluster, or for another use case, such as forensic volume analysis.

You create a `VirtualMachineExport` custom resource (CR) by using the command-line interface.

Alternatively, you can use the `virtctl vmexport` command to create a `VirtualMachineExport` CR and to download exported volumes.

> [!NOTE]
> You can migrate virtual machines between OpenShift Virtualization clusters by using the Migration Toolkit for Virtualization.

## Additional resources {#additional-resources_virt-exporting-vms}

- [Migration Toolkit for Virtualization](https://access.redhat.com/products/migration-toolkits-virtualization)
- [virtctl vmexport command](/virt/getting_started/virt-using-the-cli-tools#vm-export-commands_virt-using-the-cli-tools)
