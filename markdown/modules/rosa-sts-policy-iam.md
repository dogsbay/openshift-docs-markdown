{%- set _mod_docs_content_type = "REFERENCE" %}
# Red&#160;Hat managed IAM references for AWS {id="rosa-sts-policy-iam_{{ context }}"}

{%- if not openshift_rosa_hcp %}
When you use Security Token Service (STS) as your cluster credential method,
{%- endif %}
Red&#160;Hat is not responsible for creating and managing Amazon Web Services (AWS) identity and access management (IAM) policies, IAM users, or IAM roles. For information on creating these roles and policies, see the following sections on IAM roles. {._abstract}

*   To use the `ocm` CLI, you must have an `ocm-role` and `user-role` resource.