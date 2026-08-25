{%- set _mod_docs_content_type = "CONCEPT" %}
# Deleting the account-wide IAM resources {id="rosa-deleting-sts-resources-account-wide_{{ context }}"}

You can delete the account-wide AWS Identity and Access Management (IAM) resources. First, delete all {{ product_title }} clusters that depend on these resources. {._abstract}

If you no longer need {{ cluster_manager_first }} to install {{ product_title }} clusters, you can delete the {{ cluster_manager }} and user IAM roles.


:::important

The account-wide IAM roles and policies might be used by other {{ product_title }} clusters in the same AWS account. Only remove the resources if they are not required by other clusters.

The {{ cluster_manager }} and user IAM roles are required for other {{ product_title }} clusters in the same AWS account. These roles enable you to install, manage, and delete clusters by using {{ cluster_manager }}. Only remove them if you no longer need to manage {{ product_title }} clusters in your account. If these roles are removed before cluster deletion, see "Repairing a cluster that cannot be deleted" in _Troubleshooting cluster deployments_.

:::