---
title: AWS Elastic Block Store CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# AWS Elastic Block Store CSI Driver Operator {id="persistent-storage-csi-ebs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-ebs" %}

You can provision and manage AWS Elastic Block Storage (EBS) in {{ product_title }} by using the AWS EBS Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning and eliminate the need to pre-provision storage.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-aws-ebs-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
*   [Creating the EBS storage class](/storage/persistent_storage/persistent-storage-aws#storage-create-storage-class_persistent-storage-aws)
*   [Dynamic provisioning](/storage/dynamic-provisioning#dynamic-provisioning)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-byok.md" %}{% endleveloffset %}

**Additional resources**

*   [Optional AWS configuration parameters](/installing/installing_aws/installation-config-parameters-aws#installation-configuration-parameters-optional-aws_installation-config-parameters-aws)
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-eusc.md" %}{% endleveloffset %}

**Additional resources**

*   [AWS EUSC region](/installing/installing_aws/installing-aws-account#installation-aws-eusc_region_installing-aws-account)
{% endif %}