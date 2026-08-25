{%- set _mod_docs_content_type = "CONCEPT" %}
# Infrastructure requirements for an {{ aws_short }} account in a hosted cluster {id="hcp-managed-aws-infra-hc_{{ context }}"}

When your infrastructure is managed by {{ hcp }} in a hosted cluster {{ aws_first }} account, the infrastructure requirements differ depending on whether your clusters are public, private, or a combination. {._abstract}

For accounts with public clusters, the infrastructure requirements are as follows:

*   Node pools must have EC2 instances that have `Role` and `RolePolicy` defined.

For accounts with private clusters, the infrastructure requirements are as follows:

*   One private link endpoint for each availability zone
*   EC2 instances for node pools

For accounts with public and private clusters, the infrastructure requirements are as follows:

*   One private link endpoint for each availability zone
*   EC2 instances for node pools