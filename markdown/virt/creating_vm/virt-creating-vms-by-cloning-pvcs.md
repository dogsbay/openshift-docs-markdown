---
title: Creating VMs by cloning PVCs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating VMs by cloning PVCs {id="virt-creating-vms-by-cloning-pvcs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-creating-vms-by-cloning-pvcs" %}

You can create virtual machines (VMs) by cloning existing persistent volume claims (PVCs) with custom images.

You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red&#160;Hat.

You clone a PVC by creating a data volume that references a source PVC.

{% leveloffset +1 %}{% include "./modules/virt-about-cloning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-custom-image-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-by-cloning-pvcs-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-optimizing-clone-performance-at-scale-in-openshift-data-foundation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-cloning-pvc-to-dv-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-vm-cloned-pvc-data-volume-template.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Setting a default cloning strategy using a storage profile](/virt/storage/virt-configuring-storage-profile#virt-customizing-storage-profile-default-cloning-strategy_virt-configuring-storage-profile)
*   [Installing the QEMU guest agent](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)
*   [Volume cloning](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/latest/html/managing_and_allocating_storage_resources/volume-cloning_rhodf#volume-cloning_rhodf)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [CSI volume snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots)
{% endif %}