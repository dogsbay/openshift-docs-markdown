---
title: CIFS/SMB CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# CIFS/SMB CSI Driver Operator {id="persistent-storage-csi-smb-cifs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-smb-cifs" %}

You can provision and manage Common Internet File System (CIFS)/Server Message Block (SMB) network shares in {{ product_title }} by using the CIFS/SMB Container Storage Interface (CSI) Driver Operator, which supports dynamic volume provisioning.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-smb-cifs-overview.md" %}{% endleveloffset %}
**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Dynamic provisioning](/storage/container_storage_interface/persistent-storage-csi-smb-cifs#persistent-storage-csi-smb-cifs-provision-dynamic_persistent-storage-csi-smb-cifs)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-smb-cifs-limits.md" %}{% endleveloffset %}

{%- set FeatureName = "CIFS/SMB" %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-olm-operator-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-smb-cifs-operator-install-driver.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-smb-cifs-provision-dynamic.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-smb-cifs-provision-static.md" %}{% endleveloffset %}