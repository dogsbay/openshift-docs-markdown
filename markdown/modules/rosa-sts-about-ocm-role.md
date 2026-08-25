{%- set _mod_docs_content_type = "CONCEPT" %}
# About the ocm-role IAM resource {id="rosa-sts-about-ocm-role_{{ context }}"}

You must create the `ocm-role` IAM resource to enable a Red&#160;Hat organization of users to create {{ product_title }} clusters. Within the context of linking to AWS, a Red&#160;Hat organization is a single user within {{ cluster_manager }}. {._abstract}

Some considerations for your `ocm-role` IAM resource are:

*   Only one `ocm-role` IAM role can be linked per Red&#160;Hat organization; however, you can have any number of `ocm-role` IAM roles per AWS account. The web UI requires that only one of these roles can be linked at a time.
*   Any user in a Red&#160;Hat organization may create and link an `ocm-role` IAM resource.
*   You must create an `ocm-role` before you can create a {{ product_title }} cluster.

    :::note

    If you are not using {{ cluster_manager }} to create and manage clusters, you can use the `--no-console` profile to satisfy the `ocm-role` IAM resource requirement.
    
    :::

*   Only the Red&#160;Hat Organization Administrator can unlink an `ocm-role` IAM resource. This limitation is to protect other Red&#160;Hat organization members from disturbing the interface capabilities of other users.

    :::note

    If you just created a Red&#160;Hat account that is not part of an existing organization, this account is also the Red&#160;Hat Organization Administrator.
    
    :::

*   See "Understanding the {{ cluster_manager }} role" in the Additional resources of this section for a list of the AWS permissions policies for the basic and admin `ocm-role` IAM resources.

Using the {{ rosa_cli_first }}, you can link your IAM resource when you create it.


:::note

"Linking" or "associating" your IAM resources with your AWS account means creating a trust-policy with your `ocm-role` IAM role and the Red&#160;Hat {{ cluster_manager }} AWS role. After creating and linking your IAM resource, you see a trust relationship from your `ocm-role` IAM resource in AWS with the `arn:aws:iam::12345678abcd:role/RH-Managed-OpenShift-Installer` resource.

:::


After a Red&#160;Hat Organization Administrator has created and linked an `ocm-role` IAM resource, all organization members may want to create and link their own `user-role` IAM role. This IAM resource only needs to be created and linked only once per user. If another user in your Red&#160;Hat organization has already created and linked an `ocm-role` IAM resource, you need to ensure you have created and linked your own `user-role` IAM role.

## ocm-role IAM resource profiles {id="rosa-sts-about-ocm-role-profiles_{{ context }}"}

The `ocm-role` IAM resource exists with three profiles: no-console, standard, and admin. Each profile provides different levels of permissions and capabilities for managing {{ product_title }} clusters.


No-console profile
:   The no-console profile provides the minimum permissions required for {{ product_title }} to function with the {{ rosa_cli_first }}. This profile is insufficient for creating clusters by using the {{ cluster_manager }} console.

    *   Available in {{ rosa_cli }} version 1.2.64 and higher
    *   Allows cluster creation only through the {{ rosa_cli }}, Terraform, or CAPA
    *   If you do not intend to use {{ cluster_manager }} console for cluster creation, you can use the no-console profile and still comply with the requirement to create and link an `ocm-role` IAM resource


    The no-console profile allows {{ product_title }} to assume the `ocm-role` IAM role and fetch details about the role itself so that the service can validate if your `ocm-role` is configured correctly.


Standard profile
:   The standard profile is designed to support provisioning clusters through the {{ cluster_manager }} console. This profile allows you to create {{ product_title }} clusters through {{ cluster_manager }}, but the standard profile does not automatically create your OIDC configs and Operator roles.


Admin profile
:   The admin profile is designed to provide support for automatically provisioning OIDC configs and Operator roles for your clusters.

    *   Enabled using the `--admin` parameter with the `rosa create ocm-role` command
    *   Supports auto mode configuration for {{ rosa_classic_title }} clusters
    *   Provisions OIDC configuration and Operator roles on behalf of customers
    *   Requires a wider set of permissions than the standard profile