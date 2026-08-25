---
title: AWS Elastic File Service CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# AWS Elastic File Service CSI Driver Operator {id="persistent-storage-csi-aws-efs"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "persistent-storage-csi-aws-efs" %}

You can provision and manage AWS Elastic File System (EFS) storage in {{ product_title }} by using the AWS EFS Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning and eliminate the need to pre-provision storage.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-efs-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{%- set FeatureName = "AWS EFS" %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-efs-csi-driver-operator-setup.md" %}{% endleveloffset %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-efs-sts.md" %}{% endleveloffset %}

{% endif %}

{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +2 %}{% include "./modules/sd-persistent-storage-csi-efs-sts.md" %}{% endleveloffset %}

{% endif %}

**Additional resources**

*   [Installing the AWS EFS CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-aws-efs#persistent-storage-csi-olm-operator-install_persistent-storage-csi-aws-efs)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Configuring the Cloud Credential Operator utility](/installing/installing_aws/ipi/installing-aws-customizations#cco-ccoctl-configuring_installing-aws-customizations)
{%- endif %}
*   [Installing the {{ FeatureName }} CSI Driver](/storage/container_storage_interface/persistent-storage-csi-aws-efs#persistent-storage-csi-efs-driver-install_persistent-storage-csi-aws-efs)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-olm-operator-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-efs-driver-install.md" %}{% endleveloffset %}

{%- set StorageClass = "AWS EFS" -%}
{%- set Provisioner = "efs.csi.aws.com" %}
{% leveloffset +1 %}{% include "./modules/storage-create-storage-class.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-create-storage-class-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/storage-create-storage-class-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [AWS EFS CSI Driver Operator](https://github.com/openshift/aws-efs-csi-driver-operator)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-efs-cross-account.md" %}{% endleveloffset %}

**Additional resources**

*   [Setting the output format in the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-output-format.html)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-efs-one-zone-intro.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-efs-one-zone-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-efs-one-zone-procedure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-dynamic-provisioning-aws-efs.md" %}{% endleveloffset %}

**Additional resources**

*   [AWS EFS CSI driver](https://github.com/openshift/aws-efs-csi-driver)
*   [Creating the AWS EFS storage class](/storage/container_storage_interface/persistent-storage-csi-aws-efs#storage-create-storage-class_persistent-storage-csi-aws-efs)

{%- set StorageClass = false %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-efs-static-pv.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-efs-security.md" %}{% endleveloffset %}

**Additional resources**

*   [Working with access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html)
*   [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-efs-metrics-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-efs-metrics-procedure-gui.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-efs-metrics-procedure-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-efs-troubleshooting.md" %}{% endleveloffset %}

{%- set FeatureName = "AWS EFS" %}
{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-olm-operator-uninstall.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)