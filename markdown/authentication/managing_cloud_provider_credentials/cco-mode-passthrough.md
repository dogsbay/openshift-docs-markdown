---
title: About the Cloud Credential Operator in passthrough mode
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About the Cloud Credential Operator in passthrough mode {id="cco-mode-passthrough"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cco-mode-passthrough" %}

To allow the Cloud Credential Operator (CCO) to pass cloud credentials to the components that request them, you can configure the Cloud Credential Operator (CCO) to operate in passthrough mode.

The credential must have permissions to perform the installation and complete the operations that are required by components in the cluster, but does not need to be able to create new credentials. The CCO does not attempt to create additional limited-scoped credentials in passthrough mode.

Passthrough mode is supported for {{ aws_first }}, {{ azure_first }}, {{ gcp_first }}, {{ rh_openstack_first }}, and {{ vmw_first }}.


:::note

Manual mode is the only supported CCO configuration for Microsoft Azure Stack Hub.

:::


{% leveloffset +1 %}{% include "./modules/cco-passthrough-mode-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/admin-credentials-root-secret-formats.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-rotating-cloud-creds.md" %}{% endleveloffset %}

**Additional resources**

*   [vSphere CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere)

{% leveloffset +2 %}{% include "./modules/cco-passthrough-mode-permissions-reduce.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Manually creating long-term credentials for AWS](/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations)
*   [Manually creating long-term credentials for Azure](/installing/installing_azure/ipi/installing-azure-customizations#manually-create-iam_installing-azure-customizations)
*   [Manually creating long-term credentials for {{ gcp_short }}](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations)