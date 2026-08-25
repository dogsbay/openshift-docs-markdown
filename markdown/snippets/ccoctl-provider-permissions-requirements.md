{%- set _mod_docs_content_type = "SNIPPET" %}

{%- if aws_sts %}
*   You have created an {{ aws_short }} account for the `ccoctl` utility to use with the following permissions:
    **Required `iam` permissions**

    *   `iam:CreateOpenIDConnectProvider`
    *   `iam:CreateRole`
    *   `iam:DeleteOpenIDConnectProvider`
    *   `iam:DeleteRole`
    *   `iam:DeleteRolePolicy`
    *   `iam:GetOpenIDConnectProvider`
    *   `iam:GetRole`
    *   `iam:GetUser`
    *   `iam:ListOpenIDConnectProviders`
    *   `iam:ListRolePolicies`
    *   `iam:ListRoles`
    *   `iam:PutRolePolicy`
    *   `iam:TagOpenIDConnectProvider`
    *   `iam:TagRole`

    **Required `s3` permissions**

    *   `s3:CreateBucket`
    *   `s3:DeleteBucket`
    *   `s3:DeleteObject`
    *   `s3:GetBucketAcl`
    *   `s3:GetBucketTagging`
    *   `s3:GetObject`
    *   `s3:GetObjectAcl`
    *   `s3:GetObjectTagging`
    *   `s3:ListBucket`
    *   `s3:PutBucketAcl`
    *   `s3:PutBucketPolicy`
    *   `s3:PutBucketPublicAccessBlock`
    *   `s3:PutBucketTagging`
    *   `s3:PutObject`
    *   `s3:PutObjectAcl`
    *   `s3:PutObjectTagging`

    **Required `cloudfront` permissions**

    *   `cloudfront:ListCloudFrontOriginAccessIdentities`
    *   `cloudfront:ListDistributions`
    *   `cloudfront:ListTagsForResource`
*   If you plan to store the OIDC configuration in a private S3 bucket that is accessed by the IAM identity provider through a public CloudFront distribution URL, the {{ aws_short }} account that runs the `ccoctl` utility requires the following additional permissions:
    *   `cloudfront:CreateCloudFrontOriginAccessIdentity`
    *   `cloudfront:CreateDistribution`
    *   `cloudfront:DeleteCloudFrontOriginAccessIdentity`
    *   `cloudfront:DeleteDistribution`
    *   `cloudfront:GetCloudFrontOriginAccessIdentity`
    *   `cloudfront:GetCloudFrontOriginAccessIdentityConfig`
    *   `cloudfront:GetDistribution`
    *   `cloudfront:TagResource`
    *   `cloudfront:UpdateDistribution`

    :::note

    These additional permissions support the use of the `--create-private-s3-bucket` option when processing credentials requests with the `ccoctl aws create-all` command.
    
    :::

{%- endif %}
{%- if rotate_aws %}
*   You have created an {{ aws_short }} account for the `ccoctl` utility to use with the following permissions:
    *   `s3:GetObject`
    *   `s3:PutObject`
    *   `s3:PutObjectTagging`
    *   For clusters that store the OIDC configuration in a private S3 bucket that is accessed by the IAM identity provider through a public CloudFront distribution URL, the {{ aws_short }} account that runs the `ccoctl` utility requires the `cloudfront:ListDistributions` permission.
{%- endif %}

{%- if azure_workload_id %}
*   You have created a global {{ azure_short }} account for the `ccoctl` utility to use with the following permissions:
    *   `Microsoft.Resources/subscriptions/resourceGroups/read`
    *   `Microsoft.Resources/subscriptions/resourceGroups/write`
    *   `Microsoft.Resources/subscriptions/resourceGroups/delete`
    *   `Microsoft.Authorization/roleAssignments/read`
    *   `Microsoft.Authorization/roleAssignments/delete`
    *   `Microsoft.Authorization/roleAssignments/write`
    *   `Microsoft.Authorization/roleDefinitions/read`
    *   `Microsoft.Authorization/roleDefinitions/write`
    *   `Microsoft.Authorization/roleDefinitions/delete`
    *   `Microsoft.Storage/storageAccounts/listkeys/action`
    *   `Microsoft.Storage/storageAccounts/delete`
    *   `Microsoft.Storage/storageAccounts/read`
    *   `Microsoft.Storage/storageAccounts/write`
    *   `Microsoft.Storage/storageAccounts/blobServices/containers/delete`
    *   `Microsoft.Storage/storageAccounts/blobServices/containers/read`
    *   `Microsoft.Storage/storageAccounts/blobServices/containers/write`
    *   `Microsoft.ManagedIdentity/userAssignedIdentities/delete`
    *   `Microsoft.ManagedIdentity/userAssignedIdentities/read`
    *   `Microsoft.ManagedIdentity/userAssignedIdentities/write`
    *   `Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials/read`
    *   `Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials/write`
    *   `Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials/delete`
    *   `Microsoft.Storage/register/action`
    *   `Microsoft.ManagedIdentity/register/action`
{%- endif %}
{%- if rotate_azure %}
*   You have created a global {{ azure_short }} account for the `ccoctl` utility to use with the following permissions:
    *   `Microsoft.Storage/storageAccounts/listkeys/action`
    *   `Microsoft.Storage/storageAccounts/read`
    *   `Microsoft.Storage/storageAccounts/write`
    *   `Microsoft.Storage/storageAccounts/blobServices/containers/read`
    *   `Microsoft.Storage/storageAccounts/blobServices/containers/write`
{%- endif %}

{%- if google_cloud_platform %}
*   You have added one of the following authentication options to the {{ gcp_short }} account that the `ccoctl` utility uses:
    *   The **IAM Workload Identity Pool Admin** role
    *   The following granular permissions:
        *   `compute.projects.get`
        *   `iam.googleapis.com/workloadIdentityPoolProviders.create`
        *   `iam.googleapis.com/workloadIdentityPoolProviders.get`
        *   `iam.googleapis.com/workloadIdentityPools.create`
        *   `iam.googleapis.com/workloadIdentityPools.delete`
        *   `iam.googleapis.com/workloadIdentityPools.get`
        *   `iam.googleapis.com/workloadIdentityPools.undelete`
        *   `iam.roles.create`
        *   `iam.roles.delete`
        *   `iam.roles.list`
        *   `iam.roles.undelete`
        *   `iam.roles.update`
        *   `iam.serviceAccounts.create`
        *   `iam.serviceAccounts.delete`
        *   `iam.serviceAccounts.getIamPolicy`
        *   `iam.serviceAccounts.list`
        *   `iam.serviceAccounts.setIamPolicy`
        *   `iam.workloadIdentityPoolProviders.get`
        *   `iam.workloadIdentityPools.delete`
        *   `resourcemanager.projects.get`
        *   `resourcemanager.projects.getIamPolicy`
        *   `resourcemanager.projects.setIamPolicy`
        *   `storage.buckets.create`
        *   `storage.buckets.delete`
        *   `storage.buckets.get`
        *   `storage.buckets.getIamPolicy`
        *   `storage.buckets.setIamPolicy`
        *   `storage.objects.create`
        *   `storage.objects.delete`
        *   `storage.objects.list`
{%- endif %}
{%- if rotate_gcp %}
*   You have added one of the following authentication options to the {{ gcp_short }} account that the `ccoctl` utility uses:
    *   The **IAM Workload Identity Pool Admin** role
    *   The following granular permissions:
        *   `storage.objects.create`
        *   `storage.objects.delete`
{%- endif %}