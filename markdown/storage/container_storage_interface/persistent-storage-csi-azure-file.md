---
title: Azure File CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}

{% include "./_attributes/common-attributes.md" %}
# Azure File CSI Driver Operator {id="persistent-storage-csi-azure-file"}
{%- set context = "persistent-storage-csi-azure-file" %}

You can provision and manage Azure File storage in {{ product_title }} by using the Azure File Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning and eliminate the need to pre-provision storage. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-azure-file-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
*   [Supported CSI drivers and features](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi-drivers-supported_persistent-storage-csi)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-azure-file-nfs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-azure-file-cross-sub-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-azure-file-cross-sub-dynamic-provisioning-procedure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-azure-file-cross-sub-dynamic-pre-provisioning-pv-pvc-procedure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-azure-file-static-provisioning-procedure.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Persistent storage using Azure File](/storage/persistent_storage/persistent-storage-azure-file#persistent-storage-using-azure-file)
*   [Access modes](/storage/understanding-persistent-storage#pv-access-modes_understanding-persistent-storage)