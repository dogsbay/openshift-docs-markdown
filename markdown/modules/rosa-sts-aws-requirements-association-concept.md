{%- set _mod_docs_content_type = "CONCEPT" %}
# Requirements for using {{ cluster_manager }} {id="rosa-ocm-requirements_{{ context }}"}

The following configuration details are required when using the {{ cluster_manager_url }} or the CLI tools to manage your clusters. {._abstract}

## AWS account association {id="rosa-associating-concept_{{ context }}"}

When you provision {{ product_title }} using {{ cluster_manager }} (`console.redhat.com`), you must associate the `ocm-role` and `user-role` IAM roles with your AWS account using your Amazon Resource Name (ARN). This association process is also known as _account linking_.

The `ocm-role` ARN is stored as a label in your Red&#160;Hat organization while the `user-role` ARN is stored as a label inside your Red&#160;Hat user account. Red&#160;Hat uses these ARN labels to confirm that the user is a valid account holder and that the correct permissions are available to perform provisioning tasks in the AWS account.