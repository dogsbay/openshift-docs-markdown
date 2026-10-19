{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ cluster_manager }} roles and permissions {id="rosa-sts-ocm-roles-and-permissions_{{ context }}"}

If you create {{ product_title }} clusters by using {{ cluster_manager_url }}, you must have the following AWS Identity and Access Management (IAM) roles linked to your AWS account to create and manage the clusters. {._abstract}

These AWS IAM roles are as follows:

*   The {{ product_title }} user role (`user-role`) is an AWS role used by Red&#160;Hat to verify the customer’s AWS identity. This role has no additional permissions, and the role has a trust relationship with the Red&#160;Hat installer account.
*   An `ocm-role` resource grants the required permissions for installation of {{ product_title }} clusters in {{ cluster_manager }}. You can apply basic or administrative permissions to the `ocm-role` resource. If you create an administrative `ocm-role` resource, {{ cluster_manager }} can create the needed AWS Operator roles and OpenID Connect (OIDC) provider. This IAM role also creates a trust relationship with the Red&#160;Hat installer account.

    :::note

    The `ocm-role` IAM resource refers to the combination of the IAM role and the necessary policies created with it.
    
    :::


You must create this user role as well as an administrative `ocm-role` resource, if you want to use the auto mode in {{ cluster_manager }} to create your Operator role policies and OIDC provider.