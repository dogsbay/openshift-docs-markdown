{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ gcp_short }} Workload Identity authentication process {id="cco-short-term-creds-auth-flow-gcp_{{ context }}"}

You should familiarize yourself with the {{ gcp_first }} Workload Identity authentication process. {._abstract}

Requests for new and refreshed credentials are automated by using an appropriately configured OpenID Connect (OIDC) identity provider combined with IAM service accounts. Service account tokens that are trusted by {{ gcp_short }} are signed by {{ product_title }} and can be projected into a pod and used for authentication. Tokens are refreshed after one hour.

The following diagram details the authentication flow between {{ gcp_short }} and the {{ product_title }} cluster when using {{ gcp_short }} Workload Identity.

**Figure 1. {{ gcp_short }} Workload Identity authentication flow**

![Detailed authentication flow between {{ gcp_short }} and the cluster when using {{ gcp_short }} Workload Identity](/_assets/images/347_OpenShift_credentials_with_STS_updates_0623_GCP.png)