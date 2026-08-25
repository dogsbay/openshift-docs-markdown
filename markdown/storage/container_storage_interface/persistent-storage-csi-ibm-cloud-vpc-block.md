---
title: "{{ ibm_cloud_name }} VPC Block CSI Driver Operator"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ ibm_cloud_name }} VPC Block CSI Driver Operator {id="persistent-storage-csi-ibm-cloud-vpc-block_{{ context }}"}
{%- set context = "persistent-storage-csi-ibm-cloud-vpc-block" %}

You can provision and manage {{ ibm_cloud_name }} Virtual Private Cloud (VPC) Block Storage in {{ product_title }} using the {{ ibm_cloud_name }} VPC Block Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-ibm-vpc-block-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-byok.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [User-managed encryption for {{ ibm_cloud_title }}](/installing/installing_ibm_cloud/user-managed-encryption-ibm-cloud#user-managed-encryption-ibm-cloud)
*   [Preparing to install on {{ ibm_cloud_title }}](/installing/installing_ibm_cloud/preparing-to-install-on-ibm-cloud#prerequisites_preparing-to-install-on-ibm-cloud)
{% endif %}