{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS STS authentication {id="rosa-hcp-acquire-aws-sts-authentication_{{ context }}"}

{{ product_title }} uses the Amazon Web Services (AWS) Security Token Service (STS) for AWS Identity and Access Management (IAM) to obtain the necessary credentials to interact with resources in your AWS account. {._abstract}

**Additional resources**
{._additional-resources}

*   [AWS STS documentation](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html)
*   [AWS compute types](/rosa_architecture/rosa_policy_service_definition/rosa-hcp-service-definition#rosa-sdpolicy-instance-types_rosa-hcp-service-definition)
*   [Provisioned AWS infrastructure](/rosa_planning/rosa-sts-aws-prereqs#rosa-ec2-instances_rosa-sts-aws-prereqs)
*   [`ROSAInstallerPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAInstallerPolicy.html)
*   [`ROSAWorkerInstancePolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAWorkerInstancePolicy.html)
*   [`ROSASRESupportPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSASRESupportPolicy.html)
*   [`ROSAIngressOperatorPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAIngressOperatorPolicy.html)
*   [`ROSAAmazonEBSCSIDriverOperatorPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAAmazonEBSCSIDriverOperatorPolicy.html)
*   [`ROSACloudNetworkConfigOperatorPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSACloudNetworkConfigOperatorPolicy.html)
*   [`ROSAControlPlaneOperatorPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAControlPlaneOperatorPolicy.html)
*   [`ROSAImageRegistryOperatorPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAImageRegistryOperatorPolicy.html)
*   [`ROSAKMSProviderPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAKMSProviderPolicy.html)
*   [`ROSAKubeControllerPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAKubeControllerPolicy.html)
*   [`ROSAManageSubscription`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSAManageSubscription.html)
*   [`ROSANodePoolManagementPolicy`](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ROSANodePoolManagementPolicy.html)
*   [Use manual mode for account role creation](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-account-wide-role-and-policy-aws-cli-manual-mode_rosa-sts-about-iam-resources)
*   [Use auto mode for role creation](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-account-wide-role-and-policy-aws-cli-auto-mode_rosa-sts-about-iam-resources)
*   [About IAM resources](/rosa_architecture/rosa-sts-about-iam-resources#rosa-hcp-about-iam-resources)
*   [Required IAM roles and resources](/rosa_planning/rosa-hcp-prepare-iam-roles-resources#rosa-hcp-prepare-iam-roles-resources)