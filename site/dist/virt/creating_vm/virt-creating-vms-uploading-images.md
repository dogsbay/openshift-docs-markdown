---
title: Creating VMs by uploading images
---

# Creating VMs by uploading images {#virt-creating-vms-uploading-images}

You can create virtual machines (VMs) by uploading operating system images from your local machine.

You can create a Windows VM by uploading a Windows image to a PVC. Then you clone the PVC when you create the VM.

> [!IMPORTANT]
> You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red Hat.
>
> You must also install VirtIO drivers on Windows VMs. Download VirtIO drivers only from official Red Hat sources. For more information, see "Additional resources".

## Additional resources {#additional-resources_virt-creating-vms-uploading-images}

- [Installing the QEMU guest agent](/openshift-docs-markdown/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)
- [Installing VirtIO drivers on Windows VMs](/openshift-docs-markdown/virt/managing_vms/virt-install-virtio-drivers-on-windows-vms#virt-install-virtio-drivers-on-windows-vms)
- [Red Hat VirtIO drivers download page](https://access.redhat.com/downloads/content/479/virtio-win/noarch/package-latest)
- [How to check virtio-win drivers version on Windows guest](https://access.redhat.com/solutions/764103)
- [Installing and updating VirtIO drivers for Windows virtual machines](https://access.redhat.com/solutions/6957701)
- [Cloning VMs](/openshift-docs-markdown/virt/creating_vm/virt-cloning-vms#virt-cloning-vms)
- [Cloning a PVC to a data volume](/openshift-docs-markdown/virt/creating_vm/virt-creating-vms-by-cloning-pvcs#virt-cloning-pvc-to-dv-cli_virt-creating-vms-by-cloning-pvcs)
- link:https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/sysprep--generalize--a-windows-installation\[Sysprep (Generalize) a Windows installation\]
- [Configuration pass of Windows Setup (generalize)](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/generalize)
- [Configuration pass of Windows Setup (specialize)](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/specialize)
