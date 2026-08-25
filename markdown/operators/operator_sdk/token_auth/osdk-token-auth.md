---
title: Token authentication for Operators on cloud providers
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Token authentication for Operators on cloud providers {id="osdk-token-auth"}
{%- set context = "osdk-token-auth" %}

Many cloud providers can enable authentication by using account tokens that provide short-term, limited-privilege security credentials. {._abstract}

{{ product_title }} includes the Cloud Credential Operator (CCO) to manage cloud provider credentials as custom resource definitions (CRDs). The CCO syncs on `CredentialsRequest` custom resources (CRs) to allow {{ product_title }} components to request cloud provider credentials with any specific permissions required.

Previously, on clusters where the CCO is in _manual mode_, Operators managed by Operator Lifecycle Manager (OLM) often provided detailed instructions in the OperatorHub for how users could manually provision any required cloud credentials.

Starting in {{ product_title }} 4.14, the CCO can detect when it is running on clusters enabled to use short-term credentials on certain cloud providers. It can then semi-automate provisioning certain credentials, provided that the Operator author has enabled their Operator to support the updated CCO.

**Additional resources**
{._additional-resources}

*   [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)
*   [CCO-based workflow for OLM-managed Operators with AWS STS](/operators/operator_sdk/token_auth/osdk-cco-aws-sts#osdk-cco-aws-sts)
*   [CCO-based workflow for OLM-managed Operators with {{ entra_first }}](/operators/operator_sdk/token_auth/osdk-cco-azure#osdk-cco-azure)
*   [CCO-based workflow for OLM-managed Operators with {{ gcp_wid_short }}](/operators/operator_sdk/token_auth/osdk-cco-gcp#osdk-cco-gcp)