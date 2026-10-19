{%- set _mod_docs_content_type = "CONCEPT" %}
# IAM resources for STS clusters {id="rosa-classic-about-iam-resources_{{ context }}"}

To deploy a {{ product_title }} cluster that uses the AWS Security Token Service (STS), you must create the following AWS Identity Access Management (IAM) resources: {._abstract}

*   Specific account-wide IAM roles and policies that provide the STS permissions required for {{ product_title }} support, installation,
control plane,
and compute functionality. This includes account-wide Operator policies.
*   Cluster-specific Operator IAM roles that permit the {{ product_title }} cluster Operators to carry out core OpenShift functionality.
*   An OpenID Connect (OIDC) provider that the cluster Operators use to authenticate.
*   If you deploy and manage your cluster using {{ cluster_manager }}, you must create the following additional resources:
    *   An {{ cluster_manager }} IAM role to complete the installation on your cluster.
    *   A user role without any permissions to verify your AWS account identity.

This document provides reference information about the IAM resources that you must deploy when you create a {{ product_title }} cluster that uses STS.
It also includes the `aws` CLI commands that are generated when you use `manual` mode with the `rosa create` command.

**Additional resources**
{._additional-resources}

*   [Creating a {{ product_title }} cluster with STS using the default options](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-quickly#rosa-sts-creating-a-cluster-quickly)
*   [Creating a {{ product_title }} cluster with STS using customizations](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-sts-creating-a-cluster-with-customizations)
*   [Methods of account-wide role creation](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-account-wide-roles-and-policies-creation-methods_rosa-sts-about-iam-resources)
*   [AWS Identity and Access Management Data Types](https://docs.aws.amazon.com/IAM/latest/APIReference/API_Types.html)
*   [Amazon Elastic Computer Cloud Data Types](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Types.html)
*   [AWS Token Security Service Data Types](https://docs.aws.amazon.com/STS/latest/APIReference/API_Types.html)
*   [{{ product_title }} update life cycle](/rosa_architecture/rosa_policy_service_definition/rosa-life-cycle#rosa-life-cycle-definitions_rosa-life-cycle)
*   [Creating the account-wide STS roles and policies](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-quickly#rosa-sts-creating-account-wide-sts-roles-and-policies_rosa-sts-creating-a-cluster-quickly)
*   [Creating a cluster with customizations using the CLI](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-sts-creating-cluster-customizations-cli_rosa-sts-creating-a-cluster-with-customizations)
*   [Creating a cluster with customizations by using {{ cluster_manager }}](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-sts-creating-cluster-customizations-ocm_rosa-sts-creating-a-cluster-with-customizations)
*   [AWS documentation about permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)
*   [Associating your AWS account](/rosa_planning/rosa-sts-aws-prereqs#rosa-associating-account_rosa-sts-aws-prereqs)