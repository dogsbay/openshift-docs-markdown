{%- set _mod_docs_content_type = "CONCEPT" %}
# Different credential methods to deploy {{ product_title }} {id="cloud-experts-rosa-different-credential-methods-rosa_{{ context }}"}

As part of {{ product_title }}, Red&#160;Hat manages infrastructure resources in your AWS account and must be granted the necessary permissions. There are currently two supported methods for granting those permissions: {._abstract}

*   Using static IAM user credentials with an `AdministratorAccess` policy

    This is referred to as "{{ product_title }} with IAM Users" in this tutorial. It is not the preferred credential method.
*   Using AWS STS with short-lived, dynamic tokens

    This is referred to as “{{ product_title }} with STS” in this tutorial. It is the preferred credential method.

## Rosa with IAM Users {id="different-credential-methods-rosa-iam-users_{{ context }}"}

When {{ product_title }} was first released, the only credential method was {{ product_title }} with IAM Users. This method grants IAM users with an `AdministratorAccess` policy full access to create the necessary resources in the AWS account that uses {{ product_title }}. The cluster can then create and expand its credentials as needed.

## {{ product_title }} with STS {id="different-credential-methods-rosa-sts_{{ context }}"}

{{ product_title }} with STS grants users limited, short-term access to resources in your AWS account. The STS method uses predefined roles and policies to grant temporary, least-privilege permissions to IAM users or authenticated federated users. The credentials typically expire an hour after being requested. Once expired, they are no longer recognized by AWS and no longer have account access from API requests made with them. For more information, see the [AWS documentation](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html). While both {{ product_title }} with IAM Users and {{ product_title }} with STS are currently enabled, {{ product_title }} with STS is the preferred and recommended option.