{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a cluster {id="learning-getting-started-create-cluster_{{ context }}"}

To deploy and manage containerized applications in a cloud environment, create a {{ product_title }} cluster. You can efficiently perform this installation process by using the {{ rosa_cli }}. {._abstract}

**Procedure**

1.  **Optional:** Run the following command to create the account-wide roles and policies, including the Operator policies and the AWS IAM roles and policies:

    :::important

    Only complete this step if this is the _first time_ you are deploying {{ product_title }} in this account and you have _not_ yet created your account roles and policies.
    
    :::

    ```terminal
    $ rosa create account-roles --mode auto --yes
    ```
1.  Run the following command to create the cluster:
    ```terminal
    $ rosa create cluster --cluster-name $CLUSTER_NAME \
    --subnet-ids ${PUBLIC_SUBNET_ID},${PRIVATE_SUBNET_ID} \
    --hosted-cp \
    --region $REGION \
    --oidc-config-id $OIDC_ID \
    --sts --mode auto --yes
    ```

    The cluster is ready after about 10 minutes. The cluster will have a control plane across three AWS availability zones in your selected region and create two worker nodes in your AWS account.