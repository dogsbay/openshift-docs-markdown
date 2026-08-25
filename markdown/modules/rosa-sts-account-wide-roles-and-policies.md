{%- set _mod_docs_content_type = "REFERENCE" %}
# Account-wide IAM role and policy reference {id="rosa-sts-account-wide-roles-and-policies_{{ context }}"}

This section provides details about the account-wide IAM roles and policies that are required for ROSA deployments that use STS, including the Operator policies. It also includes the JSON files that define the policies.

The account-wide roles and policies are specific to an {{ product_title }} minor release version, for example {{ product_title }} {{ product_version }}, and are compatible with earlier versions. You can minimize the required STS resources by reusing the account-wide roles and policies for multiple clusters of the same minor version, regardless of their patch version.

## Methods of account-wide role creation {id="rosa-sts-account-wide-roles-and-policies-creation-methods_{{ context }}"}

You can create account-wide roles by using the {{ product_title }} (ROSA) CLI, `rosa`, or the {{ cluster_manager_url }} guided installation. You can create the roles manually or by using an automatic process that uses predefined names for these roles and policies.

### Manual ocm-role resource creation {id="rosa-sts-account-wide-roles-and-policies-creation-methods-manual_{{ context }}"}

You can use the manual creation method if you have the necessary CLI access to create these roles on your system. You can run this option in your desired CLI tool or from {{ cluster_manager }}. After you start the manual creation process, the CLI presents a series of commands for you to run that create the roles and link them to the needed policies.

### Automatic ocm-role resource creation {id="rosa-sts-account-wide-roles-and-policies-creation-methods-auto_{{ context }}"}

After you created an `ocm-role` resource with administrative permissions, you can use the automatic creation method from {{ cluster_manager }}. Selecting this method creates the roles and policies that use the default names.

If you use the {{ product_title }} guided installation on {{ cluster_manager }}, you must have created an `ocm-role` resource with administrative permissions in the first step of the guided cluster installation.

{% if not openshift_rosa_hcp %}


:::note

The account number present in the `sts_installer_trust_policy.json` and `sts_support_trust_policy.json` samples represents the Red&#160;Hat account that is allowed to assume the required roles.

:::


**ROSA installer role, policy, and policy files**

| Resource | Description |
| --- | --- |
| `ManagedOpenShift-Installer-Role` | An IAM role used by the ROSA installer. |
| `ManagedOpenShift-Installer-Role-Policy` | An IAM policy that provides the ROSA installer with the permissions required to complete cluster installation tasks. |

:::details{title="`sts_installer_trust_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": [
                    "arn:aws:iam::%{aws_account_id}:role/RH-Managed-OpenShift-Installer"
                ]
            },
            "Action": [
                "sts:AssumeRole"
            ]
        }
    ]
}
```
:::

:::details{title="`sts_installer_permission_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "autoscaling:DescribeAutoScalingGroups",
                "ec2:AllocateAddress",
                "ec2:AssociateAddress",
                "ec2:AssociateDhcpOptions",
                "ec2:AssociateRouteTable",
                "ec2:AttachInternetGateway",
                "ec2:AttachNetworkInterface",
                "ec2:AuthorizeSecurityGroupEgress",
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:CopyImage",
                "ec2:CreateDhcpOptions",
                "ec2:CreateInternetGateway",
                "ec2:CreateNatGateway",
                "ec2:CreateNetworkInterface",
                "ec2:CreateRoute",
                "ec2:CreateRouteTable",
                "ec2:CreateSecurityGroup",
                "ec2:CreateSubnet",
                "ec2:CreateTags",
                "ec2:CreateVolume",
                "ec2:CreateVpc",
                "ec2:CreateVpcEndpoint",
                "ec2:DeleteDhcpOptions",
                "ec2:DeleteInternetGateway",
                "ec2:DeleteNatGateway",
                "ec2:DeleteNetworkInterface",
                "ec2:DeleteRoute",
                "ec2:DeleteRouteTable",
                "ec2:DeleteSecurityGroup",
                "ec2:DeleteSnapshot",
                "ec2:DeleteSubnet",
                "ec2:DeleteTags",
                "ec2:DeleteVolume",
                "ec2:DeleteVpc",
                "ec2:DeleteVpcEndpoints",
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
                "ec2:DetachInternetGateway",
                "ec2:DisassociateRouteTable",
                "ec2:GetConsoleOutput",
                "ec2:GetEbsDefaultKmsKeyId",
                "ec2:ModifyInstanceAttribute",
                "ec2:ModifyNetworkInterfaceAttribute",
                "ec2:ModifySubnetAttribute",
                "ec2:ModifyVpcAttribute",
                "ec2:ReleaseAddress",
                "ec2:ReplaceRouteTableAssociation",
                "ec2:RevokeSecurityGroupEgress",
                "ec2:RevokeSecurityGroupIngress",
                "ec2:RunInstances",
                "ec2:StartInstances",
                "ec2:StopInstances",
                "ec2:TerminateInstances",
                "elasticloadbalancing:AddTags",
                "elasticloadbalancing:RemoveTags",
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
                "elasticloadbalancing:DescribeAccountLimits",
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
                "iam:GetOpenIDConnectProvider",
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
                "iam:PassRole",
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
                "s3:DeleteObjectVersion",
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
                "s3:PutBucketVersioning",
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
                "ec2:CreateVpcEndpointServiceConfiguration",
                "ec2:DeleteVpcEndpointServiceConfigurations",
                "ec2:DescribeVpcEndpointServiceConfigurations",
                "ec2:DescribeVpcEndpointServicePermissions",
                "ec2:DescribeVpcEndpointServices",
                "ec2:ModifyVpcEndpointServicePermissions",
                "kms:DescribeKey",
                "cloudwatch:GetMetricData"
            ],
            "Resource": "*"
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
:::

**ROSA control plane role, policy, and policy files**

| Resource | Description |
| --- | --- |
| `ManagedOpenShift-ControlPlane-Role` | An IAM role used by the ROSA control plane. |
| `ManagedOpenShift-ControlPlane-Role-Policy` | An IAM policy that provides the ROSA control plane with the permissions required to manage its components. |

:::details{title="`sts_instance_controlplane_trust_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": [
                    "ec2.amazonaws.com"
                ]
            },
            "Action": [
                "sts:AssumeRole"
            ]
        }
    ]
}
```
:::

:::details{title="`sts_instance_controlplane_permission_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ReadPermissions",
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeAvailabilityZones",
                "ec2:DescribeInstances",
                "ec2:DescribeRouteTables",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeVpcs",
                "elasticloadbalancing:DescribeLoadBalancers",
                "elasticloadbalancing:DescribeLoadBalancerAttributes",
                "elasticloadbalancing:DescribeListeners",
                "elasticloadbalancing:DescribeTargetGroups",
                "elasticloadbalancing:DescribeTargetHealth",
                "elasticloadbalancing:DescribeLoadBalancerPolicies"
            ],
            "Resource": [
                "*"
            ]
        },
        {
          "Sid": "KMSDescribeKey",
          "Effect": "Allow",
          "Action": [
              "kms:DescribeKey"
          ],
          "Resource": [
              "*"
          ],
          "Condition": {
              "StringEquals": {
                  "aws:ResourceTag/red-hat": "true"
              }
          }
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:AttachVolume",
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:CreateSecurityGroup",
                "ec2:CreateTags",
                "ec2:CreateVolume",
                "ec2:DeleteSecurityGroup",
                "ec2:DeleteVolume",
                "ec2:DetachVolume",
                "ec2:ModifyInstanceAttribute",
                "ec2:ModifyVolume",
                "ec2:RevokeSecurityGroupIngress",
                "elasticloadbalancing:AddTags",
                "elasticloadbalancing:AttachLoadBalancerToSubnets",
                "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
                "elasticloadbalancing:CreateListener",
                "elasticloadbalancing:CreateLoadBalancer",
                "elasticloadbalancing:CreateLoadBalancerPolicy",
                "elasticloadbalancing:CreateLoadBalancerListeners",
                "elasticloadbalancing:CreateTargetGroup",
                "elasticloadbalancing:ConfigureHealthCheck",
                "elasticloadbalancing:DeleteListener",
                "elasticloadbalancing:DeleteLoadBalancer",
                "elasticloadbalancing:DeleteLoadBalancerListeners",
                "elasticloadbalancing:DeleteTargetGroup",
                "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
                "elasticloadbalancing:DeregisterTargets",
                "elasticloadbalancing:DetachLoadBalancerFromSubnets",
                "elasticloadbalancing:ModifyListener",
                "elasticloadbalancing:ModifyLoadBalancerAttributes",
                "elasticloadbalancing:ModifyTargetGroup",
                "elasticloadbalancing:ModifyTargetGroupAttributes",
                "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
                "elasticloadbalancing:RegisterTargets",
                "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",
                "elasticloadbalancing:SetLoadBalancerPoliciesOfListener"
            ],
            "Resource": "*"
        }
    ]
}
```
:::

**ROSA compute node role, policy, and policy files**

| Resource | Description |
| --- | --- |
| `ManagedOpenShift-Worker-Role` | An IAM role used by the ROSA compute instances. |
| `ManagedOpenShift-Worker-Role-Policy` | An IAM policy that provides the ROSA compute instances with the permissions required to manage their components. |

:::details{title="`sts_instance_worker_trust_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": [
                    "ec2.amazonaws.com"
                ]
            },
            "Action": [
                "sts:AssumeRole"
            ]
        }
    ]
}
```
:::

:::details{title="`sts_instance_worker_permission_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeInstances",
                "ec2:DescribeRegions"
            ],
            "Resource": "*"
        }
    ]
}
```
:::

**ROSA support role, policy, and policy files**

| Resource | Description |
| --- | --- |
| `ManagedOpenShift-Support-Role` | An IAM role used by the Red&#160;Hat Site Reliability Engineering (SRE) support team. |
| `ManagedOpenShift-Support-Role-Policy` | An IAM policy that provides the Red&#160;Hat SRE support team with the permissions required to support ROSA clusters. |

:::details{title="`sts_support_trust_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": [
                    "arn:aws:iam::%{aws_account_id}:role/RH-Technical-Support-Access"
                ]
            },
            "Action": [
                "sts:AssumeRole"
            ]
        }
    ]
}
```
:::

:::details{title="`sts_support_permission_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "cloudtrail:DescribeTrails",
                "cloudtrail:LookupEvents",
                "cloudwatch:GetMetricData",
                "cloudwatch:GetMetricStatistics",
                "cloudwatch:ListMetrics",
                "ec2-instance-connect:SendSerialConsoleSSHPublicKey",
                "ec2:CopySnapshot",
                "ec2:CreateNetworkInsightsPath",
                "ec2:CreateSnapshot",
                "ec2:CreateSnapshots",
                "ec2:CreateTags",
                "ec2:DeleteNetworkInsightsAnalysis",
                "ec2:DeleteNetworkInsightsPath",
                "ec2:DeleteTags",
                "ec2:DescribeAccountAttributes",
                "ec2:DescribeAddresses",
                "ec2:DescribeAddressesAttribute",
                "ec2:DescribeAggregateIdFormat",
                "ec2:DescribeAvailabilityZones",
                "ec2:DescribeByoipCidrs",
                "ec2:DescribeCapacityReservations",
                "ec2:DescribeCarrierGateways",
                "ec2:DescribeClassicLinkInstances",
                "ec2:DescribeClientVpnAuthorizationRules",
                "ec2:DescribeClientVpnConnections",
                "ec2:DescribeClientVpnEndpoints",
                "ec2:DescribeClientVpnRoutes",
                "ec2:DescribeClientVpnTargetNetworks",
                "ec2:DescribeCoipPools",
                "ec2:DescribeCustomerGateways",
                "ec2:DescribeDhcpOptions",
                "ec2:DescribeEgressOnlyInternetGateways",
                "ec2:DescribeIamInstanceProfileAssociations",
                "ec2:DescribeIdentityIdFormat",
                "ec2:DescribeIdFormat",
                "ec2:DescribeImageAttribute",
                "ec2:DescribeImages",
                "ec2:DescribeInstanceAttribute",
                "ec2:DescribeInstances",
                "ec2:DescribeInstanceStatus",
                "ec2:DescribeInstanceTypeOfferings",
                "ec2:DescribeInstanceTypes",
                "ec2:DescribeInternetGateways",
                "ec2:DescribeIpv6Pools",
                "ec2:DescribeKeyPairs",
                "ec2:DescribeLaunchTemplates",
                "ec2:DescribeLocalGatewayRouteTables",
                "ec2:DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations",
                "ec2:DescribeLocalGatewayRouteTableVpcAssociations",
                "ec2:DescribeLocalGateways",
                "ec2:DescribeLocalGatewayVirtualInterfaceGroups",
                "ec2:DescribeLocalGatewayVirtualInterfaces",
                "ec2:DescribeManagedPrefixLists",
                "ec2:DescribeNatGateways",
                "ec2:DescribeNetworkAcls",
                "ec2:DescribeNetworkInsightsAnalyses",
                "ec2:DescribeNetworkInsightsPaths",
                "ec2:DescribeNetworkInterfaces",
                "ec2:DescribePlacementGroups",
                "ec2:DescribePrefixLists",
                "ec2:DescribePrincipalIdFormat",
                "ec2:DescribePublicIpv4Pools",
                "ec2:DescribeRegions",
                "ec2:DescribeReservedInstances",
                "ec2:DescribeRouteTables",
                "ec2:DescribeScheduledInstances",
                "ec2:DescribeSecurityGroupReferences",
                "ec2:DescribeSecurityGroupRules",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSnapshotAttribute",
                "ec2:DescribeSnapshots",
                "ec2:DescribeSpotFleetInstances",
                "ec2:DescribeStaleSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeTags",
                "ec2:DescribeTransitGatewayAttachments",
                "ec2:DescribeTransitGatewayConnectPeers",
                "ec2:DescribeTransitGatewayConnects",
                "ec2:DescribeTransitGatewayMulticastDomains",
                "ec2:DescribeTransitGatewayPeeringAttachments",
                "ec2:DescribeTransitGatewayRouteTables",
                "ec2:DescribeTransitGateways",
                "ec2:DescribeTransitGatewayVpcAttachments",
                "ec2:DescribeVolumeAttribute",
                "ec2:DescribeVolumes",
                "ec2:DescribeVolumesModifications",
                "ec2:DescribeVolumeStatus",
                "ec2:DescribeVpcAttribute",
                "ec2:DescribeVpcClassicLink",
                "ec2:DescribeVpcClassicLinkDnsSupport",
                "ec2:DescribeVpcEndpointConnectionNotifications",
                "ec2:DescribeVpcEndpointConnections",
                "ec2:DescribeVpcEndpoints",
                "ec2:DescribeVpcEndpointServiceConfigurations",
                "ec2:DescribeVpcEndpointServicePermissions",
                "ec2:DescribeVpcEndpointServices",
                "ec2:DescribeVpcPeeringConnections",
                "ec2:DescribeVpcs",
                "ec2:DescribeVpnConnections",
                "ec2:DescribeVpnGateways",
                "ec2:GetAssociatedIpv6PoolCidrs",
                "ec2:GetConsoleOutput",
                "ec2:GetManagedPrefixListEntries",
                "ec2:GetSerialConsoleAccessStatus",
                "ec2:GetTransitGatewayAttachmentPropagations",
                "ec2:GetTransitGatewayMulticastDomainAssociations",
                "ec2:GetTransitGatewayPrefixListReferences",
                "ec2:GetTransitGatewayRouteTableAssociations",
                "ec2:GetTransitGatewayRouteTablePropagations",
                "ec2:ModifyInstanceAttribute",
                "ec2:RebootInstances",
                "ec2:RunInstances",
                "ec2:SearchLocalGatewayRoutes",
                "ec2:SearchTransitGatewayMulticastGroups",
                "ec2:SearchTransitGatewayRoutes",
                "ec2:StartInstances",
                "ec2:StartNetworkInsightsAnalysis",
                "ec2:StopInstances",
                "ec2:TerminateInstances",
                "elasticloadbalancing:ConfigureHealthCheck",
                "elasticloadbalancing:DescribeAccountLimits",
                "elasticloadbalancing:DescribeInstanceHealth",
                "elasticloadbalancing:DescribeListenerCertificates",
                "elasticloadbalancing:DescribeListeners",
                "elasticloadbalancing:DescribeLoadBalancerAttributes",
                "elasticloadbalancing:DescribeLoadBalancerPolicies",
                "elasticloadbalancing:DescribeLoadBalancerPolicyTypes",
                "elasticloadbalancing:DescribeLoadBalancers",
                "elasticloadbalancing:DescribeRules",
                "elasticloadbalancing:DescribeSSLPolicies",
                "elasticloadbalancing:DescribeTags",
                "elasticloadbalancing:DescribeTargetGroupAttributes",
                "elasticloadbalancing:DescribeTargetGroups",
                "elasticloadbalancing:DescribeTargetHealth",
                "iam:GetRole",
                "iam:ListRoles",
                "kms:CreateGrant",
                "route53:GetHostedZone",
                "route53:GetHostedZoneCount",
                "route53:ListHostedZones",
                "route53:ListHostedZonesByName",
                "route53:ListResourceRecordSets",
                "s3:GetBucketTagging",
                "s3:GetObjectAcl",
                "s3:GetObjectTagging",
                "s3:ListAllMyBuckets",
                "sts:DecodeAuthorizationMessage",
                "tiros:CreateQuery",
                "tiros:GetQueryAnswer",
                "tiros:GetQueryExplanation"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::managed-velero*",
                "arn:aws:s3:::*image-registry*"
            ]
        }
    ]
}
```
:::

**ROSA OCM role and policy file**

| Resource | Description |
| --- | --- |
| `ManagedOpenShift-OCM-Role` | You use this IAM role to create and maintain ROSA clusters in  {{ cluster_manager }}. |

:::details{title="`sts_ocm_role_trust_policy.json`"}
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": [
          "arn:aws:iam::%{aws_account_id}:role/RH-Managed-OpenShift-Installer"
        ]
      },
      "Action": [
        "sts:AssumeRole"
      ],
      "Condition": {"StringEquals": {"sts:ExternalId": "%{ocm_organization_id}"}}
    }
  ]
}
```
:::

**ROSA user role and policy file**

| Resource | Description |
| --- | --- |
| `ManagedOpenShift-User-<OCM_user>-Role` | An IAM role used by Red&#160;Hat to verify the customer’s AWS identity. |

:::details{title="`sts_user_role_trust_policy.json`"}
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": [
                    "arn:aws:iam::%{aws_account_id}:role/RH-Managed-OpenShift-Installer"
                ]
            },
            "Action": [
                "sts:AssumeRole"
            ]
        }
    ]
}
```
:::

#### Example CLI output for policies attached to a role {id="rosa-sts-account-wide-roles-and-policies-example-cli-output-for-policies-attached-to-a-role_{{ context }}"}

When a policy is attached to a role, the ROSA CLI displays a confirmation output. The output depends on the type of policy.

*   If the policy is a trust policy, the ROSA CLI outputs the role name and the content of the policy.
    *   For the target role with policy attached, ROSA CLI outputs the role name and the console URL of the target role.
        ```terminal title="Target role with policy attached example output"
        I: Attached trust policy to role 'testrole-Worker-Role(https://console.aws.amazon.com/iam/home?#/roles/testrole-Worker-Role)': ******************
        ```
    *   If the attached policy is a trust policy, the ROSA CLI outputs the content of this policy.
        ```terminal title="Trust policy example output"
        I: Attached trust policy to role 'test-Support-Role': {"Version": "2012-10-17", "Statement": [{"Action": ["sts:AssumeRole"], "Effect": "Allow", "Principal": {"AWS": ["arn:aws:iam::000000000000:role/RH-Technical-Support-00000000"]}}]}
        ```
*   If the policy is a permission policy, the ROSA CLI outputs the name and public link of this policy or the ARN depending on whether or not the policy is an AWS managed policy or customer-managed policy.
    *   If the attached policy is an AWS managed policy, the ROSA CLI outputs the name and public link of this policy and the role it is attached to.
        ```terminal title="AWS managed policy example output"
        I: Attached policy 'ROSASRESupportPolicy(https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSASRESupportPolicy)' to role 'test-HCP-ROSA-Support-Role(https://console.aws.amazon.com/iam/home?#/roles/test-HCP-ROSA-Support-Role)'
        ```
    *   If the attached policy is an AWS managed policy, the ROSA CLI outputs the name and public link of this policy and the role it is attached to.
        ```terminal title="Customer-managed policy example output"
        I: Attached policy 'arn:aws:iam::000000000000:policy/testrole-Worker-Role-Policy' to role 'testrole-Worker-Role(https://console.aws.amazon.com/iam/home?#/roles/testrole-Worker-Role)'
        ```

        **ROSA Ingress Operator IAM policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `ManagedOpenShift-openshift-ingress-operator-cloud-credentials` | An IAM policy that provides the ROSA Ingress Operator with the permissions required to manage external access to a cluster. |

        :::details{title="`openshift_ingress_operator_cloud_credentials_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "elasticloadbalancing:DescribeLoadBalancers",
        "route53:ListHostedZones",
        "route53:ListTagsForResources",
        "route53:ChangeResourceRecordSets",
        "tag:GetResources"
      ],
      "Resource": "*"
    }
  ]
}
        ```
        :::

        **ROSA back-end storage IAM policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `ManagedOpenShift-openshift-cluster-csi-drivers-ebs-cloud-credentials` | An IAM policy required by ROSA to manage back-end storage through the Container Storage Interface (CSI). |

        :::details{title="`openshift_cluster_csi_drivers_ebs_cloud_credentials_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:AttachVolume",
        "ec2:CreateSnapshot",
        "ec2:CreateTags",
        "ec2:CreateVolume",
        "ec2:DeleteSnapshot",
        "ec2:DeleteTags",
        "ec2:DeleteVolume",
        "ec2:DescribeAvailabilityZones",
        "ec2:DescribeInstances",
        "ec2:DescribeSnapshots",
        "ec2:DescribeTags",
        "ec2:DescribeVolumes",
        "ec2:DescribeVolumesModifications",
        "ec2:DetachVolume",
        "ec2:EnableFastSnapshotRestores",
        "ec2:ModifyVolume"
      ],
      "Resource": "*"
    }
  ]
}
        ```
        :::

        **ROSA Machine Config Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `ManagedOpenShift-openshift-machine-api-aws-cloud-credentials` | An IAM policy that provides the ROSA Machine Config Operator with the permissions required to perform core cluster functionality. |

        :::details{title="`openshift_machine_api_aws_cloud_credentials_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:AllocateHosts",
        "ec2:CreateTags",
        "ec2:DescribeAvailabilityZones",
        "ec2:DescribeDhcpOptions",
        "ec2:DescribeImages",
        "ec2:DescribeInstanceTypes",
        "ec2:DescribeInstances",
        "ec2:DescribeInternetGateways",
        "ec2:DescribeRegions",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs",
        "ec2:ReleaseHosts",
        "ec2:RunInstances",
        "ec2:TerminateInstances",
        "elasticloadbalancing:DeregisterTargets",
        "elasticloadbalancing:DescribeLoadBalancers",
        "elasticloadbalancing:DescribeTargetGroups",
        "elasticloadbalancing:DescribeTargetHealth",
        "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
        "elasticloadbalancing:RegisterTargets",
        "iam:CreateServiceLinkedRole",
        "iam:PassRole"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "kms:ReEncrypt*",
        "kms:Decrypt",
        "kms:Encrypt",
        "kms:GenerateDataKey",
        "kms:GenerateDataKeyWithoutPlainText",
        "kms:DescribeKey"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "kms:RevokeGrant",
        "kms:CreateGrant",
        "kms:ListGrants"
      ],
      "Resource": "*",
      "Condition": {
        "Bool": {
          "kms:GrantIsForAWSResource": true
        }
      }
    }
  ]
}
        ```
        :::

        **ROSA Cloud Credential Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `ManagedOpenShift-openshift-cloud-credential-operator-cloud-credentials` | An IAM policy that provides the ROSA Cloud Credential Operator with the permissions required to manage cloud provider credentials. |

        :::details{title="`openshift_cloud_credential_operator_cloud_credential_operator_iam_ro_creds_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iam:GetUser",
        "iam:GetUserPolicy",
        "iam:ListAccessKeys"
      ],
      "Resource": "*"
    }
  ]
}
        ```
        :::

        **ROSA Image Registry Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `ManagedOpenShift-openshift-image-registry-installer-cloud-credentials` | An IAM policy that provides the ROSA Image Registry Operator with the permissions required to manage the {{ product_registry }} storage in AWS S3 for a cluster. |

        :::details{title="`openshift_image_registry_installer_cloud_credentials_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:DeleteBucket",
        "s3:PutBucketTagging",
        "s3:GetBucketTagging",
        "s3:PutBucketPublicAccessBlock",
        "s3:GetBucketPublicAccessBlock",
        "s3:PutEncryptionConfiguration",
        "s3:GetEncryptionConfiguration",
        "s3:PutLifecycleConfiguration",
        "s3:GetLifecycleConfiguration",
        "s3:GetBucketLocation",
        "s3:ListBucket",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucketMultipartUploads",
        "s3:AbortMultipartUpload",
        "s3:ListMultipartUploadParts"
      ],
      "Resource": "*"
    }
  ]
}
        ```
        :::
{% endif %}

{% if openshift_rosa_hcp %}

        **ROSA Manage Subscription policy and policy file**

        | Resource | Description |
        | --- | --- |
        | [`ROSAManageSubscription`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAManageSubscription.html) | This policy streamlines permission setup by packaging necessary access rights, giving entities appropriate control over the ROSA subscription while preventing excessive permissions. |

        **ROSA installer role, policy, and policy files**

        | Resource | Description |
        | --- | --- |
        | `HCP-ROSA-Installer-Role` | An IAM role used by the ROSA installer. |
        | [ROSAInstallerPolicy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAInstallerPolicy.html) | An IAM policy that provides the ROSA installer with the permissions required to complete cluster installation tasks. |
        | `HCP-ROSA-Installer-Role` trust policy | Grants the Red&#160; Hat installer temporary permission to act within your AWS account for the sole purpose of setting up a {{ product_title }} cluster. |

        :::details{title="`sts_hcp_installer_permission_policy.json`"}
        ```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ReadPermissions",
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeAvailabilityZones",
                "ec2:DescribeInternetGateways",
                "ec2:DescribeInstances",
                "ec2:DescribeInstanceTypes",
                "ec2:DescribeRegions",
                "ec2:DescribeReservedInstancesOfferings",
                "ec2:DescribeRouteTables",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSecurityGroupRules",
                "ec2:DescribeSubnets",
                "ec2:DescribeVpcAttribute",
                "ec2:DescribeVpcs",
                "ec2:DescribeInstanceTypeOfferings",
                "ec2:DescribeCapacityReservations",
                "elasticloadbalancing:DescribeAccountLimits",
                "elasticloadbalancing:DescribeLoadBalancers",
                "iam:GetOpenIDConnectProvider",
                "iam:GetRole",
                "route53:GetHostedZone",
                "route53:ListHostedZones",
                "route53:ListHostedZonesByName",
                "route53:ListResourceRecordSets",
                "route53:GetAccountLimit",
                "servicequotas:GetServiceQuota"
            ],
            "Resource": "*"
        },
        {
            "Sid": "PassRoleToEC2",
            "Action": [
                "iam:PassRole"
            ],
            "Resource": [
                "arn:*:iam::*:role/*-ROSA-Worker-Role"
            ],
            "Effect": "Allow",
            "Condition": {
                "StringEquals": {
                    "iam:PassedToService": [
                        "ec2.amazonaws.com"
                    ]
                }
            }
        },
        {
            "Sid": "ManageInstanceProfiles",
            "Effect": "Allow",
            "Action": [
                "iam:AddRoleToInstanceProfile",
                "iam:RemoveRoleFromInstanceProfile",
                "iam:DeleteInstanceProfile",
                "iam:GetInstanceProfile"
            ],
            "Resource": [
                "arn:aws:iam::*:instance-profile/rosa-service-managed-*"
            ]
        },
        {
            "Sid": "CreateInstanceProfiles",
            "Effect": "Allow",
            "Action": [
                "iam:CreateInstanceProfile",
                "iam:TagInstanceProfile"
            ],
            "Resource": [
                "arn:aws:iam::*:instance-profile/rosa-service-managed-*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:RequestTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "GetSecretValue",
            "Effect": "Allow",
            "Action": [
                "secretsmanager:GetSecretValue"
            ],
            "Resource": [
                "*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "Route53ManageRecords",
            "Effect": "Allow",
            "Action": [
                "route53:ChangeResourceRecordSets"
            ],
            "Resource": "*",
            "Condition": {
                "ForAllValues:StringLike": {
                    "route53:ChangeResourceRecordSetsNormalizedRecordNames": [
                        "*.openshiftapps.com",
                        "*.devshift.org",
                        "*.hypershift.local",
                        "*.openshiftusgov.com",
                        "*.devshiftusgov.com"
                    ]
                }
            }
        },
        {
            "Sid": "Route53Manage",
            "Effect": "Allow",
            "Action": [
                "route53:ChangeTagsForResource",
                "route53:CreateHostedZone",
                "route53:DeleteHostedZone"
            ],
            "Resource": "*"
        },
        {
            "Sid": "CreateTags",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateTags"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:instance/*",
                "arn:aws:ec2:*:*:volume/*"
            ],
            "Condition": {
                "StringEquals": {
                    "ec2:CreateAction": [
                        "RunInstances"
                    ]
                }
            }
        },
        {
            "Sid": "RunInstancesNoCondition",
            "Effect": "Allow",
            "Action": "ec2:RunInstances",
            "Resource": [
                "arn:aws:ec2:*:*:subnet/*",
                "arn:aws:ec2:*:*:network-interface/*",
                "arn:aws:ec2:*:*:security-group/*",
                "arn:aws:ec2:*:*:snapshot/*"
            ]
        },
        {
            "Sid": "RunInstancesRestrictedRequestTag",
            "Effect": "Allow",
            "Action": "ec2:RunInstances",
            "Resource": [
                "arn:aws:ec2:*:*:instance/*",
                "arn:aws:ec2:*:*:volume/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:RequestTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "RunInstancesRedHatOwnedAMIs",
            "Effect": "Allow",
            "Action": [
                "ec2:RunInstances"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:image/*"
            ],
            "Condition": {
                "StringEquals": {
                    "ec2:Owner": [
                        "531415883065",
                        "251351625822",
                        "210686502322"
                    ]
                }
            }
        },
        {
            "Sid": "ManageInstancesRestrictedResourceTag",
            "Effect": "Allow",
            "Action": [
                "ec2:TerminateInstances",
                "ec2:GetConsoleOutput"
            ],
            "Resource": "arn:aws:ec2:*:*:instance/*",
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "CreateGrantRestrictedResourceTag",
            "Effect": "Allow",
            "Action": [
                "kms:CreateGrant"
            ],
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat": "true"
                },
                "StringLike": {
                    "kms:ViaService": "ec2.*.amazonaws.com"
                },
                "Bool": {
                  "kms:GrantIsForAWSResource": true
                }
            }
        },
        {
            "Sid": "ManagedKMSRestrictedResourceTag",
            "Effect": "Allow",
            "Action": [
                "kms:DescribeKey",
                "kms:GenerateDataKeyWithoutPlaintext"
            ],
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat": "true"
                }
            }
        },
        {
            "Sid": "CreateSecurityGroups",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateSecurityGroup"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group*/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:RequestTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "DeleteSecurityGroup",
            "Effect": "Allow",
            "Action": [
                "ec2:DeleteSecurityGroup"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group*/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "SecurityGroupIngressEgress",
            "Effect": "Allow",
            "Action": [
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:AuthorizeSecurityGroupEgress",
                "ec2:RevokeSecurityGroupIngress",
                "ec2:RevokeSecurityGroupEgress"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group*/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "CreateSecurityGroupsVPCNoCondition",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateSecurityGroup"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:vpc/*"
            ]
        },
        {
            "Sid": "CreateTagsRestrictedActions",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateTags"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group/*"
            ],
            "Condition": {
                "StringEquals": {
                    "ec2:CreateAction": [
                        "CreateSecurityGroup"
                    ]
                }
            }
        },
        {
            "Sid": "CreateTagsK8sSubnet",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateTags"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:subnet/*"
            ],
            "Condition": {
                "ForAllValues:StringLike": {
                    "aws:TagKeys": [
                        "kubernetes.io/cluster/*"
                    ]
                }
            }
        },
        {
            "Sid": "DeleteTagsK8sSubnet",
            "Effect": "Allow",
            "Action": [
                "ec2:DeleteTags"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:subnet/*"
            ],
            "Condition": {
                "Null": {
                    "aws:TagKeys": "false"
                },
                "ForAllValues:StringLike": {
                    "aws:TagKeys": [
                        "kubernetes.io/cluster/*"
                    ]
                }
            }
        },
        {
            "Sid": "ListPoliciesAttachedToRoles",
            "Effect": "Allow",
            "Action": [
                "iam:ListAttachedRolePolicies",
                "iam:ListRolePolicies"
            ],
            "Resource": "arn:aws:iam::*:role/*",
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        }
    ]
}
        ```
        :::

        :::details{title="`sts_hcp_installer_trust_policy.json`"}
        ```json
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "AWS": "arn:aws:iam::710019948333:role/RH-Managed-OpenShift-Installer"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
        ```
        :::

        **ROSA worker node role, policy, and policy files**

        | Resource | Description |
        | --- | --- |
        | `HCP-ROSA-Worker-Role` | An IAM role used by the compute instances. |
        | [ROSAWorkerInstancePolicy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAWorkerInstancePolicy.html) | An IAM policy that provides the ROSA compute instances with the permissions required to manage their components. |
        | `HCP-ROSA-Worker-Role` trust policy | Allows essential software on your worker nodes to securely connect and talk to the cluster’s control plane, which is managed remotely by Red&#160;Hat. |

        :::details{title="`sts_hcp_worker_instance_permission_policy.json`"}
        ```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "EC2DescribeInstancesRegions",
            "Effect": "Allow",
            "Action": ["ec2:DescribeInstances", "ec2:DescribeRegions"],
            "Resource": "*"
        },
        {
            "Sid": "ECRGetAuthorizationToken",
            "Effect": "Allow",
            "Action": ["ecr:GetAuthorizationToken"],
            "Resource": "*"
        },
        {
            "Sid": "ECRReadOnlyAccessRedHatManaged",
            "Effect": "Allow",
            "Action": [
                "ecr:BatchCheckLayerAvailability",
                "ecr:GetDownloadUrlForLayer",
                "ecr:GetRepositoryPolicy",
                "ecr:DescribeRepositories",
                "ecr:ListImages",
                "ecr:DescribeImages",
                "ecr:BatchGetImage",
                "ecr:ListTagsForResource"
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
        :::

        :::details{title="`sts_hcp_worker_instance_trust_policy.json`"}
        ```json
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "Service": "ec2.amazonaws.com"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
        ```
        :::

        **ROSA support role, policy, and policy files**

        | Resource | Description |
        | --- | --- |
        | `HCP-ROSA-Support-Role` | An IAM role used by the Red Hat Site Reliability Engineering (SRE) support team. |
        | [ROSASRESupportPolicy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSASRESupportPolicy.html) | An IAM policy that provides the Red Hat SRE support team with the permissions required to support ROSA clusters. |
        | `HCP-ROSA-Support-Role` trust policy | Provides a secure mechanism for authorized Red Hat Site Reliability Engineers (SREs) to perform diagnostic and support functions on the cluster. |

        :::details{title="`sts_hcp_support_permission_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadPermissions",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeAvailabilityZones",
        "ec2:DescribeRegions",
        "sts:DecodeAuthorizationMessage"
      ],
      "Resource": "*"
    },
    {
      "Sid": "Route53",
      "Effect": "Allow",
      "Action": [
        "route53:GetHostedZone",
        "route53:GetHostedZoneCount",
        "route53:ListHostedZones",
        "route53:ListHostedZonesByName",
        "route53:ListResourceRecordSets"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "DecribeIAMRoles",
      "Effect": "Allow",
      "Action": [
        "iam:GetRole",
        "iam:ListRoles"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "EC2DescribeInstance",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:DescribeInstanceStatus",
        "ec2:DescribeIamInstanceProfileAssociations",
        "ec2:DescribeReservedInstances",
        "ec2:DescribeScheduledInstances"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "VPCNetwork",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeDhcpOptions",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeSubnets",
        "ec2:DescribeRouteTables"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "Cloudtrail",
      "Effect": "Allow",
      "Action": [
        "cloudtrail:DescribeTrails",
        "cloudtrail:LookupEvents"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "Cloudwatch",
      "Effect": "Allow",
      "Action": [
        "cloudwatch:GetMetricData",
        "cloudwatch:GetMetricStatistics",
        "cloudwatch:ListMetrics"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "DescribeVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeVolumes",
        "ec2:DescribeVolumesModifications",
        "ec2:DescribeVolumeStatus"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "DescribeLoadBalancers",
      "Effect": "Allow",
      "Action": [
        "elasticloadbalancing:DescribeAccountLimits",
        "elasticloadbalancing:DescribeInstanceHealth",
        "elasticloadbalancing:DescribeListenerCertificates",
        "elasticloadbalancing:DescribeListeners",
        "elasticloadbalancing:DescribeLoadBalancerAttributes",
        "elasticloadbalancing:DescribeLoadBalancerPolicies",
        "elasticloadbalancing:DescribeLoadBalancerPolicyTypes",
        "elasticloadbalancing:DescribeLoadBalancers",
        "elasticloadbalancing:DescribeRules",
        "elasticloadbalancing:DescribeSSLPolicies",
        "elasticloadbalancing:DescribeTags",
        "elasticloadbalancing:DescribeTargetGroupAttributes",
        "elasticloadbalancing:DescribeTargetGroups",
        "elasticloadbalancing:DescribeTargetHealth"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "DescribeVPC",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeVpcEndpointConnections",
        "ec2:DescribeVpcEndpoints"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "DescribeSecurityGroups",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeSecurityGroupReferences",
        "ec2:DescribeSecurityGroupRules",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeStaleSecurityGroups"
      ],
      "Resource": "*"
    },
    {
      "Sid": "DescribeAddressesAttribute",
      "Effect": "Allow",
      "Action": "ec2:DescribeAddressesAttribute",
      "Resource": "arn:aws:ec2:*:*:elastic-ip/*"
    },
    {
      "Sid": "DescribeInstance",
      "Effect": "Allow",
      "Action": [
        "iam:GetInstanceProfile"
      ],
      "Resource": "arn:aws:iam::*:instance-profile/*",
      "Condition": {
        "StringEquals": {
            "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "DescribeSpotFleetInstances",
      "Effect": "Allow",
      "Action": "ec2:DescribeSpotFleetInstances",
      "Resource": "arn:aws:ec2:*:*:spot-fleet-request/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "DescribeVolumeAttribute",
      "Effect": "Allow",
      "Action": "ec2:DescribeVolumeAttribute",
      "Resource": "arn:aws:ec2:*:*:volume/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "ManageInstanceLifecycle",
      "Effect": "Allow",
      "Action": [
        "ec2:RebootInstances",
        "ec2:StartInstances",
        "ec2:StopInstances",
        "ec2:TerminateInstances"
      ],
      "Resource": "arn:aws:ec2:*:*:instance/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    }
  ]
}
        ```
        :::

        :::details{title="`sts_hcp_support_trust_policy.json`"}
        ```json
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "AWS": "arn:aws:iam::710019948333:role/RH-Technical-Support-15234082"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
        ```
        :::

        **ROSA Kube Controller Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `openshift-hcp-kube-controller-manager-credentials` | An IAM policy that grants permissions to the kube controller to manage Amazon EC2, Elastic Load Balancing, and AWS KMS resources. |

        :::details{title="`openshift-hcp_kube-controller-manager-credentials-policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadPermissions",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeAvailabilityZones",
        "ec2:DescribeInstances",
        "ec2:DescribeRouteTables",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs",
        "elasticloadbalancing:DescribeLoadBalancers",
        "elasticloadbalancing:DescribeLoadBalancerAttributes",
        "elasticloadbalancing:DescribeListeners",
        "elasticloadbalancing:DescribeTargetGroups",
        "elasticloadbalancing:DescribeTargetGroupAttributes",
        "elasticloadbalancing:DescribeTargetHealth",
        "elasticloadbalancing:DescribeLoadBalancerPolicies"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "KMSDescribeKey",
      "Effect": "Allow",
      "Action": [
        "kms:DescribeKey"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        }
      }
    },
    {
      "Sid": "LoadBalanacerManagement",
      "Effect": "Allow",
      "Action": [
        "elasticloadbalancing:AddTags",
        "elasticloadbalancing:ConfigureHealthCheck",
        "elasticloadbalancing:CreateLoadBalancerPolicy",
        "elasticloadbalancing:DeleteLoadBalancer",
        "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
        "elasticloadbalancing:ModifyLoadBalancerAttributes",
        "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
        "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "CreateTargetGroup",
      "Effect": "Allow",
      "Action": [
        "elasticloadbalancing:CreateTargetGroup"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:RequestTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "LoadBalanacerManagementResourceTag",
      "Effect": "Allow",
      "Action": [
        "elasticloadbalancing:DeleteListener",
        "elasticloadbalancing:RegisterTargets",
        "elasticloadbalancing:ModifyTargetGroup",
        "elasticloadbalancing:DeleteTargetGroup",
        "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",
        "elasticloadbalancing:CreateLoadBalancerListeners",
        "elasticloadbalancing:DeleteLoadBalancerListeners",
        "elasticloadbalancing:AttachLoadBalancerToSubnets",
        "elasticloadbalancing:DetachLoadBalancerFromSubnets",
        "elasticloadbalancing:ModifyListener",
        "elasticloadbalancing:SetLoadBalancerPoliciesOfListener"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CreateListeners",
      "Effect": "Allow",
      "Action": [
          "elasticloadbalancing:CreateListener"
      ],
      "Resource": [
          "*"
      ],
      "Condition": {
          "StringEquals": {
              "aws:RequestTag/red-hat-managed": "true",
              "aws:ResourceTag/red-hat-managed": "true"
          }
      }
  },
    {
      "Sid": "CreateSecurityGroup",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateSecurityGroup"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:security-group/*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:RequestTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CreateSecurityGroupVpc",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateSecurityGroup"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:vpc/*"
      ]
    },
    {
      "Sid": "CreateLoadBalancer",
      "Effect": "Allow",
      "Action": [
        "elasticloadbalancing:CreateLoadBalancer"
      ],
      "Resource": [
        "arn:aws:elasticloadbalancing:*:*:loadbalancer/*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:RequestTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "ModifySecurityGroup",
      "Effect": "Allow",
      "Action": [
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:RevokeSecurityGroupIngress",
        "ec2:DeleteSecurityGroup"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:security-group/*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CreateTagsSecurityGroups",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateTags"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:security-group/*"
      ],
      "Condition": {
        "StringEquals": {
          "ec2:CreateAction": "CreateSecurityGroup"
        }
      }
    },
    {
      "Sid" : "ManageTargetGroup",
      "Effect" : "Allow",
      "Action" : [
        "elasticloadbalancing:ModifyTargetGroupAttributes",
        "elasticloadbalancing:DeregisterTargets"
      ],
      "Resource" : [
        "arn:aws:elasticloadbalancing:*:*:targetgroup/*"
      ],
      "Condition" : {
        "StringEquals" : {
          "aws:ResourceTag/red-hat-managed" : "true"
        }
      }
    }
  ]
}
        ```
        :::

        **ROSA Control Plane Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `openshift-hcp-control-plane-operator-credentials-policy` | An IAM policy that grants required permissions to the Control Plane Operator to manage Amazon EC2 and Route 53 resources. |

        :::details{title="`openshift_hcp_control_plane_operator_credentials_policy.json`"}
        ```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ReadPermissions",
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeVpcEndpoints",
                "ec2:DescribeVpcs",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "route53:ListHostedZones"
            ],
            "Resource": "*"
        },
        {
            "Sid": "CreateSecurityGroups",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateSecurityGroup"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group*/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:RequestTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "DeleteSecurityGroup",
            "Effect": "Allow",
            "Action": [
                "ec2:DeleteSecurityGroup"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group*/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "SecurityGroupIngressEgress",
            "Effect": "Allow",
            "Action": [
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:AuthorizeSecurityGroupEgress",
                "ec2:RevokeSecurityGroupIngress",
                "ec2:RevokeSecurityGroupEgress"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group*/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "CreateSecurityGroupsVPCNoCondition",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateSecurityGroup"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:vpc/*"
            ]
        },
        {
            "Sid": "ListResourceRecordSets",
            "Effect": "Allow",
            "Action": [
                "route53:ListResourceRecordSets"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Sid": "ChangeResourceRecordSetsRestrictedRecordNames",
            "Effect": "Allow",
            "Action": [
                "route53:ChangeResourceRecordSets"
            ],
            "Resource": [
                "*"
            ],
            "Condition": {
                "ForAllValues:StringLike": {
                    "route53:ChangeResourceRecordSetsNormalizedRecordNames": [
                        "*.hypershift.local"
                    ]
                }
            }
        },
        {
            "Sid": "VPCEndpointWithCondition",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateVpcEndpoint"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:vpc-endpoint/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:RequestTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "VPCEndpointResourceTagCondition",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateVpcEndpoint"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group*/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "VPCEndpointNoCondition",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateVpcEndpoint"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:vpc/*",
                "arn:aws:ec2:*:*:subnet/*",
                "arn:aws:ec2:*:*:route-table/*"
            ]
        },
        {
            "Sid": "ManageVPCEndpointWithCondition",
            "Effect": "Allow",
            "Action": [
                "ec2:ModifyVpcEndpoint",
                "ec2:DeleteVpcEndpoints"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:vpc-endpoint/*",
                "arn:aws:ec2:*:*:security-group/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                }
            }
        },
        {
            "Sid": "ModifyVPCEndpointNoCondition",
            "Effect": "Allow",
            "Action": [
                "ec2:ModifyVpcEndpoint"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:subnet/*"
            ]
        },
        {
            "Sid": "CreateTagsRestrictedActions",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateTags"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:vpc-endpoint/*",
                "arn:aws:ec2:*:*:security-group/*"
            ],
            "Condition": {
                "StringEquals": {
                    "ec2:CreateAction": [
                        "CreateVpcEndpoint",
                        "CreateSecurityGroup"
                    ]
                }
            }
        },
        {
            "Sid": "AddDeleteTagsRedHatManagedSecurityGroups",
            "Effect": "Allow",
            "Action": [
                "ec2:CreateTags",
                "ec2:DeleteTags"
            ],
            "Resource": [
                "arn:aws:ec2:*:*:security-group/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/red-hat-managed": "true"
                },
                "ForAllValues:StringNotEquals": {
                    "aws:TagKeys": [
                        "red-hat-managed"
                    ]
                },
                "Null": {
                    "aws:TagKeys": "false"
                }
            }
        }
    ]
}
        ```
        :::

        **ROSA Node Pool Management Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `openshift-hcp-capa-controller-manager-credentials-policy` | An IAM policy that grants required permissions to the NodePool controller to describe, run, and terminate Amazon EC2 instances managed as worker nodes. This policy also grants permissions to allow for disk encryption of the worker node root volume using AWS KMS keys, and to tag the elastic network interface that is attached to the worker node. |

        :::details{title="`openshift_hcp_capa_controller_manager_credentials_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadPermissions",      
      "Action": [
        "ec2:DescribeDhcpOptions",
        "ec2:DescribeImages",
        "ec2:DescribeInstances",
        "ec2:DescribeInstanceTypes",
        "ec2:DescribeInternetGateways",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeNetworkInterfaceAttribute",
        "ec2:DescribeRouteTables",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "CreateServiceLinkedRole",
      "Action": [
        "iam:CreateServiceLinkedRole"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:*:iam::*:role/aws-service-role/elasticloadbalancing.amazonaws.com/AWSServiceRoleForElasticLoadBalancing"
      ],
      "Condition": {
        "StringLike": {
          "iam:AWSServiceName": "elasticloadbalancing.amazonaws.com"
        }
      }
    },
    {
      "Sid": "PassWorkerRole",
      "Action": [
        "iam:PassRole"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:*:iam::*:role/*-ROSA-Worker-Role"
      ],
      "Condition": {
        "StringEquals": {
          "iam:PassedToService": [
              "ec2.amazonaws.com"
          ]
        }
      }
    },
    {
      "Sid": "AuthorizeSecurityGroupIngressRestrictedResourceTag",
      "Effect": "Allow",
      "Action": [
        "ec2:AuthorizeSecurityGroupIngress"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:security-group/*",
        "arn:aws:ec2:*:*:security-group-rule/*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "NetworkInterfaces",
      "Effect": "Allow",
      "Action": [
        "ec2:ModifyNetworkInterfaceAttribute"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:instance/*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "NetworkInterfacesNoCondition",
      "Effect": "Allow",
      "Action": [
        "ec2:ModifyNetworkInterfaceAttribute"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:network-interface/*",
        "arn:aws:ec2:*:*:security-group/*",
        "arn:aws:ec2:*:*:vpc/*"
      ]
    },
    {
      "Sid": "TerminateInstances",
      "Effect": "Allow",
      "Action": [
        "ec2:TerminateInstances"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:instance/*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CreateTags",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateTags"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:instance/*",
        "arn:aws:ec2:*:*:volume/*",
        "arn:aws:ec2:*:*:network-interface/*"
      ],
      "Condition": {
        "StringEquals": {
            "ec2:CreateAction": [
                "RunInstances"
            ]
        }
      }
    },
    {
      "Sid": "CreateTagsCAPAControllerReconcileNetworkInterface",
      "Effect": "Allow",
      "Action": [
          "ec2:CreateTags"
      ],
      "Resource": [
          "arn:aws:ec2:*:*:network-interface/*"
      ],
      "Condition": {
        "StringEquals": {
              "aws:RequestTag/red-hat-managed": "true"
          }
       }
    },
    {
      "Sid": "CreateTagsCAPAControllerReconcileInstance",
      "Effect": "Allow",
      "Action": [
          "ec2:CreateTags"
      ],
      "Resource": [
          "arn:aws:ec2:*:*:instance/*"
      ],
      "Condition": {
          "StringEquals": {
              "aws:ResourceTag/red-hat-managed": "true"
          }
      }
    },
    {
      "Sid": "CreateTagsCAPAControllerReconcileVolume",
      "Effect": "Allow",
      "Action": [
          "ec2:CreateTags"
      ],
      "Resource": [
          "arn:aws:ec2:*:*:volume/*"
      ],
      "Condition": {
          "StringEquals": {
              "aws:RequestTag/red-hat-managed": "true"
          }
      }
    },
    {
      "Sid": "RunInstancesRequest",
      "Effect": "Allow",
      "Action": [
        "ec2:RunInstances"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:instance/*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:RequestTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "RunInstancesNoCondition",
      "Effect": "Allow",
      "Action": [
        "ec2:RunInstances"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:network-interface/*",
        "arn:aws:ec2:*:*:subnet/*",
        "arn:aws:ec2:*:*:security-group/*",
        "arn:aws:ec2:*:*:volume/*",
        "arn:aws:ec2:*:*:capacity-reservation/*"
      ]
    },
    {
      "Sid": "RunInstancesRedHatAMI",
      "Effect": "Allow",
      "Action": [
        "ec2:RunInstances"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:image/*"
      ],
      "Condition": {
        "StringEquals": {
          "ec2:Owner": [
            "531415883065",
            "251351625822"
          ]
        }
      }
    },
    {
      "Sid": "NodePoolSQSActions",
      "Effect": "Allow",
      "Action": [
        "sqs:DeleteMessage",
        "sqs:ReceiveMessage"
      ],
      "Resource": [
        "arn:aws:sqs:*:*:*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        }
      }
    },
    {
      "Sid": "ManagedKMSRestrictedResourceTag",
      "Effect": "Allow",
      "Action": [
        "kms:DescribeKey",
        "kms:GenerateDataKeyWithoutPlaintext"
      ],
      "Resource": "*",
      "Condition": {
        "StringLike": {
          "aws:ResourceTag/red-hat": "true"
        }
      }
    },
    {
      "Sid": "CreateGrantRestricted",
      "Effect": "Allow",
      "Action": [
        "kms:CreateGrant"
      ],
      "Resource": "*",
      "Condition": {
        "Bool": {
          "kms:GrantIsForAWSResource": true
        },
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        },
        "StringLike": {
          "kms:ViaService": "ec2.*.amazonaws.com"
        }
      }
    }
  ]
}
        ```
        :::

        **ROSA Image Registry Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `openshift-hcp-image-registry-operator-permission-policy` | An IAM policy that grants required permissions to the Image Registry Operator to provision and manage resources for the ROSA in-cluster image registry and dependent services, including S3. This is required so that the operator can install and maintain the internal registry of a ROSA cluster. |

        :::details{title="`openshift_hcp_image_registry_operator_permission_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListBuckets",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:ListBucketMultipartUploads"
      ],
      "Resource": "*"
    },
    {
      "Sid": "AllowSpecificBucketActions",
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:DeleteBucket",
        "s3:GetBucketTagging",
        "s3:GetBucketPublicAccessBlock",
        "s3:GetEncryptionConfiguration",
        "s3:GetLifecycleConfiguration",
        "s3:GetBucketLocation",
        "s3:PutBucketPublicAccessBlock",
        "s3:PutBucketTagging",
        "s3:PutEncryptionConfiguration",
        "s3:PutLifecycleConfiguration"
      ],
      "Resource": [
        "arn:aws:s3:::*-image-registry-${aws:RequestedRegion}-*",
        "arn:aws:s3:::*-image-registry-${aws:RequestedRegion}?",
        "arn:aws:s3:::*-image-registry-${aws:RequestedRegion}"
      ]
    },
    {
      "Sid": "AllowSpecificObjectActions",
      "Effect": "Allow",
      "Action": [
        "s3:AbortMultipartUpload",
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:ListMultipartUploadParts",
        "s3:PutObject"
      ],
      "Resource": [
        "arn:aws:s3:::*-image-registry-${aws:RequestedRegion}-*/*",
        "arn:aws:s3:::*-image-registry-${aws:RequestedRegion}?/*",
        "arn:aws:s3:::*-image-registry-${aws:RequestedRegion}/*"
      ]
    }
  ]
}
        ```
        :::

        **ROSA Amazon EBSCI Driver Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `openshift-hcp-cluster-csi-driver-ebs-operator-cloud-credentials-policy` | An IAM policy that grants necessary permissions to the Amazon EBS CSI Driver Operator to install and maintain the Amazon EBS CSI driver on a ROSA cluster. |

        :::details{title="`openshift_hcp_cluster_csi_driver_ebs_operator_cloud_credentials_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadOnlyDescribeOperations",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeAvailabilityZones",
        "ec2:DescribeInstances",
        "ec2:DescribeInstanceTypes",
        "ec2:DescribeSnapshots",
        "ec2:DescribeTags",
        "ec2:DescribeVolumes",
        "ec2:DescribeVolumesModifications",
        "ec2:DescribeVolumeStatus"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CreateAndCopyVolumesWithManagedTag",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateVolume",
        "ec2:CopyVolumes"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/*",
      "Condition": {
        "StringEquals": {
          "aws:RequestTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CopyManagedVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:CopyVolumes"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/vol-*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CopyUserBroughtVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:CopyVolumes"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/vol-*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        }
      }
    },
    {
      "Sid": "CreateSnapshotsWithManagedTag",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateSnapshot"
      ],
      "Resource": "arn:aws:ec2:*:*:snapshot/*",
      "Condition": {
        "StringEquals": {
          "aws:RequestTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CreateSnapshotsFromManagedVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateSnapshot"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CreateSnapshotsFromUserBroughtVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateSnapshot"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        }
      }
    },
    {
      "Sid": "ManageManagedVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:ModifyVolume",
        "ec2:AttachVolume",
        "ec2:DetachVolume",
        "ec2:DeleteVolume"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "ManageUserBroughtVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:ModifyVolume",
        "ec2:AttachVolume",
        "ec2:DetachVolume",
        "ec2:DeleteVolume"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        }
      }
    },
    {
      "Sid": "CreateVolumesFromAndEnableFSROnManagedSnapshots",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateVolume",
        "ec2:EnableFastSnapshotRestores"
      ],
      "Resource": "arn:aws:ec2:*:*:snapshot/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "CreateVolumesFromAndEnableFSROnUserBroughtSnapshots",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateVolume",
        "ec2:EnableFastSnapshotRestores"
      ],
      "Resource": "arn:aws:ec2:*:*:snapshot/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        }
      }
    },
    {
      "Sid": "AttachDetachVolumesToManagedInstances",
      "Effect": "Allow",
      "Action": [
        "ec2:AttachVolume",
        "ec2:DetachVolume"
      ],
      "Resource": "arn:aws:ec2:*:*:instance/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "DeleteAndLockManagedSnapshots",
      "Effect": "Allow",
      "Action": [
        "ec2:DeleteSnapshot",
        "ec2:LockSnapshot"
      ],
      "Resource": "arn:aws:ec2:*:*:snapshot/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    },
    {
      "Sid": "DeleteAndLockUserBroughtSnapshots",
      "Effect": "Allow",
      "Action": [
        "ec2:DeleteSnapshot",
        "ec2:LockSnapshot"
      ],
      "Resource": "arn:aws:ec2:*:*:snapshot/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        }
      }
    },
    {
      "Sid": "TagResourcesOnCreation",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateTags"
      ],
      "Resource": [
        "arn:aws:ec2:*:*:volume/*",
        "arn:aws:ec2:*:*:snapshot/*"
      ],
      "Condition": {
        "StringEquals": {
          "ec2:CreateAction": [
            "CreateVolume",
            "CreateSnapshot",
            "CopyVolumes"
          ]
        }
      }
    },
    {
      "Sid": "ModifyTagsOnManagedVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateTags",
        "ec2:DeleteTags"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        },
        "Null": {
          "aws:TagKeys": "false"
        },
        "ForAllValues:StringNotEquals": {
          "aws:TagKeys": [
            "red-hat-managed",
            "ebs.csi.aws.com/cluster",
            "kubernetes.io/created-for/pvc/name"
          ]
        }
      }
    },
    {
      "Sid": "ModifyTagsOnUserBroughtVolumes",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateTags",
        "ec2:DeleteTags"
      ],
      "Resource": "arn:aws:ec2:*:*:volume/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        },
        "Null": {
          "aws:TagKeys": "false"
        },
        "ForAllValues:StringNotEquals": {
          "aws:TagKeys": [
            "red-hat-managed",
            "red-hat",
            "ebs.csi.aws.com/cluster",
            "kubernetes.io/created-for/pvc/name"
          ]
        }
      }
    },
    {
      "Sid": "KMSEncryptedVolumes",
      "Effect": "Allow",
      "Action": [
        "kms:Decrypt",
        "kms:GenerateDataKeyWithoutPlaintext",
        "kms:ReEncryptFrom",
        "kms:ReEncryptTo"
      ],
      "Resource": "arn:aws:kms:*:*:key/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        },
        "StringLike": {
          "kms:ViaService": "ec2.*.amazonaws.com"
        },
        "Null": {
          "kms:EncryptionContextKeys": false
        },
        "ForAllValues:StringEquals": {
          "kms:EncryptionContextKeys": [
            "aws:ebs:id"
          ]
        }
      }
    },
    {
      "Sid": "KMSCreateGrant",
      "Effect": "Allow",
      "Action": [
        "kms:CreateGrant"
      ],
      "Resource": "arn:aws:kms:*:*:key/*",
      "Condition": {
        "Bool": {
          "kms:GrantIsForAWSResource": true
        },
        "StringLike": {
          "kms:ViaService": "ec2.*.amazonaws.com"
        },
        "StringEquals": {
          "kms:GrantConstraintType": "EncryptionContextSubset",
          "aws:ResourceTag/red-hat": "true"
        },
        "Null": {
          "kms:EncryptionContextKeys": false
        },
        "ForAllValues:StringEquals": {
          "kms:GrantOperations": [
            "Decrypt",
            "GenerateDataKeyWithoutPlaintext",
            "ReEncryptFrom",
            "ReEncryptTo"
          ],
          "kms:EncryptionContextKeys": [
            "aws:ebs:id"
          ]
        }
      }
    },
    {
      "Sid": "DescribeKMSKeysForEBSVolumeEncryption",
      "Effect": "Allow",
      "Action": "kms:DescribeKey",
      "Resource": "arn:aws:kms:*:*:key/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat": "true"
        },
        "StringLike": {
          "kms:ViaService": "ec2.*.amazonaws.com"
        }
      }
    }
  ]
}
        ```
        :::

        **ROSA Cloud Network Config Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `openshift-hcp-cloud-network-config-cloud-credentials-permission-policy` | An IAM policy that grants necessary permissions to the Amazon EBS CSI Driver Operator to install and maintain the Amazon EBS CSI driver on a ROSA cluster. |

        :::details{title="`openshift_hcp_cloud_network_config_cloud_credentials_permission_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
            "ec2:DescribeInstances",
            "ec2:DescribeInstanceStatus",
            "ec2:DescribeInstanceTypes",
            "ec2:DescribeSubnets",
            "ec2:DescribeNetworkInterfaces"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
            "ec2:UnassignPrivateIpAddresses",
            "ec2:AssignPrivateIpAddresses",
            "ec2:UnassignIpv6Addresses",
            "ec2:AssignIpv6Addresses"
      ],
      "Resource": "arn:aws:ec2:*:*:network-interface/*",
      "Condition": {
        "StringEquals": {
          "aws:ResourceTag/red-hat-managed": "true"
        }
      }
    }
  ]
}
        ```
        :::

        **ROSA Ingress Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `openshift-hcp-cluster-ingress-operator-cloud-credentials-policy` | An IAM policy that provides the ROSA Ingress Operator with the permissions required to manage external access to a cluster. |

        :::details{title="`openshift_hcp_cluster_ingress_operator_cloud_credentials_policy.json`"}
        ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "elasticloadbalancing:DescribeLoadBalancers",
        "route53:ListHostedZones",
        "tag:GetResources"
      ],
      "Resource": "*"
    },
    {
          "Effect": "Allow",
          "Action": [
              "route53:ChangeResourceRecordSets"
          ],
          "Resource": "*",
          "Condition": {
              "ForAllValues:StringLike": {
                  "route53:ChangeResourceRecordSetsNormalizedRecordNames": [
                    "*.openshiftapps.com",
                    "*.devshift.org",
                    "*.openshiftusgov.com",
                    "*.devshiftusgov.com"
                  ]
              }
          }
    }
  ]
}

        ```
        :::

        **ROSA KMS Provider Operator policy and policy file**

        | Resource | Description |
        | --- | --- |
        | `openshift-hcp-kms-provider-credential-policy.` | An IAM policy grants required permissions to the built-in AWS Encryption Provider to manage AWS KMS keys that support etcd data encryption. This policy allows Amazon EC2 to use KMS keys that the AWS Encryption Provider provides to encrypt and decrypt etcd data. |

        :::details{title="`openshift_hcp_kms_provider_credential_policy.json`"}
        ```json
{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "VolumeEncryption",
        "Effect": "Allow",
        "Action": [
          "kms:Encrypt",
          "kms:Decrypt",
          "kms:DescribeKey"
        ],
        "Resource": "*",
        "Condition": {
          "StringEquals": {
            "aws:ResourceTag/red-hat": "true"
          }
        }
      }
    ]
}
        ```
        :::

{% endif %}