---
title: Persistent storage using Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Persistent storage using Azure {id="persistent-storage-using-azure"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-azure" %}

{{ product_title }} supports Microsoft Azure Disk volumes. You can provision your {{ product_title }} cluster with persistent storage by using Azure. Some familiarity with Kubernetes and Azure is assumed.

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure. Azure Disk volumes can be provisioned dynamically. Persistent volumes are not bound to a single project or namespace; they can be shared across the {{ product_title }} cluster. Persistent volume claims are specific to a project or namespace and can be requested by users.


:::important

{{ product_title }} 4.11 and later provides automatic migration for the Azure Disk in-tree volume plugin to its equivalent CSI driver.

CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes. For more information about migration, see CSI automatic migration.

:::



:::important

High availability of storage in the infrastructure is left to the underlying storage provider.

:::


**Additional resources**

*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
*   [Microsoft Azure Disk](https://azure.microsoft.com/en-us/services/storage/disks)

{% leveloffset +1 %}{% include "./modules/storage-azure-create-storage-class.md" %}{% endleveloffset %}

**Additional resources**

*   [Azure Disk Storage Class](https://kubernetes.io/docs/concepts/storage/storage-classes/#new-azure-disk-storage-class-starting-from-v1-7-2)

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-creating-volume-claim.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/storage-persistent-storage-azure-volume-format.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-ultra-disk.md" %}{% endleveloffset %}

**Additional resources**

*   [Microsoft Azure ultra disks documentation](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#ultra-disks)
*   [Machine sets that deploy machines on ultra disks using CSI PVCs](/storage/container_storage_interface/persistent-storage-csi-azure#machineset-azure-ultra-disk_persistent-storage-csi-azure)
*   [Machine sets that deploy machines on ultra disks as data disks](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-ultra-disk_creating-machineset-azure)

{% leveloffset +2 %}{% include "./modules/machineset-creating-azure-ultra-disk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-troubleshooting-azure-ultra-disk.md" %}{% endleveloffset %}