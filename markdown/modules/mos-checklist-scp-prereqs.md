{%- set _mod_docs_content_type = "CONCEPT" %}
# Service Control Policy (SCP) prerequisites {id="mos-checklist-scp-prereqs_{{ context }}"}

{{ product_title }} clusters are hosted in an AWS account within an AWS organizational unit. A [service control policy (SCP)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) is created and applied to the AWS organizational unit that manages what services the AWS sub-accounts are permitted to access. {._abstract}

*   Ensure that your organization’s SCPs are not more restrictive than the roles and policies required by the cluster.
*   When you create a {{ product_title }} cluster, an associated AWS OpenID Connect (OIDC) identity provider is created.