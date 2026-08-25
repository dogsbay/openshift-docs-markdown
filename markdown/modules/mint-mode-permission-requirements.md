{%- set _mod_docs_content_type = "REFERENCE" %}
# About mint mode permissions requirements {id="mint-mode-permission-requirements_{{ context }}"}

When using the Cloud Credential Operator (CCO) in mint mode, ensure that the credential you provide meets the requirements of the cloud on which you are running or installing {{ product_title }}. If the provided credentials are not sufficient for mint mode, the CCO cannot create an IAM user. {._abstract}

## Required {{ aws_short }} permissions {id="mint-mode-permission-requirements_aws_{{ context }}"}

The credential you provide for mint mode in {{ aws_first }} must have the following permissions:

*   `iam:CreateAccessKey`
*   `iam:CreateUser`
*   `iam:DeleteAccessKey`
*   `iam:DeleteUser`
*   `iam:DeleteUserPolicy`
*   `iam:GetUser`
*   `iam:GetUserPolicy`
*   `iam:ListAccessKeys`
*   `iam:PutUserPolicy`
*   `iam:TagUser`
*   `iam:SimulatePrincipalPolicy`

## Required {{ gcp_short }} permissions {id="mint-mode-permission-requirements_gcp_{{ context }}"}

The credential you provide for mint mode in {{ gcp_first }} must have the following permissions:

*   `resourcemanager.projects.get`
*   `serviceusage.services.list`
*   `iam.serviceAccountKeys.create`
*   `iam.serviceAccountKeys.delete`
*   `iam.serviceAccountKeys.list`
*   `iam.serviceAccounts.create`
*   `iam.serviceAccounts.delete`
*   `iam.serviceAccounts.get`
*   `iam.roles.create`
*   `iam.roles.get`
*   `iam.roles.list`
*   `iam.roles.undelete`
*   `iam.roles.update`
*   `resourcemanager.projects.getIamPolicy`
*   `resourcemanager.projects.setIamPolicy`