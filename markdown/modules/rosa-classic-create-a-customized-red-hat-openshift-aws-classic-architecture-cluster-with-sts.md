{%- set _mod_docs_content_type = "CONCEPT" %}
# Create a customized {{ product_title }} cluster with STS {id="rosa-classic-create-a-customized-red-hat-openshift-aws-classic-architecture-cluster-with-sts_{{ context }}"}

Create a {{ product_title }} cluster with the AWS Security Token Service (STS) using customizations. You can deploy your cluster by using {{ cluster_manager_first }} or the {{ rosa_cli_first }}. {._abstract}

With the procedures in this document, you can also choose between the `auto` and `manual` modes when creating the required AWS Identity and Access Management (IAM) resources.

**Additional resources**
{._additional-resources}

*   [Creating a cluster with customizations by using OpenShift Cluster Manager](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-sts-creating-cluster-customizations-ocm_rosa-sts-creating-a-cluster-with-customizations)
*   [Creating a cluster using customizations](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-sts-creating-cluster-using-customizations_rosa-sts-creating-a-cluster-with-customizations)
*   [AWS documentation on default VPCs](https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html)
*   [AWS documentation on how to Create a VPC](https://docs.aws.amazon.com/vpc/latest/userguide/create-vpc.html)
*   [`rosa create cluster` command reference](/cli_reference/rosa_cli/rosa-cli-commands#rosa-create-cluster)
*   [Methods of account-wide role creation](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-account-wide-roles-and-policies-creation-methods_rosa-sts-about-iam-resources)
*   [Interactive cluster creation mode reference](/rosa_install_access_delete_clusters/rosa-sts-interactive-mode-reference#rosa-sts-interactive-cluster-creation-mode-options_rosa-sts-interactive-mode-reference)
*   [Security groups](/rosa_install_access_delete_clusters/rosa_getting_started_iam/rosa-aws-prereqs#rosa-security-groups_prerequisites)
*   [About custom Operator IAM role prefixes](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-about-operator-role-prefixes_rosa-sts-about-iam-resources)
*   [Accessing a {{ product_title }} cluster](/rosa_install_access_delete_clusters/rosa-sts-accessing-cluster#rosa-sts-accessing-cluster)
*   [Adding notification contacts](/rosa_cluster_admin/rosa-cluster-notifications#add-notification-contact_rosa-cluster-notifications)
*   [Configuring a shared VPC for {{ product_title }} clusters](/rosa_install_access_delete_clusters/rosa-shared-vpc-config#rosa-shared-vpc-config)
*   [About IAM resources for clusters that use STS](/rosa_architecture/rosa-sts-about-iam-resources#rosa-sts-about-iam-resources)
*   [Interactive cluster creation mode reference](/rosa_install_access_delete_clusters/rosa-sts-interactive-mode-reference#rosa-sts-interactive-mode-reference)
*   [AWS prerequisites for {{ product_title }} with STS](/rosa_planning/rosa-sts-aws-prereqs#rosa-sts-aws-prereqs)
*   [Creating OpenID Connect (OIDC) identity providers (AWS documentation)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)
*   [etcd encryption service definition](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-etcd-encryption_rosa-service-definition)
*   [Configuring a cluster-wide proxy](/networking/ovn_kubernetes_network_provider/configuring-cluster-wide-proxy#configuring-a-cluster-wide-proxy)
*   [Troubleshooting cluster deployments](/support/troubleshooting/rosa-troubleshooting-deployments#rosa-troubleshooting-cluster-deployments)
*   [Getting support for {{ product_title }}](/support/getting-support#getting-support)