{%- set _mod_docs_content_type = "REFERENCE" %}
# Account-wide IAM roles and policies reference {id="rosa-sts-account-wide-roles-and-policies-reference_{{ context }}"}

{{ product_title }} clusters that use Security Token Service (STS) require the following account-wide Identity and Access Management (IAM) roles and policies. Review roles and policies descriptions and the example JSON files that define each policy. {._abstract}

**{{ product_title }} Manage Subscription policy and policy file**

| Resource | Description |
| --- | --- |
| [`ROSAManageSubscription`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAManageSubscription.html) | This policy streamlines permission setup by packaging necessary access rights, giving entities appropriate control over the {{ product_title }} subscription while preventing excessive permissions. |

**{{ product_title }} installer role, policy, and policy files**

| Resource | Description |
| --- | --- |
| `HCP-ROSA-Installer-Role` | An IAM role used by the {{ product_title }} installer. |
| [ROSAInstallerPolicy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAInstallerPolicy.html) | An IAM policy that provides the {{ product_title }} installer with the permissions required to complete cluster installation tasks. |
| `HCP-ROSA-Installer-Role` trust policy | Grants the Red&#160;Hat installer temporary permission to act within your AWS account for the sole purpose of setting up a {{ product_title }} cluster. |

```json title="Example sts_hcp_installer_permission_policy.json"
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

```json title="Example sts_hcp_installer_trust_policy.json"
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

**{{ product_title }} worker node role, policy, and policy files**

| Resource | Description |
| --- | --- |
| `HCP-ROSA-Worker-Role` | An IAM role used by the compute instances. |
| [ROSAWorkerInstancePolicy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAWorkerInstancePolicy.html) | An IAM policy that provides the {{ product_title }} compute instances with the permissions required to manage their components. |
| `HCP-ROSA-Worker-Role` trust policy | Allows essential software on your worker nodes to securely connect and talk to the cluster’s control plane, which is managed remotely by Red&#160;Hat. |

```json title="Example sts_hcp_worker_instance_permission_policy.json"
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

```json title="Example sts_hcp_worker_instance_trust_policy.json"
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

**{{ product_title }} support role, policy, and policy files**

| Resource | Description |
| --- | --- |
| `HCP-ROSA-Support-Role` | An IAM role used by the Red Hat Site Reliability Engineering (SRE) support team. |
| [ROSASRESupportPolicy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSASRESupportPolicy.html) | An IAM policy that provides the Red Hat SRE support team with the permissions required to support {{ product_title }} clusters. |
| `HCP-ROSA-Support-Role` trust policy | Provides a secure mechanism for authorized Red Hat Site Reliability Engineers (SREs) to perform diagnostic and support functions on the cluster. |

```json title="Example sts_hcp_support_permission_policy.json"
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

```json title="Example sts_hcp_support_trust_policy.json"
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

**{{ product_title }} Kube Controller Operator policy and policy file**

| Resource | Description |
| --- | --- |
| `openshift-hcp-kube-controller-manager-credentials` | An IAM policy that grants permissions to the kube controller to manage Amazon EC2, Elastic Load Balancing, and AWS KMS resources. |

```json title="Example openshift-hcp_kube-controller-manager-credentials-policy.json"
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
        "elasticloadbalancing:SetSecurityGroups",
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

**{{ product_title }} Control Plane Operator policy and policy file**

| Resource | Description |
| --- | --- |
| `openshift-hcp-control-plane-operator-credentials-policy` | An IAM policy that grants required permissions to the Control Plane Operator to manage Amazon EC2 and Route 53 resources. |

```json title="Example openshift_hcp_control_plane_operator_credentials_policy.json"
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

**{{ product_title }} Node Pool Management Operator policy and policy file**

| Resource | Description |
| --- | --- |
| `openshift-hcp-capa-controller-manager-credentials-policy` | An IAM policy that grants required permissions to the NodePool controller to describe, run, and terminate Amazon EC2 instances managed as worker nodes. This policy also grants permissions to allow for disk encryption of the worker node root volume using AWS KMS keys, and to tag the elastic network interface that is attached to the worker node. |

```json title="Example openshift_hcp_capa_controller_manager_credentials_policy.json"
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

**{{ product_title }} Image Registry Operator policy and policy file**

| Resource | Description |
| --- | --- |
| `openshift-hcp-image-registry-operator-permission-policy` | An IAM policy that grants required permissions to the Image Registry Operator to provision and manage resources for the {{ product_title }} in-cluster image registry and dependent services, including S3. This is required so that the operator can install and maintain the internal registry of a {{ product_title }} cluster. |

```json title="Example openshift_hcp_image_registry_operator_permission_policy.json"
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

**{{ product_title }} Amazon EBSCI Driver Operator policy and policy file**

| Resource | Description |
| --- | --- |
| `openshift-hcp-cluster-csi-driver-ebs-operator-cloud-credentials-policy` | An IAM policy that grants necessary permissions to the Amazon EBS CSI Driver Operator to install and maintain the Amazon EBS CSI driver on a {{ product_title }} cluster. |

```json title="Example openshift_hcp_cluster_csi_driver_ebs_operator_cloud_credentials_policy.json"
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

**{{ product_title }} Cloud Network Config Operator policy and policy file**

| Resource | Description |
| --- | --- |
| `openshift-hcp-cloud-network-config-cloud-credentials-permission-policy` | An IAM policy that grants necessary permissions to the Cloud Network Config Operator to manage cloud network configuration on a {{ product_title }} cluster. |

```json title="Example openshift_hcp_cloud_network_config_cloud_credentials_permission_policy.json"
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

**{{ product_title }} Ingress Operator policy and policy file**

| Resource | Description |
| --- | --- |
| `openshift-hcp-cluster-ingress-operator-cloud-credentials-policy` | An IAM policy that provides the {{ product_title }} Ingress Operator with the permissions required to manage external access to a cluster. |

```json title="Example openshift_hcp_cluster_ingress_operator_cloud_credentials_policy.json"
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

**{{ product_title }} KMS Provider Operator policy and policy file**

| Resource | Description |
| --- | --- |
| `openshift-hcp-kms-provider-credential-policy.` | An IAM policy that grants required permissions to the built-in AWS Encryption Provider to manage AWS KMS keys that support etcd data encryption. This policy allows Amazon EC2 to use KMS keys that the AWS Encryption Provider provides to encrypt and decrypt etcd data. |

```json title="Example openshift_hcp_kms_provider_credential_policy.json"
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