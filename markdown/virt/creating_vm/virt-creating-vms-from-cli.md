---
title: Creating virtual machines by using the CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating virtual machines by using the CLI {id="virt-creating-vms-from-cli"}
{%- set context = "virt-creating-vms-cli" %}

You can create virtual machines (VMs) from the command line by editing or creating a `VirtualMachine` manifest. You can also create a VM from an operating system image that you import, upload, build into a container disk, or clone from an existing persistent volume claim (PVC). {._abstract}


:::note

You can also create VMs from instance types by using the {{ product_title }} web console.

:::



:::important

You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red&#160;Hat.

:::


{% leveloffset +1 %}{% include "./modules/virt-creating-vm-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-web-page-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-generalizing-linux-vm-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-windows-vm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-generalizing-windows-sysprep.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-specializing-windows-sysprep.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-uploading-image-virtctl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-preparing-container-disk-for-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-disabling-tls-for-registry.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-container-disk-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-cloning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-by-cloning-pvcs-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-optimizing-clone-performance-at-scale-in-openshift-data-foundation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-cloning-pvc-to-dv-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-vm-cloned-pvc-data-volume-template.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-supported-custom-video-devices.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
{%- if not openshift_dedicated %}
*   [SSH access for virtual machines](/virt/managing_vms/ssh/virt-accessing-vm-ssh#virt-accessing-vm-ssh)
{%- endif %}
*   [Instance types](/virt/creating_vm/virt-creating-vms-from-instance-types#virt-creating-vms-from-instance-types)
*   [Installing the QEMU guest agent](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)
*   [Installing VirtIO drivers on Windows VMs](/virt/managing_vms/virt-install-virtio-drivers-on-windows-vms#virt-install-virtio-drivers-on-windows-vms)
*   [Red&#160;Hat VirtIO drivers download page](https://access.redhat.com/downloads/content/479/virtio-win/noarch/package-latest)
*   [How to check virtio-win drivers version on Windows guest](https://access.redhat.com/solutions/764103)
*   [Installing and updating VirtIO drivers for Windows virtual machines](https://access.redhat.com/solutions/6957701)
*   link:https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/sysprep\--generalize\--a-windows-installation[Sysprep (Generalize) a Windows installation]
*   [Configuration pass of Windows Setup (generalize)](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/generalize)
*   [Configuration pass of Windows Setup (specialize)](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/specialize)
*   [Cloning a VM by using the web console](/virt/creating_vm/virt-creating-vms-web#virt-cloning-vm-wizard-web_virt-creating-vms-web)
*   [Managing automatic boot source updates](/virt/storage/virt-automatic-bootsource-updates#virt-automatic-bootsource-updates)
*   [Setting a default cloning strategy using a storage profile](/virt/storage/virt-configuring-storage-profile#virt-customizing-storage-profile-default-cloning-strategy_virt-configuring-storage-profile)
*   [Volume cloning](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/latest/html/managing_and_allocating_storage_resources/volume-cloning_rhodf#volume-cloning_rhodf)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Pruning objects to reclaim resources](/applications/pruning-objects#pruning-deployments_pruning-objects)
*   [Configuring garbage collection for containers and images](/nodes/nodes/nodes-nodes-garbage-collection#nodes-nodes-garbage-collection-configuring_nodes-nodes-configuring)
*   [CSI volume snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots)
{%- endif %}