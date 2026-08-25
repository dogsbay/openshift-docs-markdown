{%- set _mod_docs_content_type = "CONCEPT" %}
# ROSA cluster creation with AWS STS using default auto mode {id="rosa-quickstart-creating-a-cluster_{{ context }}"}

{{ cluster_manager_first }} is a managed service on the {{ hybrid_console_url }} where you can install, change, operate, and upgrade your Red&#160;Hat OpenShift clusters. This service allows you to work with all of your organization’s clusters from a single dashboard. {._abstract}

The procedures in this document use the `auto` modes in {{ cluster_manager }} to immediately create the required Identity and Access Management (IAM) resources by using the current AWS account. The required resources include the account-wide IAM roles and policies, cluster-specific Operator roles and policies, and OpenID Connect (OIDC) identity provider.

When using the {{ cluster_manager }} {{ hybrid_console_second }} to create a {{ product_title }} cluster that uses the STS, you can select the default options to create the cluster quickly.

Before you can use the {{ cluster_manager }} {{ hybrid_console_second }} to deploy {{ product_title }} with STS clusters, you must associate your AWS account with your Red&#160;Hat organization and create the required account-wide STS roles and policies.