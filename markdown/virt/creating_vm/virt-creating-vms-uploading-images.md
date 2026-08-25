---
title: Creating VMs by uploading images
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating VMs by uploading images {id="virt-creating-vms-uploading-images"}
{%- set context = "virt-creating-vms-uploading-images" %}

You can create virtual machines (VMs) by uploading operating system images from your local machine. {._abstract}

You can create a Windows VM by uploading a Windows image to a PVC. Then you clone the PVC when you create the VM.


:::important

You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red&#160;Hat.

You must also install VirtIO drivers on Windows VMs. Download VirtIO drivers only from official Red&#160;Hat sources. For more information, see "Additional resources".

:::


{% leveloffset +1 %}{% include "./modules/virt-creating-vm-uploaded-image-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-generalizing-linux-vm-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-windows-vm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-generalizing-windows-sysprep.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-specializing-windows-sysprep.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-uploading-image-virtctl.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Installing the QEMU guest agent](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)
*   [Installing VirtIO drivers on Windows VMs](/virt/managing_vms/virt-install-virtio-drivers-on-windows-vms#virt-install-virtio-drivers-on-windows-vms)
*   [Red&#160;Hat VirtIO drivers download page](https://access.redhat.com/downloads/content/479/virtio-win/noarch/package-latest)
*   [How to check virtio-win drivers version on Windows guest](https://access.redhat.com/solutions/764103)
*   [Installing and updating VirtIO drivers for Windows virtual machines](https://access.redhat.com/solutions/6957701)
*   [Cloning VMs](/virt/creating_vm/virt-cloning-vms#virt-cloning-vms)
*   [Cloning a PVC to a data volume](/virt/creating_vm/virt-creating-vms-by-cloning-pvcs#virt-cloning-pvc-to-dv-cli_virt-creating-vms-by-cloning-pvcs)
*   link:https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/sysprep\--generalize\--a-windows-installation[Sysprep (Generalize) a Windows installation]
*   [Configuration pass of Windows Setup (generalize)](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/generalize)
*   [Configuration pass of Windows Setup (specialize)](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/specialize)