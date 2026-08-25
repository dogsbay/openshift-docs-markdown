{% if context == "rosa-sts-deleting-cluster" %}
{%- set sts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{% if not sts %}
# Deleting a ROSA cluster {id="rosa-deleting-cluster_{{ context }}"}

{% endif %}
{% if sts %}
# Deleting a ROSA cluster and the cluster-specific IAM resources {id="_deleting_a_rosa_cluster_and_the_cluster-specific_iam_resources"}

{% endif %}

{% if not sts %}
You can delete a {{ product_title }} (ROSA) cluster using the ROSA CLI (`rosa`). {._abstract}
{% endif %}

{% if sts %}
You can delete a {{ product_title }} (ROSA) with AWS Security Token Service (STS) cluster by using the ROSA CLI (`rosa`) or {{ cluster_manager_first }}. {._abstract}

After deleting the cluster, you can clean up the cluster-specific Identity and Access Management (IAM) resources in your AWS account by using the ROSA CLI (`rosa`). The cluster-specific resources include the Operator roles and the OpenID Connect (OIDC) provider.


:::note

The cluster deletion must complete before you remove the IAM resources, because the resources are used in the cluster deletion and clean-up processes.

:::


If add-ons are installed, the cluster deletion takes longer because add-ons are uninstalled before the cluster is deleted. The amount of time depends on the number and size of the add-ons.
{% endif %}


:::important

If the cluster that created the VPC during the installation is deleted, the associated installation program-created VPC will also be deleted, resulting in the failure of all the clusters that are using the same VPC. Additionally, any resources created with the same `tagSet` key-value pair of the resources created by the installation program and labeled with a value of `owned` will also be deleted.

:::


**Prerequisites**

*   You have installed a ROSA cluster.
*   You have installed and configured the latest ROSA CLI (`rosa`) on your installation host.

**Procedure**

{% if sts %}
1.  Obtain the cluster ID, the Amazon Resource Names (ARNs) for the cluster-specific Operator roles and the endpoint URL for the OIDC provider:
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    Name:                       mycluster
    ID:                         1s3v4x39lhs8sm49m90mi0822o34544a
    ...
    Operator IAM Roles:
     - arn:aws:iam::<aws_account_id>:role/mycluster-x4q9-openshift-machine-api-aws-cloud-credentials
     - arn:aws:iam::<aws_account_id>:role/mycluster-x4q9-openshift-cloud-credential-operator-cloud-crede
     - arn:aws:iam::<aws_account_id>:role/mycluster-x4q9-openshift-image-registry-installer-cloud-creden
     - arn:aws:iam::<aws_account_id>:role/mycluster-x4q9-openshift-ingress-operator-cloud-credentials
     - arn:aws:iam::<aws_account_id>:role/mycluster-x4q9-openshift-cluster-csi-drivers-ebs-cloud-credent
     - arn:aws:iam::<aws_account_id>:role/mycluster-x4q9-openshift-cloud-network-config-controller-cloud
    State:                      ready
    Private:                    No
    Created:                    May 13 2022 11:26:15 UTC
    Details Page:               https://console.redhat.com/openshift/details/s/296kyEFwzoy1CREQicFRdZybrc0
    OIDC Endpoint URL:          https://oidc.op1.openshiftapps.com/<oidc_config_id>
    ```
    *   The `ID` field lists the cluster ID.
    *   The `Operator IAM Roles` field specifies the ARNs for the cluster-specific Operator roles. For example, in the sample output the ARN for the role required by the Machine Config Operator is `arn:aws:iam::<aws_account_id>:role/mycluster-x4q9-openshift-machine-api-aws-cloud-credentials`.
    *   The `OIDC Endpoint URL` field displays the endpoint URL for the cluster-specific OIDC provider.

    :::important

    You require the cluster ID to delete the cluster-specific STS resources using the ROSA CLI (`rosa`) after the cluster is deleted.
    
    :::

{% endif %}

{% if sts %}
1.  Delete the cluster:
    *   To delete the cluster by using {{ cluster_manager_first }}:
        1.  Navigate to {{ cluster_manager_url }}.
        1.  Click the Options menu {{ kebab }} next to your cluster and select **Delete cluster**.
        1.  Type the name of your cluster at the prompt and click **Delete**.
    *   To delete the cluster using the ROSA CLI (`rosa`):
        1.  Enter the following command to delete the cluster and watch the logs, replacing `<cluster_name>` with the name or ID of your cluster:
{% endif %}
{% if not sts %}
        . Enter the following command to delete a cluster and watch the logs, replacing `<cluster_name>` with the name or ID of your cluster:
{% endif %}
        +
        ```terminal
        $ rosa delete cluster --cluster=<cluster_name> --watch
        ```
{% if sts %}
        +

        :::important

        You must wait for the cluster deletion to complete before you remove the Operator roles and the OIDC provider. The cluster-specific Operator roles are required to clean-up the resources created by the OpenShift Operators. The Operators use the OIDC provider to authenticate.
        
        :::

{% endif %}

{% if not sts %}
1.  To clean up your CloudFormation stack, enter the following command:
    ```terminal
    $ rosa init --delete
    ```
{% endif %}

{% if sts %}
1.  Delete the OIDC provider that the cluster Operators use to authenticate:
    ```terminal
    $ rosa delete oidc-provider -c <cluster_id> --mode auto
    ```

    :::note

    You can use the `-y` option to automatically answer yes to the prompts.
    
    :::

1.  Optional. Delete the cluster-specific Operator IAM roles:

    :::important

    The account-wide IAM roles can be used by other ROSA clusters in the same AWS account. Only remove the roles if they are not required by other clusters.
    
    :::

    ```terminal
    $ rosa delete operator-roles -c <cluster_id> --mode auto
    ```
{% endif %}