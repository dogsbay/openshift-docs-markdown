{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a federated {{ gcp_short }} service account {id="pod-short-term-auth-gcp-cloud-sa_{{ context }}"}

You can use the {{ gcp_full }} console to create a workload identity pool and provider and allow an {{ product_title }} service account to impersonate a {{ gcp_short }} service account. {._abstract}

**Prerequisites**

*   Your {{ gcp_short }} cluster uses {{ gcp_wid_short }}.
*   You have access to the {{ gcp_full }} console as a user with privileges to manage Identity and Access Management (IAM) and workload identity configurations.
*   You have created a {{ gcp_full }} project to use with your application.

**Procedure**

1.  In the IAM configuration for your {{ gcp_full }} project, identify the identity pool and provider that the cluster uses for {{ gcp_wid_short }} authentication.
1.  Grant permission for external identities to impersonate a {{ gcp_short }} service account. 
With these permissions, an {{ product_title }} service account can work as a federated workload identity.

    For more information, see {{ gcp_short }} documentation about [allowing your external workload to access {{ gcp_full }} resources](https://cloud.google.com/iam/docs/workload-identity-federation-with-other-clouds#service-account-impersonation).