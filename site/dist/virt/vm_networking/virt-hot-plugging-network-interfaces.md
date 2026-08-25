---
title: Hot plugging secondary network interfaces
---

# Hot plugging secondary network interfaces {#virt-hot-plugging-network-interfaces}

You can add or remove secondary network interfaces without stopping your virtual machine (VM). {{ VirtProductName }} supports hot plugging and hot unplugging for secondary interfaces that use bridge binding and the VirtIO device driver.

{{ VirtProductName }} also supports hot plugging secondary interfaces that use SR-IOV binding. To hot plug or hot unplug a secondary interface, you must have permission to create and list `VirtualMachineInstanceMigration` objects.

> [!NOTE]
> Hot unplugging is not supported for Single Root I/O Virtualization (SR-IOV) interfaces.

## Additional resources {#additional-resources_virt-hot-plugging-network-interfaces}

- [Installing virtctl](/virt/getting_started/virt-using-the-cli-tools#virt-installing-virtctl-binary_virt-using-the-cli-tools)
- [About live migration permissions](/virt/live_migration/virt-about-live-migration#virt-about-live-migration-permissions_virt-about-live-migration)
- [Creating a Linux bridge network attachment definition](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
- [Creating an SR-IOV network attachment definition](/virt/vm_networking/virt-connecting-vm-to-sriov#nw-sriov-additional-network_virt-connecting-vm-to-sriov)
- [Connecting a virtual machine to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-attaching-vm-to-sriov-network_virt-connecting-vm-to-sriov)
