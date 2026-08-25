---
title: Changing the cloud provider credentials configuration
---

# Changing the cloud provider credentials configuration {#changing-cloud-credentials-configuration}

You can change your cluster’s cloud provider credentials configuration to meet security and authentication requirements. You can rotate or remove credentials, or enable supported short-term credential methods.

For supported configurations, you can change how OpenShift Container Platform authenticates with your cloud provider.

To determine which cloud credentials strategy your cluster uses, see "Determining the Cloud Credential Operator mode".

## Rotating cloud provider service keys with the Cloud Credential Operator utility {#ccoctl-rotate-cloud-creds_changing-cloud-credentials-configuration}

Some organizations require the rotation of the service keys that authenticate the cluster. You can use the Cloud Credential Operator (CCO) utility (`ccoctl`) to update keys for clusters installed on the following cloud providers:

- {{ aws_first }} with {{ sts_first }}
- {{ gcp_first }} with {{ gcp_wid_short }}
- {{ azure_first }} with {{ entra_short }}
- {{ ibm_cloud_title }}

**Additional resources**

- [{{ aws_first }} with {{ sts_first }}](/post_installation_configuration/changing-cloud-credentials-configuration#rotating-bound-service-keys_key-rotation-aws)
- [{{ gcp_first }} with {{ gcp_wid_short }}](/post_installation_configuration/changing-cloud-credentials-configuration#rotating-bound-service-keys_key-rotation-gcp)
- [{{ azure_first }} with {{ entra_short }}](/post_installation_configuration/changing-cloud-credentials-configuration#rotating-bound-service-keys_key-rotation-azure)
- [{{ ibm_cloud_title }}](/post_installation_configuration/changing-cloud-credentials-configuration#refreshing-service-ids-ibm-cloud_changing-cloud-credentials-configuration)

**Additional resources**

- [The Cloud Credential Operator in mint mode](/authentication/managing_cloud_provider_credentials/cco-mode-mint#cco-mode-mint)
- [The Cloud Credential Operator in passthrough mode](/authentication/managing_cloud_provider_credentials/cco-mode-passthrough.html#cco-mode-passthrough)
- [vSphere CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere)
- [Cloud Credential Operator (CCO)](/operators/operator-reference#cloud-credential-operator_cluster-operators-ref)

**Additional resources**

- [The Cloud Credential Operator in mint mode](/authentication/managing_cloud_provider_credentials/cco-mode-mint#cco-mode-mint)
- [Cloud Credential Operator (CCO)](/operators/operator-reference#cloud-credential-operator_cluster-operators-ref)

**Additional resources**

- [Microsoft Entra Workload ID](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-azure_cco-short-term-creds)
- [Configuring an Azure cluster to use short-term credentials](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-with-short-term-creds_installing-azure-customizations)
- [AWS Security Token Service](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-aws_cco-short-term-creds)
- [Configuring an AWS cluster to use short-term credentials](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-with-short-term-creds_installing-aws-customizations)

## Additional resources {#additional-resources_changing-cloud-credentials-configuration}

- [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)
- [Determining the Cloud Credential Operator mode](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#cco-determine-mode_about-cloud-credential-operator)
