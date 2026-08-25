{%- set _mod_docs_content_type = "CONCEPT" %}
# About automatic IAM resource creation {id="considerations-regarding-auto-creation-mode_{{ context }}"}

The `auto` mode in the {{ rosa_cli_first }} immediately creates the required IAM resources using the current AWS account. The required resources include the account-wide IAM roles and policies, cluster-specific Operator roles and policies, and OpenID Connect (OIDC) identity provider. {._abstract}

Alternatively, you can use `manual` mode, which outputs the `aws` commands needed to create the IAM resources instead of deploying them automatically.