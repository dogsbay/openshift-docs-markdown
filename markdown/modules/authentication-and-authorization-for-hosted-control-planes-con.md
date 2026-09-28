{%- set _mod_docs_content_type = "CONCEPT" %}
# Authentication and authorization for hosted control planes {id="authentication-and-authorization-for-hosted-control-planes-con_{{ context }}"}

A hosted control plane includes a built-in OAuth server that issues the access tokens used to authenticate to the API. After you create the hosted cluster, you can specify an identity provider for the OAuth server and use the Cloud Credential Operator to assign the IAM roles that cluster components need.