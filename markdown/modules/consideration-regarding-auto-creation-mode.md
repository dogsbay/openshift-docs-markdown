{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatic IAM resource creation {id="considerations-regarding-auto-creation-mode_{{ context }}"}

The `auto` mode in the {{ rosa_cli_first }} immediately creates the required Identity and Access Management (IAM) resources in the current AWS account, including account-wide roles and policies, Operator roles and policies, and the OpenID Connect (OIDC) identity provider. {._abstract}

Alternatively, you can use `manual` mode, which outputs the `aws` commands needed to create the IAM resources instead of deploying them automatically.