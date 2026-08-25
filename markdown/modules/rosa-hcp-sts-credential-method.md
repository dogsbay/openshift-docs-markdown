{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS STS credential method {id="rosa-hcp-sts-credential-method_{{ context }}"}

As part of {{ product_title }}, Red&#160;Hat requires the necessary permissions to manage infrastructure resources in your AWS account.
{{ product_title }} IAM STS policies grant the cluster’s automation software limited, short-term access to resources in your AWS account. {._abstract}

The STS method uses predefined roles and policies to grant temporary, least-privilege permissions to IAM roles. The credentials typically expire an hour after being requested. Once expired, they are no longer recognized by AWS and no longer have account access to make API requests with them.

AWS IAM STS roles must be created for each {{ product_title }} cluster. Use the {{ rosa_cli_first }} to manage the STS roles and attach the required AWS-managed policies to each role. The CLI provides the commands and files to create the roles, attach the AWS-managed policies, and an option to allow the CLI to automatically create the roles and attach the policies. Alternatively, the {{ rosa_cli }} can also provide you with the content to prepare the roles and attach the AWS-managed policies required for {{ product_title }}.