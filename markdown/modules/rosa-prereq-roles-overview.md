{%- set _mod_docs_content_type = "REFERENCE" %}
# Overview of required roles {id="rosa-prereq-roles-overview_{{ context }}"}

To create and manage your {{ product_title }} cluster, you must create several account-wide and cluster-wide roles. If you intend to use {{ cluster_manager }} to create or manage your cluster, you need some additional roles. {._abstract}


To create and manage clusters
:   Several account-wide roles are required to create and manage {{ product_title }} clusters. These roles only need to be created once per AWS account, and do not need to be created fresh for each cluster. One or more AWS managed policies are attached to each role to grant that role the required capabilities. You can specify your own prefix, or use the default prefix (`ManagedOpenShift`).

    :::note


    Role names are limited to a maximum length of 64 characters in AWS IAM. When the user-specified prefix for a cluster is longer than 20 characters, the role name is truncated to observe this 64-character maximum in AWS IAM.
    
    :::

{%- if openshift_rosa_hcp %}

    For {{ product_title }} clusters, you must create the following account-wide roles and attach the indicated AWS managed policies:
**Required account roles and AWS policies for {{ product_title }}**

    | Role name | AWS policy names |
    | --- | --- |
    | `<prefix>-HCP-ROSA-Worker-Role` | `ROSAWorkerInstancePolicy` and `AmazonEC2ContainerRegistryReadOnly` |
    | `<prefix>-HCP-ROSA-Support-Role` | `ROSASRESupportPolicy` |
    | `<prefix>-HCP-ROSA-Installer-Role` | `ROSAInstallerPolicy` |

    :::important


    For enhanced security, you might want to include an external ID within the trust policies of the Support and Installer account-wide roles. For more information, see _About external ID_.
    
    :::

{% endif %}
{% if not openshift_rosa_hcp %}

    The following account-wide roles are required:

    *   `<prefix>-Worker-Role`
    *   `<prefix>-Support-Role`
    *   `<prefix>-Installer-Role`
    *   `<prefix>-ControlPlane-Role`

{%- endif %}

    :::note

    Role creation does not request your AWS access or secret keys. AWS Security Token Service (STS) is used as the basis of this workflow. AWS STS uses temporary, limited-privilege credentials to provide authentication.
    
    :::


    To use Operator-managed cluster capabilities
    :   Some cluster capabilities, including several capabilities provided by default, are managed using Operators. Cluster-specific Operator roles (`operator-roles` in the ROSA CLI) are required to use these capabilities. These roles are used to obtain the temporary permissions required to carry out cluster operations such as managing back-end storage, ingress, and registry. Obtaining these permissions requires the configuration of an OpenID Connect (OIDC) provider, which connects to AWS Security Token Service (STS) to authenticate Operator access to AWS resources.
{%- if not openshift_rosa_hcp %}
    The following Operator roles are required for {{ product_title }} clusters:

*   `openshift-cluster-csi-drivers-ebs-cloud-credentials`
*   `openshift-cloud-network-config-controller-cloud-credentials`
*   `openshift-machine-api-aws-cloud-credentials`
*   `openshift-cloud-credential-operator-cloud-credentials`
*   `openshift-image-registry-installer-cloud-credentials`
*   `openshift-ingress-operator-cloud-credentials`

{% endif %}
{% if openshift_rosa_hcp %}

    For {{ product_title }} clusters, you must create the following Operator roles and attach the indicated AWS Managed policies:
    **Required Operator roles and AWS Managed policies for {{ product_title }}**

    | Role name | AWS-managed policy name |
    | --- | --- |
    | `openshift-cloud-network-config-controller-c` | `ROSACloudNetworkConfigOperatorPolicy` |
    | `openshift-image-registry-installer-cloud-credentials` | `ROSAImageRegistryOperatorPolicy` |
    | `kube-system-kube-controller-manager` | `ROSAKubeControllerPolicy` |
    | `kube-system-capa-controller-manager` | `ROSANodePoolManagementPolicy` |
    | `kube-system-control-plane-operator` | `ROSAControlPlaneOperatorPolicy` |
    | `kube-system-kms-provider` | `ROSAKMSProviderPolicy` |
    | `openshift-ingress-operator-cloud-credentials` | `ROSAIngressOperatorPolicy` |
    | `openshift-cluster-csi-drivers-ebs-cloud-credentials` | `ROSAAmazonEBSCSIDriverOperatorPolicy` |
{%- endif %}

    When you create Operator roles using the `rosa create operator-role` command, the roles created are named using the pattern `<cluster_name>-<hash>-<role_name>`, for example, `test-abc1-kube-system-control-plane-operator`. When your cluster name is longer than 15 characters, the role name is truncated.

    To use {{ cluster_manager }}
    :   The web user interface, {{ cluster_manager }}, requires you to create additional roles in your AWS account to create a trust relationship between that AWS account and the {{ cluster_manager }}.
    This trust relationship is achieved through the creation and association of the `ocm-role` AWS IAM role. This role has a trust policy with the AWS installer that links your Red&#160;Hat account to your AWS account. In addition, you also need a `user-role` AWS IAM role for each web UI user, which serves to identify these users. This `user-role` AWS IAM role has no permissions.
    The following AWS IAM roles are required to use {{ cluster_manager }}:

*   `ocm-role`
*   `user-role`