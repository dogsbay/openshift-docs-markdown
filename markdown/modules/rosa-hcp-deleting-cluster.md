{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a {{ product_title }} cluster and the cluster-specific IAM resources {id="rosa-hcp-deleting-cluster_{{ context }}"}

If you no longer need a {{ product_title }} cluster, you can delete it to stop incurring costs. After deleting the cluster, you must also remove the cluster-specific Operator roles and OpenID Connect (OIDC) provider to avoid leaving unused IAM resources in your AWS account. {._abstract}


:::note

The cluster deletion must complete before you remove the IAM resources, because the resources are used in the cluster deletion and clean up processes.

:::


If add-ons are installed, the cluster deletion takes longer because add-ons are uninstalled before the cluster is deleted. The amount of time depends on the number and size of the add-ons.

**Prerequisites**

*   You have installed a {{ product_title }} cluster.
*   You have installed and configured the latest {{ rosa_cli }} on your installation host.

**Procedure**

1.  Get the cluster ID, the Amazon Resource Names (ARNs) for the cluster-specific Operator roles, and the endpoint URL for the OIDC provider by running the following command:
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    Name:                       test_cluster
    Domain Prefix:              test_cluster
    Display Name:               test_cluster
    ID:                         <cluster_id>
    External ID:                <external_id>
    Control Plane:              ROSA Service Hosted
    OpenShift Version:          4.22.0
    Channel Group:              stable
    DNS:                        test_cluster.l3cn.p3.openshiftapps.com
    AWS Account:                <AWS_id>
    AWS Billing Account:        <AWS_id>
    API URL:                    https://api.test_cluster.l3cn.p3.openshiftapps.com:443
    Console URL:
    Region:                     us-east-1
    Availability:
     - Control Plane:           MultiAZ
     - Data Plane:              SingleAZ

    Nodes:
     - Compute (desired):       2
     - Compute (current):       0
    Network:
     - Type:                    OVNKubernetes
     - Service CIDR:            172.30.0.0/16
     - Machine CIDR:            10.0.0.0/16
     - Pod CIDR:                10.128.0.0/14
     - Host Prefix:             /23
     - Subnets:                 <subnet_ids>
    EC2 Metadata Http Tokens:   optional
    Role (STS) ARN:             arn:aws:iam::<AWS_id>:role/test_cluster-HCP-ROSA-Installer-Role
    Support Role ARN:           arn:aws:iam::<AWS_id>:role/test_cluster-HCP-ROSA-Support-Role
    Instance IAM Roles:
     - Worker:                  arn:aws:iam::<AWS_id>:role/test_cluster-HCP-ROSA-Worker-Role
    Operator IAM Roles:
     - arn:aws:iam::<AWS_id>:role/test_cluster-openshift-cloud-network-config-controller-cloud-crede
     - arn:aws:iam::<AWS_id>:role/test_cluster-openshift-image-registry-installer-cloud-credentials
     - arn:aws:iam::<AWS_id>:role/test_cluster-openshift-ingress-operator-cloud-credentials
     - arn:aws:iam::<AWS_id>:role/test_cluster-kube-system-kube-controller-manager
     - arn:aws:iam::<AWS_id>:role/test_cluster-kube-system-capa-controller-manager
     - arn:aws:iam::<AWS_id>:role/test_cluster-kube-system-control-plane-operator
     - arn:aws:iam::<AWS_id>:role/hcpcluster-kube-system-kms-provider
     - arn:aws:iam::<AWS_id>:role/test_cluster-openshift-cluster-csi-drivers-ebs-cloud-credentials
    Managed Policies:           Yes
    State:                      ready
    Private:                    No
    Created:                    Apr 16 2024 20:32:06 UTC
    User Workload Monitoring:   Enabled
    Details Page:               https://console.redhat.com/openshift/details/s/<cluster_id>
    OIDC Endpoint URL:          https://oidc.op1.openshiftapps.com/<cluster_id> (Managed)
    Audit Log Forwarding:       Disabled
    External Authentication:    Disabled
    ```
    where:

    *   The `ID` field lists the cluster ID.
    *   The `Operator IAM Roles` field specifies the ARNs for the cluster-specific Operator roles. For example, in the sample output the ARN for the role required by the Machine Config Operator is `arn:aws:iam::<aws_account_id>:role/mycluster-x4q9-openshift-machine-api-aws-cloud-credentials`.
    *   The `OIDC Endpoint URL` field displays the endpoint URL for the cluster-specific OIDC provider.

        :::important

        After the cluster is deleted, you need the cluster ID to delete the cluster-specific STS resources using the {{ rosa_cli }}.
        
        :::

1.  Delete the cluster by using either the {{ cluster_manager }} or the {{ rosa_cli }}:
    *   To delete the cluster by using the {{ cluster_manager }}:
        1.  Navigate to the {{ cluster_manager_url }}.
        1.  Click the Options menu {{ kebab }} next to your cluster and select **Delete cluster**.
        1.  Type the name of your cluster into the prompt and click **Delete**.
    *   To delete the cluster using the {{ rosa_cli }}:
        1.  Run the following command, replacing `<cluster_name>` with the name or ID of your cluster:
            ```terminal
            $ rosa delete cluster --cluster=<cluster_name> --watch
            ```

            :::important

            You must wait for cluster deletion to complete before you remove the Operator roles and the OIDC provider.
            
            :::

1.  Delete the cluster-specific Operator IAM roles by running one of the following commands:
    *   For clusters without a shared Virtual Private Cloud (VPC):
        ```terminal
        $ rosa delete operator-roles --prefix <operator_role_prefix>
        ```
    *   For clusters with a shared VPC:
        ```terminal
        $ rosa delete operator-roles --prefix <operator_role_prefix> --delete-hosted-shared-vpc-policies
        ```
1.  Delete the OIDC provider by running the following command:
    ```terminal
    $ rosa delete oidc-provider --oidc-config-id <oidc_config_id>
    ```

**Troubleshooting**

*   Verify that there are no add-ons for your cluster pending in the [Hybrid Cloud Console](https://console.redhat.com/openshift).
*   Verify that all AWS resources and dependencies have been deleted in the Amazon Web Console.