---
title: Preparing to update a cluster with manually maintained credentials
---

# Preparing to update a cluster with manually maintained credentials {#preparing-manual-creds-update}

Before you update a cluster that uses manually maintained credentials, accommodate any new or changed cloud provider credentials in the target release. This preparation ensures the Cloud Credential Operator (CCO) does not block the upgrade.

The CCO `Upgradeable` status for a cluster with manually maintained credentials is `False` by default.

- For minor releases, for example, from 4.12 to 4.13, this status prevents you from updating until you have addressed any updated permissions and annotated the `CloudCredential` resource to indicate that the permissions are updated as needed for the next version. This annotation changes the `Upgradeable` status to `True`.
- For z-stream releases, for example, from 4.13.0 to 4.13.1, no permissions are added or changed, so the update is not blocked.

**Additional resources**

- [Determining the Cloud Credential Operator mode by using the web console](/updating/preparing_for_updates/preparing-manual-creds-update#cco-determine-mode-gui_preparing-manual-creds-update)
- [Determining the Cloud Credential Operator mode by using the CLI](/updating/preparing_for_updates/preparing-manual-creds-update#cco-determine-mode-cli_preparing-manual-creds-update)
- [Extracting and preparing credentials request resources](/updating/preparing_for_updates/preparing-manual-creds-update#cco-ccoctl-upgrading-extracting_preparing-manual-creds-update)
- [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)

**Additional resources**

- [Extracting and preparing credentials request resources](/updating/preparing_for_updates/preparing-manual-creds-update#cco-ccoctl-upgrading-extracting_preparing-manual-creds-update)

**Additional resources**

- [Extracting and preparing credentials request resources](/updating/preparing_for_updates/preparing-manual-creds-update#cco-ccoctl-upgrading-extracting_preparing-manual-creds-update)

**Additional resources**

- [Configuring the Cloud Credential Operator utility for a cluster update](/updating/preparing_for_updates/preparing-manual-creds-update#cco-ccoctl-configuring_preparing-manual-creds-update)
- [Manually updating cloud provider resources](/updating/preparing_for_updates/preparing-manual-creds-update#manually-maintained-credentials-upgrade_preparing-manual-creds-update)

**Additional resources**

- [Indicating that the cluster is ready to upgrade](/updating/preparing_for_updates/preparing-manual-creds-update#cco-manual-upgrade-annotation_preparing-manual-creds-update)

**Additional resources**

- [Manually creating long-term credentials for AWS](/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations)
- [Manually creating long-term credentials for Azure](/installing/installing_azure/ipi/installing-azure-customizations#manually-create-iam_installing-azure-customizations)
- [Manually creating long-term credentials for Azure Stack Hub](/installing/installing_azure_stack_hub/ipi/installing-azure-stack-hub-default#manually-create-iam_installing-azure-stack-hub-default)
- [Manually creating long-term credentials for {{ gcp_short }}](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations)
- [Indicating that the cluster is ready to upgrade](/updating/preparing_for_updates/preparing-manual-creds-update#cco-manual-upgrade-annotation_preparing-manual-creds-update)
