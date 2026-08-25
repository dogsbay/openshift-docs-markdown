{%- set _mod_docs_content_type = "CONCEPT" %}
# The IAM role for the AWS Load Balancer Controller {id="the-iam-role-albo-controller.adoc_{{ context }}"}

The `CredentialsRequest` object for the {{ aws_short }} Load Balancer Controller must be set with a manually provisioned Identity and Access Management (IAM) role. {._abstract}

You can create the IAM role by using the following options:

*   Using the Cloud Credential Operator utility (`ccoctl`) and a predefined `CredentialsRequest` object.
*   Using the {{ aws_short }} CLI and predefined {{ aws_short }} manifests.

If your environment does not support the `ccoctl` `command.ws-short` CLI, use the {{ aws_short }} CLI.