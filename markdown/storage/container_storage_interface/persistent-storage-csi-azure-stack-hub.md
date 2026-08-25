---
title: Azure Stack Hub CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Azure Stack Hub CSI Driver Operator {id="persistent-storage-csi-azure-stack-hub"}
{%- set context = "persistent-storage-csi-azure-stack-hub" %}

You can provision and manage Azure Stack Hub Storage in {{ product_title }} by using the Azure Stack Hub Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning and eliminate the need to pre-provision storage. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-azure-stack-hub-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

## Additional resources {id="persistent-storage-csi-azure-stack-hub-add-resources_{{ context }}" ._additional-resources}
*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)