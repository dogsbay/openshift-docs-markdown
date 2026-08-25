---
title: OpenStack Manila CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OpenStack Manila CSI Driver Operator {id="persistent-storage-csi-manila"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-manila" %}

You can provision and manage OpenStack Manila storage in {{ product_title }} using the OpenStack Manila Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-manila-overview.md" %}{% endleveloffset %}
**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-manila-limitations.md" %}{% endleveloffset %}
**Additional resources**

*   [CephFS NFS Manila-CSI Workload Recommendations for Red Hat OpenStack Platform](https://access.redhat.com/articles/6667651)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-manila-dynamic-provisioning-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-manila-dynamic-provisioning-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-manila-dynamic-provisioning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-manila-share-access-rules.md" %}{% endleveloffset %}