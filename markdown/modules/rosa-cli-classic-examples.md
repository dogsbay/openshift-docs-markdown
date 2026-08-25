{%- set _mod_docs_content_type = "REFERENCE" %}
# Least privilege permissions for common {{ rosa_cli }} commands {id="rosa-cli-classic-examples_{{ context }}"}

These examples list the least privilege IAM permissions for common {{ rosa_cli }} commands when you build {{ product_title }} clusters. {._abstract}

## Create a managed OpenID Connect (OIDC) provider {id="rosa-create-OIDC-providers-hcp-classic_{{ context }}"}
Run the following command with the specified permissions to create your managed OIDC provider by using `auto` mode.

```terminal title="Input"
$ rosa create oidc-config --mode auto
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "CreateOidcConfig",
            "Effect": "Allow",
            "Action": [
                "iam:TagOpenIDConnectProvider",
                "iam:CreateOpenIDConnectProvider"
            ],
            "Resource": "*"
        }
    ]
}
```
## Create an unmanaged OpenID Connect provider {id="rosa-create-unmanaged-OIDC-providers-hcp-classic_{{ context }}"}
Run the following command with the specified permissions to create your unmanaged OIDC provider by using `auto` mode.

```terminal title="Input"
$ rosa create oidc-config --mode auto --managed=false
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:TagOpenIDConnectProvider",
                "iam:ListRoleTags",
                "iam:ListRoles",
                "iam:CreateOpenIDConnectProvider",
                "s3:CreateBucket",
                "s3:PutObject",
                "s3:PutBucketTagging",
                "s3:PutBucketPolicy",
                "s3:PutObjectTagging",
                "s3:PutBucketPublicAccessBlock",
                "secretsmanager:CreateSecret",
                "secretsmanager:TagResource"
            ],
            "Resource": "*"
        }
    ]
}
```

## List your account roles {id="rosa-list-account-roles-hcp-classic_{{ context }}"}
Run the following command with the specified permissions to list your account roles.

```terminal title="Input"
$ rosa list account-roles
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ListAccountRoles",
            "Effect": "Allow",
            "Action": [
                "iam:ListRoleTags",
                "iam:ListRoles"
            ],
            "Resource": "*"
        }
    ]
}
```

## List your Operator roles {id="rosa-list-operator-roles-hcp-classic_{{ context }}"}
Run the following command with the specified permissions to list your Operator roles.

```terminal title="Input"
$ rosa list operator-roles
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ListOperatorRoles",
            "Effect": "Allow",
            "Action": [
                "iam:ListRoleTags",
                "iam:ListAttachedRolePolicies",
                "iam:ListRoles",
                "iam:ListPolicyTags"
            ],
            "Resource": "*"
        }
    ]
}
```

## List your OIDC providers {id="rosa-list-OIDC-providers-hcp-classic_{{ context }}"}

Run the following command with the specified permissions to list your OIDC providers.

```terminal title="Input"
$ rosa list oidc-providers
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ListOidcProviders",
            "Effect": "Allow",
            "Action": [
                "iam:ListOpenIDConnectProviders",
                "iam:ListOpenIDConnectProviderTags"
            ],
            "Resource": "*"
        }
    ]
}
```

## Verify your quota {id="rosa-verify-quota-hcp-classic_{{ context }}"}

Run the following command with the specified permissions to verify your quota.

```terminal title="Input"
$ rosa verify quota
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VerifyQuota",
            "Effect": "Allow",
            "Action": [
                "elasticloadbalancing:DescribeAccountLimits",
                "servicequotas:ListServiceQuotas"
            ],
            "Resource": "*"
        }
    ]
}
```

## Delete your managed OIDC configuration {id="rosa-delete-oidc-config-hcp-classic_{{ context }}"}

Run the following command with the specified permissions to delete your managed OIDC configuration by using `auto` mode.

```terminal title="Input"
$ rosa delete oidc-config -–mode auto
```
```json title="Policy"

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "DeleteOidcConfig",
            "Effect": "Allow",
            "Action": [
                "iam:ListOpenIDConnectProviders",
                "iam:DeleteOpenIDConnectProvider"
            ],
            "Resource": "*"
        }
    ]
}

```
## Delete your unmanaged OIDC configuration {id="rosa-delete-unmanaged-oidc-config-hcp-classic_{{ context }}"}

Run the following command with the specified permissions to delete your unmanaged OIDC configuration by using `auto` mode.

```terminal title="Input"
$ rosa delete oidc-config -–mode auto
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:ListOpenIDConnectProviders",
                "iam:DeleteOpenIDConnectProvider",
                "secretsmanager:DeleteSecret",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:DeleteBucket"
            ],
            "Resource": "*"
        }
    ]
}
```

## Create a cluster {id="rosa-min-permissions-required-classic_{{ context }}"}

Run the following command with the specified permissions to create a {{ product_title }} cluster with least privilege permissions.

```terminal title="Input"
$ rosa create cluster
```
```json title="Policy"

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "CreateCluster",
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:ListRoleTags",
                "iam:ListRoles"
            ],
            "Resource": "*"
        }
    ]
}

```

## Create account roles and Operator roles {id="rosa-create-account-operator-roles-classic_{{ context }}"}

Run the following command with the specified permissions to create account and Operator roles in `auto` mode.

```terminal title="Input"
$ rosa create account-roles --mode auto --classic
```
```json title="Policy"

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "CreateAccountOperatorRoles",
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:UpdateAssumeRolePolicy",
                "iam:ListRoleTags",
                "iam:GetPolicy",
                "iam:TagRole",
                "iam:ListRoles",
                "iam:CreateRole",
                "iam:AttachRolePolicy",
                "iam:TagPolicy",
                "iam:CreatePolicy",
                "iam:ListPolicyTags"
            ],
            "Resource": "*"
        }
    ]
}

```
## Delete your account roles {id="rosa-delete-account-roles-classic_{{ context }}"}

Run the following command with the specified permissions to delete the account roles in `auto` mode.

```terminal title="Input"
$ rosa delete account-roles -–mode auto
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:ListInstanceProfilesForRole",
                "iam:DetachRolePolicy",
                "iam:ListAttachedRolePolicies",
                "iam:ListRoles",
                "iam:DeleteRole",
                "iam:ListRolePolicies",
                "iam:GetPolicy",
                "iam:ListPolicyVersions",
                "iam:DeletePolicy"
            ],
            "Resource": "*"
        }
    ]
}
```

## Delete your Operator roles {id="rosa-delete-operator-roles-classic_{{ context }}"}

Run the following command with the specified permissions to delete the Operator roles in `auto` mode.

```terminal title="Input"
$ rosa delete operator-roles -–mode auto
```
```json title="Policy"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:ListInstanceProfilesForRole",
                "iam:DetachRolePolicy",
                "iam:ListAttachedRolePolicies",
                "iam:ListRoles",
                "iam:DeleteRole",
                "iam:ListRolePolicies",
                "iam:GetPolicy",
                "iam:ListPolicyVersions",
                "iam:DeletePolicy"
            ],
            "Resource": "*"
        }
    ]
}

```