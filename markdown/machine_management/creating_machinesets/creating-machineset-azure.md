---
title: "Creating a compute machine set on {{ azure_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating a compute machine set on {{ azure_short }} {id="creating-machineset-azure"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-machineset-azure" %}

You can create a different compute machine set to serve a specific purpose in your {{ product_title }} cluster on {{ azure_first }}. For example, you might create infrastructure machine sets and related machines so that you can move supporting workloads to the new machines.

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-azure.md" %}{% endleveloffset %}

**Additional resources**

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-label-gpu-autoscaler.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster autoscaler resource definition](/machine_management/applying-autoscaling#cluster-autoscaler-cr_applying-autoscaling)

{% leveloffset +1 %}{% include "./modules/installation-azure-marketplace-subscribe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-boot-diagnostics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-non-guaranteed-instance.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-creating-non-guaranteed-instances.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-ephemeral-os.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-creating-azure-ephemeral-os.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-ultra-disk.md" %}{% endleveloffset %}

**Additional resources**

*   [Ultra disks ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#ultra-disks)
*   [Machine sets that deploy machines on ultra disks using CSI PVCs](/storage/container_storage_interface/persistent-storage-csi-azure#machineset-azure-ultra-disk_persistent-storage-csi-azure)
*   [Machine sets that deploy machines on ultra disks using in-tree PVCs](/storage/persistent_storage/persistent-storage-azure#machineset-azure-ultra-disk_persistent-storage-azure)

{% leveloffset +2 %}{% include "./modules/machineset-creating-azure-ultra-disk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-troubleshooting-azure-ultra-disk.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-customer-managed-encryption-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-trusted-launch.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-confidential-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-accelerated-networking.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-azure-enabling-accelerated-networking-existing.md" %}{% endleveloffset %}

**Additional resources**

*   [Enabling Accelerated Networking during installation](/installing/installing_azure/ipi/installing-azure-customizations#machineset-azure-enabling-accelerated-networking-new-install_installing-azure-customizations)

{% leveloffset +1 %}{% include "./modules/machineset-capacity-reservation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nvidia-gpu-azure-adding-a-gpu-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nvidia-gpu-aws-deploying-the-node-feature-discovery-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Manually scaling a compute machine set](/machine_management/manually-scaling-machineset#manually-scaling-machineset)