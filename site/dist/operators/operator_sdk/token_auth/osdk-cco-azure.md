---
title: CCO-based workflow for OLM-managed Operators with Microsoft Entra Workload ID
---

# CCO-based workflow for OLM-managed Operators with Microsoft Entra Workload ID {#osdk-cco-azure}

When an OpenShift Container Platform cluster running on Azure is in **Workload Identity / Federated Identity** mode, it means the cluster is utilizing features of Azure and OpenShift Container Platform to apply *user-assigned managed identities* or *app registrations* in {{ entra_first }} at an application level.

The Cloud Credential Operator (CCO) is a cluster Operator installed by default in OpenShift Container Platform clusters running on cloud providers. Starting in OpenShift Container Platform 4.14.8, the CCO supports workflows for OLM-managed Operators with {{ entra_short }}.

For the purposes of {{ entra_short }}, the CCO provides the following functions:

- Detects when it is running on an {{ entra_short }}-enabled cluster
- Checks the `CredentialsRequest` object for the presence of fields that provide the required information for granting Operators access to Azure resources

The CCO can semi-automate this process through an expanded use of `CredentialsRequest` objects, which can request the creation of `Secrets` that contain the information required for {{ entra_short }} workflows.

> [!NOTE]
> Subscriptions with automatic approvals for updates are not recommended because there might be permission changes to make before updating. Subscriptions with manual approvals for updates ensure that administrators have the opportunity to verify the permissions of the later version, take any necessary steps, and then update.

As an Operator author preparing an Operator for use alongside the updated CCO in OpenShift Container Platform 4.14 and later, you should instruct users and add code to handle the divergence from earlier CCO versions, in addition to handling {{ entra_short }} token authentication (if your Operator is not already enabled). The recommended method is to provide a `CredentialsRequest` object with the correctly filled {{ entra_short }} fields and let the CCO create the `Secret` object for you.

> [!IMPORTANT]
> If you plan to support OpenShift Container Platform clusters earlier than version 4.14, consider providing users with instructions on how to manually create a secret with the {{ entra_short }}-enabling information by using the CCO utility (`ccoctl`). Earlier CCO versions are unaware of {{ entra_short }} mode on the cluster and cannot create secrets for you.
>
> Your code should check for secrets that never appear and warn users to follow the fallback instructions you have provided.

Authentication with {{ entra_short }} requires the following information:

- `azure_client_id`
- `azure_tenant_id`
- `azure_region`
- `azure_subscription_id`
- `azure_federated_token_file`

The **Install Operator** page in the web console allows cluster administrators to provide this information at installation time. This information is then propagated to the `Subscription` object as environment variables on the Operator pod.

**Additional resources**

- [OLM-managed Operator support for authentication with {{ entra_first }}](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-azure-olm_cco-short-term-creds)
- [Installing from OperatorHub using the web console](/operators/admin/olm-adding-operators-to-cluster#olm-installing-from-software-catalog-using-web-console_olm-adding-operators-to-a-cluster)
- [Installing from OperatorHub using the CLI](/operators/admin/olm-adding-operators-to-cluster#olm-installing-operator-from-software-catalog-using-cli_olm-adding-operators-to-a-cluster)
