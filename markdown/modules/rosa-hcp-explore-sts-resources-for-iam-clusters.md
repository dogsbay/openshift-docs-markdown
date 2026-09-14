{%- set _mod_docs_content_type = "CONCEPT" %}
# Explore STS resources for IAM clusters {id="rosa-hcp-explore-sts-resources-for-iam-clusters_{{ context }}"}

{{ hcp_title_first }} uses the AWS Security Token Service (STS) to provide temporary, limited-permission credentials for your cluster. Before deploying your cluster, you must create specific account-wide IAM roles and policies, cluster-specific Operator IAM roles, and an OpenID Connect (OIDC) provider.