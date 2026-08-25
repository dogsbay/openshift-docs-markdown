{%- set _mod_docs_content_type = "CONCEPT" %}
# The IAM role for the AWS Load Balancer Operator {id="the-iam-role-albo-operator_{{ context }}"}

To install the {{ aws_first }} Load Balancer Operator on a cluster by using {{ sts_short }}, configure an additional Identity and Access Management (IAM) role. {._abstract}

You can create the IAM role by using the following options:

*   Using the Cloud Credential Operator utility (`ccoctl`) and a predefined `CredentialsRequest` object.
*   Using the {{ aws_short }} CLI and predefined {{ aws_short }} manifests.

Use the {{ aws_short }} CLI if your environment does not support the `ccoctl` command.