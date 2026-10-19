{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attach a permission boundary for the installer role {id="rosa-sts-attach-installer-permission-boundary_{{ context }}"}

This example procedure is applicable for an installer role and policy with the most restriction of permissions, using only the _core_ installer permission boundary policy for {{ product_title }}. You can complete these steps with the AWS console or the AWS CLI. {._abstract}

This example uses the AWS CLI and the following policy:

```json title="Example sts_installer_core_permission_boundary_policy.json"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
		    "autoscaling:DescribeAutoScalingGroups",
		    "ec2:AllocateAddress",
		    "ec2:AssociateAddress",
		    "ec2:AttachNetworkInterface",
		    "ec2:AuthorizeSecurityGroupEgress",
		    "ec2:AuthorizeSecurityGroupIngress",
		    "ec2:CopyImage",
		    "ec2:CreateNetworkInterface",
		    "ec2:CreateSecurityGroup",
		    "ec2:CreateTags",
		    "ec2:CreateVolume",
		    "ec2:DeleteNetworkInterface",
		    "ec2:DeleteSecurityGroup",
		    "ec2:DeleteSnapshot",
		    "ec2:DeleteTags",
		    "ec2:DeleteVolume",
		    "ec2:DeregisterImage",
		    "ec2:DescribeAccountAttributes",
		    "ec2:DescribeAddresses",
		    "ec2:DescribeAvailabilityZones",
		    "ec2:DescribeDhcpOptions",
		    "ec2:DescribeImages",
		    "ec2:DescribeInstanceAttribute",
		    "ec2:DescribeInstanceCreditSpecifications",
		    "ec2:DescribeInstances",
		    "ec2:DescribeInstanceStatus",
		    "ec2:DescribeInstanceTypeOfferings",
		    "ec2:DescribeInstanceTypes",
		    "ec2:DescribeInternetGateways",
		    "ec2:DescribeKeyPairs",
		    "ec2:DescribeNatGateways",
		    "ec2:DescribeNetworkAcls",
		    "ec2:DescribeNetworkInterfaces",
		    "ec2:DescribePrefixLists",
		    "ec2:DescribeRegions",
		    "ec2:DescribeReservedInstancesOfferings",
		    "ec2:DescribeRouteTables",
		    "ec2:DescribeSecurityGroups",
		    "ec2:DescribeSecurityGroupRules",
		    "ec2:DescribeSubnets",
		    "ec2:DescribeTags",
		    "ec2:DescribeVolumes",
		    "ec2:DescribeVpcAttribute",
		    "ec2:DescribeVpcClassicLink",
		    "ec2:DescribeVpcClassicLinkDnsSupport",
		    "ec2:DescribeVpcEndpoints",
		    "ec2:DescribeVpcs",
		    "ec2:GetConsoleOutput",
		    "ec2:GetEbsDefaultKmsKeyId",
		    "ec2:ModifyInstanceAttribute",
		    "ec2:ModifyNetworkInterfaceAttribute",
		    "ec2:ReleaseAddress",
		    "ec2:RevokeSecurityGroupEgress",
		    "ec2:RevokeSecurityGroupIngress",
		    "ec2:RunInstances",
		    "ec2:StartInstances",
		    "ec2:StopInstances",
		    "ec2:TerminateInstances",
		    "elasticloadbalancing:AddTags",
		    "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
		    "elasticloadbalancing:AttachLoadBalancerToSubnets",
		    "elasticloadbalancing:ConfigureHealthCheck",
		    "elasticloadbalancing:CreateListener",
		    "elasticloadbalancing:CreateLoadBalancer",
		    "elasticloadbalancing:CreateLoadBalancerListeners",
		    "elasticloadbalancing:CreateTargetGroup",
		    "elasticloadbalancing:DeleteLoadBalancer",
		    "elasticloadbalancing:DeleteTargetGroup",
		    "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
		    "elasticloadbalancing:DeregisterTargets",
		    "elasticloadbalancing:DescribeInstanceHealth",
		    "elasticloadbalancing:DescribeListeners",
		    "elasticloadbalancing:DescribeLoadBalancerAttributes",
		    "elasticloadbalancing:DescribeLoadBalancers",
		    "elasticloadbalancing:DescribeTags",
		    "elasticloadbalancing:DescribeTargetGroupAttributes",
		    "elasticloadbalancing:DescribeTargetGroups",
		    "elasticloadbalancing:DescribeTargetHealth",
		    "elasticloadbalancing:ModifyLoadBalancerAttributes",
		    "elasticloadbalancing:ModifyTargetGroup",
		    "elasticloadbalancing:ModifyTargetGroupAttributes",
		    "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
		    "elasticloadbalancing:RegisterTargets",
		    "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",
		    "elasticloadbalancing:SetSecurityGroups",
		    "iam:AddRoleToInstanceProfile",
		    "iam:CreateInstanceProfile",
		    "iam:DeleteInstanceProfile",
		    "iam:GetInstanceProfile",
		    "iam:TagInstanceProfile",
		    "iam:GetRole",
		    "iam:GetRolePolicy",
		    "iam:GetUser",
		    "iam:ListAttachedRolePolicies",
		    "iam:ListInstanceProfiles",
		    "iam:ListInstanceProfilesForRole",
		    "iam:ListRolePolicies",
		    "iam:ListRoles",
		    "iam:ListUserPolicies",
		    "iam:ListUsers",
		    "iam:RemoveRoleFromInstanceProfile",
		    "iam:SimulatePrincipalPolicy",
		    "iam:TagRole",
		    "iam:UntagRole",
		    "route53:ChangeResourceRecordSets",
		    "route53:ChangeTagsForResource",
		    "route53:CreateHostedZone",
		    "route53:DeleteHostedZone",
		    "route53:GetAccountLimit",
		    "route53:GetChange",
		    "route53:GetHostedZone",
		    "route53:ListHostedZones",
		    "route53:ListHostedZonesByName",
		    "route53:ListResourceRecordSets",
		    "route53:ListTagsForResource",
		    "route53:UpdateHostedZoneComment",
		    "s3:CreateBucket",
		    "s3:DeleteBucket",
		    "s3:DeleteObject",
		    "s3:GetAccelerateConfiguration",
		    "s3:GetBucketAcl",
		    "s3:GetBucketCORS",
		    "s3:GetBucketLocation",
		    "s3:GetBucketLogging",
		    "s3:GetBucketObjectLockConfiguration",
		    "s3:GetBucketPolicy",
		    "s3:GetBucketRequestPayment",
		    "s3:GetBucketTagging",
		    "s3:GetBucketVersioning",
		    "s3:GetBucketWebsite",
		    "s3:GetEncryptionConfiguration",
		    "s3:GetLifecycleConfiguration",
		    "s3:GetObject",
		    "s3:GetObjectAcl",
		    "s3:GetObjectTagging",
		    "s3:GetObjectVersion",
		    "s3:GetReplicationConfiguration",
		    "s3:ListBucket",
		    "s3:ListBucketVersions",
		    "s3:PutBucketAcl",
		    "s3:PutBucketPolicy",
		    "s3:PutBucketTagging",
		    "s3:PutEncryptionConfiguration",
		    "s3:PutObject",
		    "s3:PutObjectAcl",
		    "s3:PutObjectTagging",
		    "servicequotas:GetServiceQuota",
		    "servicequotas:ListAWSDefaultServiceQuotas",
		    "sts:AssumeRole",
		    "sts:AssumeRoleWithWebIdentity",
		    "sts:GetCallerIdentity",
		    "tag:GetResources",
		    "tag:UntagResources",
		    "kms:DescribeKey",
		    "cloudwatch:GetMetricData",
		    "ec2:CreateRoute",
		    "ec2:DeleteRoute",
		    "ec2:CreateVpcEndpoint",
		    "ec2:DeleteVpcEndpoints",
		    "ec2:CreateVpcEndpointServiceConfiguration",
		    "ec2:DeleteVpcEndpointServiceConfigurations",
		    "ec2:DescribeVpcEndpointServiceConfigurations",
		    "ec2:DescribeVpcEndpointServicePermissions",
		    "ec2:DescribeVpcEndpointServices",
		    "ec2:ModifyVpcEndpointServicePermissions"
            ],
            "Resource": "*"
        },
		{
      		"Sid": "PassRoleToNodes",
			"Effect": "Allow",
      		"Action": [
        		"iam:PassRole"
      		],
      		"Resource": "*",
      		"Condition": {
                "StringEquals": {
                    "iam:PassedToService": [
                        "ec2.amazonaws.com"
                    ]
                }
            }
    	},
        {
            "Effect": "Allow",
            "Action": [
                "secretsmanager:GetSecretValue"
            ],
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        }
    ]
}
```


:::important

To use the permission boundaries, you must prepare the permission boundary policy and add it to your relevant installer role in AWS IAM. While the {{ rosa_cli_first }} offers a permission boundary function, it applies to all roles and not just the installer role, which means it does not work with the provided permission boundary policies (which are only for the installer role).

:::


**Prerequisites**

*   You have an AWS account.
*   You have the permissions required to administer AWS roles and policies.
*   You have installed and configured the latest AWS (`aws`) CLI and {{ rosa_cli }} on your workstation.
*   You have already prepared your {{ product_title }} account-wide roles, includes the installer role, and the corresponding policies. If these do not exist in your AWS account, see "Creating the account-wide STS roles and policies" in _Additional resources_.

**Procedure**

1.  Prepare the policy file by entering the following command in the {{ rosa_cli }}:
    ```terminal
    $ curl -o ./rosa-installer-core.json https://raw.githubusercontent.com/openshift/managed-cluster-config/master/resources/sts/4.21/sts_installer_core_permission_boundary_policy.json
    ```
1.  Create the policy in AWS and gather its Amazon Resource Name (ARN) by entering the following command:
    ```terminal
    $ aws iam create-policy \
    --policy-name rosa-core-permissions-boundary-policy \
    --policy-document file://./rosa-installer-core.json \
    --description "ROSA installer core permission boundary policy, the minimum permission set, allows BYO-VPC, disallows PrivateLink"
    ```
    ```terminal title="Example output"
    {
        "Policy": {
            "PolicyName": "rosa-core-permissions-boundary-policy",
            "PolicyId": "<Policy ID>",
            "Arn": "arn:aws:iam::<account ID>:policy/rosa-core-permissions-boundary-policy",
            "Path": "/",
            "DefaultVersionId": "v1",
            "AttachmentCount": 0,
            "PermissionsBoundaryUsageCount": 0,
            "IsAttachable": true,
            "CreateDate": "<CreateDate>",
            "UpdateDate": "<UpdateDate>"
        }
    }
    ```
1.  Add the permission boundary policy to the installer role you want to restrict by entering the following command:
    ```terminal
    $ aws iam put-role-permissions-boundary \
    --role-name ManagedOpenShift-Installer-Role \
    --permissions-boundary arn:aws:iam::<account ID>:policy/rosa-core-permissions-boundary-policy
    ```
1.  Display the installer role to validate attached policies (including permissions boundary) by entering the following command in the {{ rosa_cli }}:
    ```terminal
    $ aws iam get-role --role-name ManagedOpenShift-Installer-Role \
    --output text | grep PERMISSIONSBOUNDARY
    ```
    ```terminal title="Example output"
    PERMISSIONSBOUNDARY	arn:aws:iam::<account ID>:policy/rosa-core-permissions-boundary-policy	Policy
    ```