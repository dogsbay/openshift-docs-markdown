---
title: About the Cloud Credential Operator in manual mode with long-term credentials for components
---

# About the Cloud Credential Operator in manual mode with long-term credentials for components {#cco-mode-manual}

You can manage your cloud credentials instead of the Cloud Credential Operator (CCO) by setting the Operator to manual mode.

You can use manual mode with your {{ aws_first }}, global {{ azure_first }}, {{ azure_first }} Stack Hub, {{ gcp_first }}, {{ ibm_cloud_name }}, or Nutanix cluster.

To use manual mode, you must examine the `CredentialsRequest` CRs in the release image for the version of OpenShift Container Platform that you are running or installing, create corresponding credentials in the underlying cloud provider, and create Kubernetes Secrets in the correct namespaces to satisfy all `CredentialsRequest` CRs for the cluster’s cloud provider. Some platforms use the CCO utility (`ccoctl`) to facilitate this process during installation and updates.

Using manual mode with long-term credentials allows each cluster component to have only the permissions it requires, without storing an administrator-level credential in the cluster. This mode also does not require connectivity to services such as the AWS public IAM endpoint. However, you must manually reconcile permissions with new release images for every upgrade.

For information about configuring your cloud provider to use manual mode, see the manual credentials management options for your cloud provider.

> [!NOTE]
> An {{ aws_short }}, global {{ azure_short }}, or {{ gcp_short }} cluster that uses manual mode can be configured to use short-term credentials for different components. For more information, see "Manual mode with short-term credentials for components".

## Additional resources {#additional-resources_cco-mode-manual}

- [Manually creating long-term credentials for AWS](/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations)
- [Manually creating long-term credentials for Azure](/installing/installing_azure/ipi/installing-azure-customizations#manually-create-iam_installing-azure-customizations)
- [Manually creating long-term credentials for {{ gcp_short }}](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations)
- [Configuring IAM for {{ ibm_cloud_name }}](/installing/installing_ibm_cloud/configuring-iam-ibm-cloud#configuring-iam-ibm-cloud)
- [Configuring IAM for Nutanix](/installing/installing_nutanix/installing-nutanix-installer-provisioned#manually-create-iam-nutanix_installing-nutanix-installer-provisioned)
- [About the Cloud Credential Operator in manual mode with short-term credentials for components](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds)
- [Preparing to update a cluster with manually maintained credentials](/updating/preparing_for_updates/preparing-manual-creds-update#preparing-manual-creds-update)
