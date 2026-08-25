{%- set _mod_docs_content_type = "REFERENCE" %}
# Components of {{ product_title }} {id="rosa-hcp-sts-components_{{ context }}"}

{{ product_title }} consists of the following components: {._abstract}

*   **AWS infrastructure** - The infrastructure required for the cluster including the Amazon EC2 instances, Amazon Elastic Block Store (EBS) storage, and networking components.
*   **AWS STS** - A method for granting short-term, dynamic tokens to provide users the necessary permissions to temporarily interact with your AWS account resources.
*   **OpenID Connect (OIDC)** - A mechanism for cluster Operators to authenticate with AWS, assume the cluster roles through a trust policy, and obtain temporary credentials from AWS IAM STS to make the required API calls.
*   **Roles and policies** - The roles and policies used by {{ product_title }} can be divided into account-wide roles and policies and Operator roles and policies.

    The policies determine the allowed actions for each of the roles.
    *   The following account-wide roles are required:
        *   `<prefix>-HCP-ROSA-Worker-Role`
        *   `<prefix>-HCP-ROSA-Support-Role`
        *   `<prefix>-HCP-ROSA-Installer-Role`
    *   The following account-wide AWS-managed policies are required:
        *   `ROSAInstallerPolicy`
        *   `ROSAWorkerInstancePolicy`
        *   `ROSASRESupportPolicy`
        *   `ROSAIngressOperatorPolicy`
        *   `ROSAAmazonEBSCSIDriverOperatorPolicy`
        *   `ROSACloudNetworkConfigOperatorPolicy`
        *   `ROSAControlPlaneOperatorPolicy`
        *   `ROSAImageRegistryOperatorPolicy`
        *   `ROSAKMSProviderPolicy`
        *   `ROSAKubeControllerPolicy`
        *   `ROSAManageSubscription`
        *   `ROSANodePoolManagementPolicy`

    :::note

    Certain policies are used by the cluster Operator roles, listed below. The Operator roles are created in a second step because they are dependent on an existing cluster name and cannot be created at the same time as the account-wide roles.
    
    :::

    *   The Operator roles are:
        *   &lt;operator_role_prefix>-openshift-cluster-csi-drivers-ebs-cloud-credentials
        *   &lt;operator_role_prefix>-openshift-cloud-network-config-controller-cloud-credentials
        *   &lt;operator_role_prefix>-openshift-machine-api-aws-cloud-credentials
        *   &lt;operator_role_prefix>-openshift-cloud-credential-operator-cloud-credentials
        *   &lt;operator_role_prefix>-openshift-image-registry-installer-cloud-credentials
        *   &lt;operator_role_prefix>-openshift-ingress-operator-cloud-credentials
    *   Trust policies are created for each account-wide role and each Operator role.