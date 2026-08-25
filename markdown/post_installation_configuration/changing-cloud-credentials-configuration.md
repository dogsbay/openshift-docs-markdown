---
title: Changing the cloud provider credentials configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "changing-cloud-credentials-configuration" %}
{% include "./_attributes/common-attributes.md" %}
# Changing the cloud provider credentials configuration {id="changing-cloud-credentials-configuration"}

You can change your cluster’s cloud provider credentials configuration to meet security and authentication requirements. You can rotate or remove credentials, or enable supported short-term credential methods. {._abstract}

For supported configurations, you can change how {{ product_title }} authenticates with your cloud provider.

To determine which cloud credentials strategy your cluster uses, see "Determining the Cloud Credential Operator mode".

## Rotating cloud provider service keys with the Cloud Credential Operator utility {id="ccoctl-rotate-cloud-creds_{{ context }}"}

Some organizations require the rotation of the service keys that authenticate the cluster.
You can use the Cloud Credential Operator (CCO) utility (`ccoctl`) to update keys for clusters installed on the following cloud providers:

*   {{ aws_first }} with {{ sts_first }}
*   {{ gcp_first }} with {{ gcp_wid_short }}
*   {{ azure_first }} with {{ entra_short }}
*   {{ ibm_cloud_title }}

{%- set context = "key-rotation-aws" %}
{% leveloffset +2 %}{% include "./modules/rotating-bound-service-keys.md" %}{% endleveloffset %}

{%- set context = "key-rotation-gcp" %}
{% leveloffset +2 %}{% include "./modules/rotating-bound-service-keys.md" %}{% endleveloffset %}

{%- set context = "key-rotation-azure" %}
{% leveloffset +2 %}{% include "./modules/rotating-bound-service-keys.md" %}{% endleveloffset %}

{%- set context = "changing-cloud-credentials-configuration" %}

{% leveloffset +2 %}{% include "./modules/refreshing-service-ids-ibm-cloud.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ aws_first }} with {{ sts_first }}](/post_installation_configuration/changing-cloud-credentials-configuration#rotating-bound-service-keys_key-rotation-aws)
*   [{{ gcp_first }} with {{ gcp_wid_short }}](/post_installation_configuration/changing-cloud-credentials-configuration#rotating-bound-service-keys_key-rotation-gcp)
*   [{{ azure_first }} with {{ entra_short }}](/post_installation_configuration/changing-cloud-credentials-configuration#rotating-bound-service-keys_key-rotation-azure)
*   [{{ ibm_cloud_title }}](/post_installation_configuration/changing-cloud-credentials-configuration#refreshing-service-ids-ibm-cloud_changing-cloud-credentials-configuration)

{% leveloffset +1 %}{% include "./modules/post-install-rotating-cloud-provider-credentials.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-rotating-cloud-creds.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [The Cloud Credential Operator in mint mode](/authentication/managing_cloud_provider_credentials/cco-mode-mint#cco-mode-mint)
*   [The Cloud Credential Operator in passthrough mode](/authentication/managing_cloud_provider_credentials/cco-mode-passthrough#cco-mode-passthrough)
*   [vSphere CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere)
*   [Cloud Credential Operator (CCO)](/operators/operator-reference#cloud-credential-operator_cluster-operators-ref)

{% leveloffset +1 %}{% include "./modules/post-install-removing-cloud-provider-credentials.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-removing-cloud-creds.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [The Cloud Credential Operator in mint mode](/authentication/managing_cloud_provider_credentials/cco-mode-mint#cco-mode-mint)
*   [Cloud Credential Operator (CCO)](/operators/operator-reference#cloud-credential-operator_cluster-operators-ref)

{% leveloffset +1 %}{% include "./modules/post-install-enabling-token-based-authentication.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/enabling-entra-workload-id-existing-cluster.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/enabling-aws-sts-existing-cluster.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Microsoft Entra Workload ID](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-azure_cco-short-term-creds)
*   [Configuring an Azure cluster to use short-term credentials](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-with-short-term-creds_installing-azure-customizations)
*   [AWS Security Token Service](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-aws_cco-short-term-creds)
*   [Configuring an AWS cluster to use short-term credentials](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-with-short-term-creds_installing-aws-customizations)

{% leveloffset +2 %}{% include "./modules/cco-ccoctl-install-verifying.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)
*   [Determining the Cloud Credential Operator mode](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#cco-determine-mode_about-cloud-credential-operator)