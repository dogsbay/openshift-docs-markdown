{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an AWS PrivateLink cluster {id="rosa-aws-privatelink-create-cluster_{{ context }}"}

You can create an AWS PrivateLink cluster by using the {{ rosa_cli_first }}. {._abstract}


:::note

AWS PrivateLink is supported on existing VPCs only.

:::


**Prerequisites**

*   You have available AWS service quotas.
*   You have enabled the {{ product_title }} service in the AWS Console.
*   You have installed and configured the latest {{ rosa_cli }}, on your installation host.
*   For GovCloud, you have enabled the {{ product_title }} service in the AWS Console on the linked commercial account because it is inside the commercial account that you enable {{ product_title }} for GovCloud. For more information, see [Enable ROSA and configure AWS prerequisites](https://docs.aws.amazon.com/rosa/latest/userguide/set-up.html#enable-rosa).
*   For [Private Marketplace](https://docs.aws.amazon.com/rosa/latest/userguide/integration-marketplace.html#_private_marketplace), you have enabled the {{ product_title }} service in the AWS Console.
{%- if openshift_rosa %}
For more information, see [AWS Marketplace listings for ROSA](https://aws.amazon.com/marketplace/pp/prodview-tnyp2h3acabm6).
{% endif %}
{% if openshift_rosa_hcp %}
For more information, see [AWS Marketplace listings for ROSA](https://aws.amazon.com/marketplace/pp/prodview-juiwfhpeizxro).
{% endif %}

**Procedure**

1.  With AWS PrivateLink, you can create a cluster with a single availability zone (Single-AZ) or many availability zones (Multi-AZ). In either case, your machine’s classless inter-domain routing (CIDR) must match your virtual private cloud’s CIDR. See [Requirements for using your own VPC](https://docs.redhat.com/en/documentation/openshift_container_platform/4.14/html/installing_on_aws/installing-aws-vpc#installation-custom-aws-vpc-requirements_installing-aws-vpc) and [VPC validation](https://docs.redhat.com/en/documentation/openshift_container_platform/4.14/html/installing_on_aws/installing-aws-vpc#installation-custom-aws-vpc-validation_installing-aws-vpc) for more information.

    :::important

    If you use a firewall, you must configure it so that {{ product_title }} can access the sites that it requires to function.

    For more information, see the AWS PrivateLink firewall prerequisites section.
    
    :::


    :::note

    If your cluster name is longer than 15 characters, it will contain an automatically generated domain prefix as a sub-domain for your provisioned cluster on `*.openshiftapps.com`.

    To customize the subdomain, use the `--domain-prefix` flag. The domain prefix cannot be longer than 15 characters, must be unique, and cannot be changed after cluster creation.
    
    :::

    *   To create a Single-AZ cluster:
        ```terminal
        $ rosa create cluster --private-link --cluster-name=<cluster-name> [--machine-cidr=<VPC CIDR>/16] --subnet-ids=<private-subnet-id>
        ```
    *   To create a Multi-AZ cluster:
        ```terminal
        $ rosa create cluster --private-link --multi-az --cluster-name=<cluster-name> [--machine-cidr=<VPC CIDR>/16] --subnet-ids=<private-subnet-id1>,<private-subnet-id2>,<private-subnet-id3>
        ```
1.  Enter the following command to check the status of your cluster. During cluster creation, the `State` field from the output changesfrom `pending` to `installing`, and finally to `ready`.
    ```terminal
    $ rosa describe cluster --cluster=<cluster_name>
    ```

    :::note

    If installation fails or the `State` field does not change to `ready` after 40 minutes, check the installation troubleshooting documentation for more details.
    
    :::

1.  Enter the following command to follow the OpenShift installer logs to track the progress of your cluster:
    ```terminal
    $ rosa logs install --cluster=<cluster_name> --watch
    ```