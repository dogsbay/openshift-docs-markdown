{%- set _mod_docs_content_type = "CONCEPT" %}
# About the user-role IAM role {id="rosa-sts-about-user-role_{{ context }}"}

You need to create a `user-role` IAM role per web UI user to enable those users to create {{ product_title }} clusters. {._abstract}

Some considerations for your `user-role` IAM role are:

*   You only need one `user-role` IAM role per Red&#160;Hat user account, but your Red&#160;Hat organization can have many of these IAM resources.
*   Any user in a Red&#160;Hat organization may create and link an `user-role` IAM role.
*   There can be numerous `user-role` IAM roles per AWS account per Red&#160;Hat organization.
*   Red&#160;Hat uses the `user-role` IAM role to identify the user. This IAM resource has no AWS account permissions.
*   Your AWS account can have multiple `user-role` IAM roles, but you must link each IAM role to each user in your Red&#160;Hat organization. No user can have more than one linked `user-role` IAM role.


:::note

"Linking" or "associating" your IAM resources with your AWS account means creating a trust-policy with your `user-role` IAM role and the Red&#160;Hat {{ cluster_manager }} AWS role. After creating and linking this IAM resource, you see a trust relationship from your `user-role` IAM role in AWS with the `arn:aws:iam::710019948333:role/RH-Managed-OpenShift-Installer` resource.

:::