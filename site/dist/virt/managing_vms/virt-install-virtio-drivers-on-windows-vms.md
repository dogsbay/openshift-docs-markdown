---
title: Install VirtIO drivers on Windows VMs
---

# Install VirtIO drivers on Windows VMs {#virt-install-virtio-drivers-on-windows-vms}

VirtIO drivers are paravirtualized device drivers required for Microsoft Windows virtual machines (VMs) to run in {{ VirtProductName }}. The drivers are shipped with the rest of the images and do not require a separate download.

The `container-native-virtualization/virtio-win` container disk must be attached to the VM as a SATA CD drive to enable driver installation. You can install VirtIO drivers during Windows installation or add them to an existing Windows installation.

After the drivers are installed, the `container-native-virtualization/virtio-win` container disk can be removed from the VM.

**Supported drivers**

| Driver name | Hardware ID | Description |
| --- | --- | --- |
| **viostor** | VEN_1AF4&DEV_1001, VEN_1AF4&DEV_1042 | The block driver. Sometimes labeled as an **SCSI Controller** in the **Other devices** group. |
| **viorng** | VEN_1AF4&DEV_1005, VEN_1AF4&DEV_1044 | The entropy source driver. Sometimes labeled as a **PCI Device** in the **Other devices** group. |
| **NetKVM** | VEN_1AF4&DEV_1000, VEN_1AF4&DEV_1041 | The network driver. Sometimes labeled as an **Ethernet Controller** in the **Other devices** group. Available only if a VirtIO NIC is configured. |
