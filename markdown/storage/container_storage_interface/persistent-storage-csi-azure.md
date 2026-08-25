---
title: Azure Disk CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Azure Disk CSI Driver Operator {id="persistent-storage-csi-azure-disk"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-azure" %}

You can provision and manage Azure Disk storage in {{ product_title }} by using the Azure Disk Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning and eliminate the need to pre-provision storage.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-azure-disk-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-azure-disk-sc-zrs.md" %}{% endleveloffset %}

**Additional resources**

*   [SKU Types](https://learn.microsoft.com/en-us/rest/api/storagerp/srp_sku_types)
*   [ZRS limitations](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-deploy-zrs?tabs=portal#limitations)
*   [Premium_LRS limitations](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-deploy-premium-v2?tabs=azure-cli#limitations)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-azure-disk-perf-plus.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-azure-disk-perf-plus-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Scalability and performance targets for VM disks](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-scalability-targets)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-azure-disk-perf-plus-limits.md" %}{% endleveloffset %}

**Additional resources**

*   [Enabling performance plus by snapshot or cloning](/storage/container_storage_interface/persistent-storage-csi-azure#persistent-storage-csi-azure-disk-perf-plus-create-new-disk-by-snapshot-clone_persistent-storage-csi-azure)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-azure-disk-perf-plus-sc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-azure-disk-perf-plus-create-new-disk-by-snapshot-clone.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a storage class to use performance plus enhanced disks](/storage/container_storage_interface/persistent-storage-csi-azure#persistent-storage-csi-azure-disk-perf-plus-sc_persistent-storage-csi-azure)

{% if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-byok.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing an Azure Disk Encryption Set](/installing/installing_azure/ipi/installing-azure-preparing-ipi#preparing-disk-encryption-sets_installing-azure-preparing-ipi)
{% endif %}

{% leveloffset +1 %}{% include "./modules/machineset-azure-ultra-disk.md" %}{% endleveloffset %}

**Additional resources**

*   [Microsoft Azure ultra disks documentation](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#ultra-disks)
*   [Machine sets that deploy machines on ultra disks using in-tree PVCs](/storage/persistent_storage/persistent-storage-azure#machineset-azure-ultra-disk_persistent-storage-azure)
*   [Machine sets that deploy machines on ultra disks as data disks](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-ultra-disk_creating-machineset-azure)

{% leveloffset +2 %}{% include "./modules/machineset-creating-azure-ultra-disk.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-troubleshooting-azure-ultra-disk.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_persistent-storage-csi-azure_{{ context }}"}
*   [Persistent storage using Azure Disk](/storage/persistent_storage/persistent-storage-azure#persistent-storage-using-azure)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Microsoft Azure storage documentation](https://learn.microsoft.com/en-us/azure/?product=storage)