{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ StorageClass }} storage class {id="storage-create-storage-class_{{ context }}"}

To enable dynamic provisioning of persistent volumes, create a storage class that defines storage characteristics and allows users to automatically provision volumes on-demand. {._abstract}

{% if Provisioner == "efs.csi.aws.com" %}
The AWS Elastic File System (EFS) Container Storage Interface (CSI) Driver Operator (a Red Hat operator), after being installed, does not create a storage class by default. However, you can manually create the AWS EFS storage class.
{% endif %}