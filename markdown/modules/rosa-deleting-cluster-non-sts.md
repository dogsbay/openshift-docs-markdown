{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a {{ product_title }} cluster {id="rosa-deleting-cluster-non-sts_{{ context }}"}

You can delete a {{ product_title }} cluster using the {{ rosa_cli_first }}. {._abstract}


:::important

If the cluster that created the VPC during the installation is deleted, the associated installation program-created VPC will also be deleted, resulting in the failure of all the clusters that are using the same VPC. Additionally, any resources created with the same `tagSet` key-value pair of the resources created by the installation program and labeled with a value of `owned` will also be deleted.

:::


**Prerequisites**

*   You have installed a {{ product_title }} cluster.
*   You have installed and configured the latest {{ rosa_cli }} on your installation host.

**Procedure**

1.  Enter the following command to delete a cluster and watch the logs, replacing `<cluster_name>` with the name or ID of your cluster:
    ```terminal
    $ rosa delete cluster --cluster=<cluster_name> --watch
    ```
1.  To clean up your CloudFormation stack, enter the following command:
    ```terminal
    $ rosa init --delete
    ```