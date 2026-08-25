{%- set _mod_docs_content_type = "CONCEPT" %}
# Short-term authentication for workloads {id="pod-short-term-auth-workflow_{{ context }}"}

To use short-term authentication in your applications, you must configure access in your cloud provider, create an {{ product_title }} service account, and deploy workloads that use this authentication method. {._abstract}

1.  Create a federated identity service account in the Identity and Access Management (IAM) settings for your cloud provider.
1.  Create an {{ product_title }} service account that can impersonate a service account for your cloud provider.
1.  Configure any workloads related to your application to use the {{ product_title }} service account.