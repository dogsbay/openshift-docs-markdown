{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an AWS PrivateLink cluster {id="rosa-aws-privatelink-create-cluster_{{ context }}"}

Creating a {{ product_title }} cluster with AWS PrivateLink establishes a private connection for cluster management and operations. {._abstract}


:::note

AWS PrivateLink is supported on existing VPCs only.

:::


**Prerequisites**

*   You have available AWS service quotas.
*   You have enabled the {{ product_title }} service in the AWS Console.
*   You have installed and configured the latest {{ rosa_cli }}, on your installation host.

**Procedure**

1.  With AWS PrivateLink, you can create a cluster with a single availability zone (Single-AZ) or multiple availability zones (Multi-AZ). In either case, your machine’s classless inter-domain routing (CIDR) must match your virtual private cloud’s CIDR. See [Requirements for using your own VPC](https://docs.openshift.com/container-platform/4.14/installing/installing_aws/installing-aws-vpc.html#installation-custom-aws-vpc-requirements_installing-aws-vpc) and [VPC Validation](https://docs.openshift.com/container-platform/4.14/installing/installing_aws/installing-aws-vpc.html#installation-custom-aws-vpc-validation_installing-aws-vpc) for more information.

    :::important

    If you use a firewall, you must configure it so that {{ product_title }} can access the sites that it requires to function.

    For more information, see the AWS PrivateLink firewall prerequisites section.
    
    :::

    {% include "./snippets/rosa-long-cluster-name.md" %}
    *   To create a Single-AZ cluster:
        ```terminal
        $ rosa create cluster --private-link --cluster-name=<cluster-name> [--machine-cidr=<VPC CIDR>/16] --subnet-ids=<private-subnet-id>
        ```
    *   To create a Multi-AZ cluster:
        ```terminal
        $ rosa create cluster --private-link --multi-az --cluster-name=<cluster-name> [--machine-cidr=<VPC CIDR>/16] --subnet-ids=<private-subnet-id1>,<private-subnet-id2>,<private-subnet-id3>
        ```
1.  Enter the following command to check the status of your cluster. During cluster creation, the `State` field from the output will transition from `pending` to `installing`, and finally to `ready`.
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