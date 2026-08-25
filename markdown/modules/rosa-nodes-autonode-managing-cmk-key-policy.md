{%- set _mod_docs_content_type = "REFERENCE" %}
# KMS key use policy for the {{ autonode }} {id="rosa-nodes-autonode-managing-cmk-key-policy_{{ context }}"}

The following key use policy must be attached to your customer-managed key (CMK) to allow the {{ autonode }} to use it for root volume encryption. This policy grants the {{ autonode }} IAM role the permissions to create and manage encrypted EBS volumes. {._abstract}

```json title="Required KMS key use policy"
{
  "Sid": "Allow use of the key for Karpenter",
  "Effect": "Allow",
  "Principal": {
    "AWS": "<autonode_iam_role_arn>"
  },
  "Action": [
    "kms:Encrypt",
    "kms:Decrypt",
    "kms:ReEncrypt*",
    "kms:GenerateDataKey*",
    "kms:DescribeKey",
    "kms:CreateGrant",
    "kms:ListGrants",
    "kms:RevokeGrant"
  ],
  "Resource": "*",
  "Condition": {
    "Bool": {
      "kms:GrantIsForAWSResource": "true"
    }
  }
}
```
where:


`<autonode_iam_role_arn>`
:   The ARN of the {{ autonode }} IAM role. You can obtain this value by running `rosa describe cluster -c $CLUSTER_NAME -o json | jq -r '.aws.sts.auto_mode.role_arn'`.