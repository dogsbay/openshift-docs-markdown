---
title: About the Cloud Credential Operator in manual mode with short-term credentials for components
---

# About the Cloud Credential Operator in manual mode with short-term credentials for components {#cco-short-term-creds}

During installation, you can configure the Cloud Credential Operator (CCO) to operate in manual mode and use the CCO utility (`ccoctl`) to implement short-term security credentials for individual components that are created and managed outside the OpenShift Container Platform cluster.

> [!NOTE]
> This credentials strategy is supported for {{ aws_first }}, {{ gcp_first }}, and global {{ azure_full }} only.
>
> For {{ aws_short }} and {{ gcp_short }} clusters, you must configure your cluster to use this strategy during installation of a new OpenShift Container Platform cluster. You cannot configure an existing {{ aws_short }} or {{ gcp_short }} cluster that uses a different credentials strategy to use this feature.
>
> If you did not configure your {{ azure_short }} cluster to use {{ entra_first }} during installation, you can enable this authentication method on an existing cluster. For information, see "Enabling token-based authentication".

Cloud providers use different terms for their implementation of this authentication method.

**Short-term credentials provider terminology**

| Cloud provider | Provider nomenclature |
| --- | --- |
| {{ aws_first }} | {{ aws_short }} {{ sts_first }} |
| {{ gcp_first }} | {{ gcp_wid_short }} |
| Global Microsoft Azure | {{ entra_first }} |

**Additional resources**

- [Configuring an {{ aws_short }} cluster to use short-term credentials](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-with-short-term-creds_installing-aws-customizations)

**Additional resources**

- [CCO-based workflow for OLM-managed Operators with {{ aws_short }} {{ sts_short }}](/operators/operator_sdk/token_auth/osdk-cco-aws-sts#osdk-cco-aws-sts)

**Additional resources**

- [Configuring a {{ gcp_short }} cluster to use short-term credentials](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-with-short-term-creds_installing-gcp-customizations)

**Additional resources**

- [CCO-based workflow for OLM-managed Operators with {{ gcp_wid_first }}](/operators/operator_sdk/token_auth/osdk-cco-gcp#osdk-cco-gcp)

**Additional resources**

- [Configuring {{ gcp_wid_short }} authentication for applications on {{ gcp_short }}](/nodes/pods/nodes-pods-short-term-auth#nodes-pods-short-term-auth-configuring-gcp_nodes-pods-short-term-auth)

**Additional resources**

- [Configuring a global {{ azure_first }} cluster to use short-term credentials](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-with-short-term-creds_installing-azure-customizations)

**Additional resources**

- [CCO-based workflow for OLM-managed Operators with {{ entra_first }}](/operators/operator_sdk/token_auth/osdk-cco-azure#osdk-cco-azure)

## Additional resources {#additional-resources_cco-short-term-creds}

- [Enabling token-based authentication](/post_installation_configuration/changing-cloud-credentials-configuration#post-install-enable-token-auth_changing-cloud-credentials-configuration)
- [Configuring an {{ aws_short }} cluster to use short-term credentials](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-with-short-term-creds_installing-aws-customizations)
- [Configuring a {{ gcp_short }} cluster to use short-term credentials](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-with-short-term-creds_installing-gcp-customizations)
- [Configuring a global {{ azure_first }} cluster to use short-term credentials](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-with-short-term-creds_installing-azure-customizations)
- [Preparing to update a cluster with manually maintained credentials](/updating/preparing_for_updates/preparing-manual-creds-update#preparing-manual-creds-update)
