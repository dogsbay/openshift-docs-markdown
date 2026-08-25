{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the {{ FeatureName }} CSI Driver Operator {id="persistent-storage-efs-csi-driver-operator-setup_{{ context }}"}

To enable AWS Elastic File System (EFS) storage in your cluster, complete the setup process by obtaining necessary credentials, installing the operator, and installing the driver. {._abstract}

**Procedure**

1.  If you are using {{ FeatureName }} with AWS Secure Token Service (STS), obtain a role Amazon Resource Name (ARN) for STS. This is required for installing the {{ FeatureName }} CSI Driver Operator.
1.  Install the {{ FeatureName }} CSI Driver Operator.
1.  Install the {{ FeatureName }} CSI Driver.