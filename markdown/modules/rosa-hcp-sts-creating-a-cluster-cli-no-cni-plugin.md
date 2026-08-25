{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the cluster without a CNI plugin {id="rosa-hcp-sts-creating-a-cluster-cli_{{ context }}-no-cni"}

You can create a {{ product_title }} cluster without a CNI plugin by using the `--no-cni` flag with the {{ rosa_cli_first }}. {._abstract}

**Prerequisites**

*   You have completed the AWS prerequisites for {{ product_title }}.
*   You have available AWS service quotas.
*   You have enabled the {{ product_title }} in the AWS Console.
*   You have installed and configured the latest ROSA CLI (`rosa`) on your installation host. Run `rosa version` to see your currently installed version of the ROSA CLI. If a newer version is available, the CLI provides a link to download this upgrade.
*   You have logged in to your Red&#160;Hat account by using the ROSA CLI.
*   You have created an OIDC configuration.
*   You have verified that the AWS Elastic Load Balancing (ELB) service role exists in your AWS account.

**Procedure**

1.  You can create your {{ product_title }} cluster with one of the following commands.

    :::note

    When creating a {{ product_title }} cluster, the default machine Classless Inter-Domain Routing (CIDR) is `10.0.0.0/16`. If this does not correspond to the CIDR range for your VPC subnets, add `--machine-cidr <address_block>` to the following commands.
    
    :::

    *   Create a cluster with a single, initial machine pool, publicly available API, publicly available Ingress, and no CNI plugin by running the following command:
        ```terminal
        $ rosa create cluster --cluster-name=<cluster_name> \
            --sts --mode=auto --hosted-cp --operator-roles-prefix <operator-role-prefix> \
            --oidc-config-id <ID-of-OIDC-configuration> --subnet-ids=<public-subnet-id>,<private-subnet-id> --no-cni
        ```
    *   Create a cluster with a single, initial machine pool, privately available API, privately available Ingress, and no CNI plugin by running the following command:
        ```terminal
        $ rosa create cluster --private --cluster-name=<cluster_name> \
            --sts --mode=auto --hosted-cp --subnet-ids=<private-subnet-id> --no-cni
        ```
    *   If you used the `OIDC_ID`, `SUBNET_IDS`, and `OPERATOR_ROLES_PREFIX` variables to prepare your environment, you can continue to use those variables when creating your cluster without a CNI plugin. For example, run the following command:
        ```terminal
        $ rosa create cluster --hosted-cp --subnet-ids=$SUBNET_IDS --oidc-config-id=$OIDC_ID --cluster-name=<cluster_name> --operator-roles-prefix=$OPERATOR_ROLES_PREFIX --no-cni
        ```
1.  Check the status of your cluster by running the following command:
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name>
    ```

    :::important

    When you first log in to the cluster after it reaches `ready` status, the nodes are still in the `not ready` state until you install your own CNI plugin. After CNI installation, the nodes change to `ready`.
    
    :::


    The following `State` field changes are listed in the output as the cluster installation progresses:
    *   `pending (Preparing account)`
    *   `installing (DNS setup in progress)`
    *   `installing`
    *   `ready`

        :::note

        If the installation fails or the `State` field does not change to `ready` after more than 10 minutes, check the installation troubleshooting documentation for details. For more information, see _Troubleshooting installations_. For steps to contact Red&#160;Hat Support for assistance, see _Getting support for {{ product_title }}_.
        
        :::

1.  Track the progress of the cluster creation by watching the {{ product_title }} installation program logs. To check the logs, run the following command:
    ```terminal
    $ rosa logs install --cluster=<cluster_name> --watch
    ```

    Optional: To watch for new log messages as the installation progresses, use the `--watch` argument.