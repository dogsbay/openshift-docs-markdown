{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="rosa-sts-terraform-prerequisites_{{ context }}"}

To use [the Red&#160;Hat Cloud Services provider](https://registry.terraform.io/providers/terraform-redhat/rhcs/latest/docs) inside your Terraform configuration, you must meet the following prerequisites: {._abstract}

*   You have installed the {{ rosa_cli }} tool.
*   You have your offline [{{ cluster_manager_first }} token](https://console.redhat.com/openshift/token/rosa).
*   You have installed [Terraform version 1.4.6](https://developer.hashicorp.com/terraform/downloads) or newer.
{%- if openshift_rosa_hcp %}
*   You have created the [ocm-role IAM role](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/introduction_to_rosa/rosa-hcp-about-iam-resources#rosa-sts-ocm-roles-and-permissions-iam-basic-role_rosa-sts-about-iam-resources).
{%- endif %}
{%- if openshift_rosa %}
*   You have created the [ocm-role IAM role](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/introduction_to_rosa/rosa-sts-about-iam-resources#rosa-sts-ocm-roles-and-permissions-iam-basic-role_rosa-sts-about-iam-resources).
{%- endif %}
*   You have created your AWS account-wide IAM roles.

    The specific account-wide IAM roles and policies provide the STS permissions required for {{ product_title }} support, installation, control plane, and compute functionality. This includes account-wide Operator policies. See the Additional resources for more information on the AWS account roles.
*   You have an [AWS account](https://aws.amazon.com/free/?all-free-tier) and [associated credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html) that allow you to create resources. The credentials are configured for the AWS provider. See the [Authentication and Configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration) section in AWS Terraform provider documentation.
*   You have, at minimum, the following permissions in your AWS IAM role policy that is operating Terraform. Check for these permissions in the AWS console.
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "VisualEditor0",
          "Effect": "Allow",
          "Action": [
            "iam:GetPolicyVersion",
            "iam:DeletePolicyVersion",
            "iam:CreatePolicyVersion",
            "iam:UpdateAssumeRolePolicy",
            "secretsmanager:DescribeSecret",
            "iam:ListRoleTags",
            "secretsmanager:PutSecretValue",
            "secretsmanager:CreateSecret",
            "iam:TagRole",
            "secretsmanager:DeleteSecret",
            "iam:UpdateOpenIDConnectProviderThumbprint",
            "iam:DeletePolicy",
            "iam:CreateRole",
            "iam:AttachRolePolicy",
            "iam:ListInstanceProfilesForRole",
            "secretsmanager:GetSecretValue",
            "iam:DetachRolePolicy",
            "iam:ListAttachedRolePolicies",
            "iam:ListPolicyTags",
            "iam:ListRolePolicies",
            "iam:DeleteOpenIDConnectProvider",
            "iam:DeleteInstanceProfile",
            "iam:GetRole",
            "iam:GetPolicy",
            "iam:ListEntitiesForPolicy",
            "iam:DeleteRole",
            "iam:TagPolicy",
            "iam:CreateOpenIDConnectProvider",
            "iam:CreatePolicy",
            "secretsmanager:GetResourcePolicy",
            "iam:ListPolicyVersions",
            "iam:UpdateRole",
            "iam:GetOpenIDConnectProvider",
            "iam:TagOpenIDConnectProvider",
            "secretsmanager:TagResource",
            "sts:AssumeRoleWithWebIdentity",
            "iam:ListRoles"
          ],
          "Resource": [
            "arn:aws:secretsmanager:*:<ACCOUNT_ID>:secret:*",
            "arn:aws:iam::<ACCOUNT_ID>:instance-profile/*",
            "arn:aws:iam::<ACCOUNT_ID>:role/*",
            "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/*",
            "arn:aws:iam::<ACCOUNT_ID>:policy/*"
          ]
        },
        {
          "Sid": "VisualEditor1",
          "Effect": "Allow",
          "Action": [
            "s3:*"
            ],
          "Resource": "*"
        }
      ]
    }
    ```