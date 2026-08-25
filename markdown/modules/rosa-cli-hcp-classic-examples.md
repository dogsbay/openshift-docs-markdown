{%- set _mod_docs_content_type = "REFERENCE" %}
# Least privilege permissions for common ROSA CLI commands {id="rosa-cli-hcp-classic-examples_{{ context }}"}

The following required minimum permissions for the listed ROSA CLI commands are applicable for hosted control plane (HCP) and Classic clusters.

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