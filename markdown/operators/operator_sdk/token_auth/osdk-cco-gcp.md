---
title: "CCO-based workflow for OLM-managed Operators with {{ gcp_wid_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# CCO-based workflow for OLM-managed Operators with {{ gcp_wid_short }} {id="osdk-cco-gcp"}

{%- set context = "osdk-cco-gcp" %}

When an {{ product_title }} cluster running on {{ gcp_first }} is in **{{ gcp_wid_short }} / Federated Identity** mode, it means the cluster is utilizing features of {{ gcp_first }} and {{ product_title }} to apply permissions in {{ gcp_wid_short }} at an application level.

The Cloud Credential Operator (CCO) is a cluster Operator installed by default in {{ product_title }} clusters running on cloud providers. Starting in {{ product_title }} 4.17, the CCO supports workflows for OLM-managed Operators with {{ gcp_wid_short }}.

For the purposes of {{ gcp_wid_short }}, the CCO provides the following functions:

*   Detects when it is running on an {{ gcp_wid_short }}-enabled cluster
*   Checks the `CredentialsRequest` object for the presence of fields that provide the required information for granting Operators access to {{ gcp_short }} resources

The CCO can semi-automate this process through an expanded use of `CredentialsRequest` objects, which can request the creation of `Secrets` that contain the information required for {{ gcp_wid_short }} workflows.


:::note

Subscriptions with automatic approvals for updates are not recommended because there might be permission changes to make before updating. Subscriptions with manual approvals for updates ensure that administrators have the opportunity to verify the permissions of the later version, take any necessary steps, and then update.

:::


As an Operator author preparing an Operator for use alongside the updated CCO in {{ product_title }} 4.17 and later, you should instruct users and add code to handle the divergence from earlier CCO versions, in addition to handling {{ gcp_wid_short }} token authentication (if your Operator is not already enabled). The recommended method is to provide a `CredentialsRequest` object with the correctly filled {{ gcp_wid_short }} fields and let the CCO create the `Secret` object for you.


:::important

If you plan to support {{ product_title }} clusters earlier than version 4.17, consider providing users with instructions on how to manually create a secret with the {{ gcp_wid_short }}-enabling information by using the CCO utility (`ccoctl`). Earlier CCO versions are unaware of {{ gcp_wid_short }} mode on the cluster and cannot create secrets for you.

Your code should check for secrets that never appear and warn users to follow the fallback instructions you have provided.

:::


To authenticate with {{ gcp_short }} using short-lived tokens via {{ gcp_wid_first }}, Operators must provide the following information:


`AUDIENCE`
:   Created in {{ gcp_short }} by the administrator when they set up {{ gcp_wid_short }}, the `AUDIENCE` value must be a preformatted URL in the following format:
    ```text
    //iam.googleapis.com/projects/<project_number>/locations/global/workloadIdentityPools/<pool_id>/providers/<provider_id>
    ```


`SERVICE_ACCOUNT_EMAIL`
:   The `SERVICE_ACCOUNT_EMAIL` value is a {{ gcp_short }} service account email that is impersonated during Operator operation, for example:
    ```text
    <service_account_name>@<project_id>.iam.gserviceaccount.com
    ```

The **Install Operator** page in the web console allows cluster administrators to provide this information at installation time. This information is then propagated to the `Subscription` object as environment variables on the Operator pod.

**Additional resources**

*   [OLM-managed Operator support for authentication with {{ gcp_wid_short }}](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds-gcp-olm_cco-short-term-creds)
*   [Installing from OperatorHub using the web console](/operators/admin/olm-adding-operators-to-cluster#olm-installing-from-software-catalog-using-web-console_olm-adding-operators-to-a-cluster)
*   [Installing from OperatorHub using the CLI](/operators/admin/olm-adding-operators-to-cluster#olm-installing-operator-from-software-catalog-using-cli_olm-adding-operators-to-a-cluster)

{% leveloffset +1 %}{% include "./modules/osdk-cco-gcp-enabling.md" %}{% endleveloffset %}