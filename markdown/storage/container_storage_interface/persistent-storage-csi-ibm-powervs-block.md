---
title: "{{ ibm_power_server_title }} Block CSI Driver Operator"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# {{ ibm_power_server_title }} Block CSI Driver Operator {id="persistent-storage-csi-ibm-powervs-block"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-ibm-powervs-block" %}

You can provision and manage {{ ibm_power_server_name }} Block storage in {{ product_title }} by using the Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-ibm-powervs-block-intro.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-ibm-powervs-block-overview.md" %}{% endleveloffset %}
<a name="persistent-storage-csi-ibm-powervs-block-overview_{{ context }}"></a>**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi) 

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}