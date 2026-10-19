{%- set _mod_docs_content_type = "CONCEPT" %}
# Delete your cluster {id="rosa-hcp-delete-your-cluster_{{ context }}"}

Delete a {{ product_title }} cluster by using either {{ cluster_manager_first }} or the {{ rosa_cli_first }}, then clean up the AWS Identity and Access Management (IAM) resources the cluster used. {._abstract}

Cleaning up IAM roles, policies, and OpenID Connect (OIDC) configuration after deletion prevents orphaned resources that can accrue cost or create security risk.