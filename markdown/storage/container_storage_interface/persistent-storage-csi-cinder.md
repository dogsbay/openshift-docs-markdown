---
title: OpenStack Cinder CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OpenStack Cinder CSI Driver Operator {id="persistent-storage-csi-cinder"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-cinder" %}

You can provision and manage OpenStack Cinder storage in {{ product_title }} using the OpenStack Cinder Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-cinder-overview.md" %}{% endleveloffset %}
**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-cinder-storage-class.md" %}{% endleveloffset %}