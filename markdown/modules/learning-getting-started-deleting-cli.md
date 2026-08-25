{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a {{ product_title }} cluster using the {{ rosa_cli }} {id="learning-getting-started-deleting-cli_{{ context }}"}

To free up system resources and avoid unnecessary costs when an environment is no longer needed, you can delete your {{ product_title }} cluster. You can easily perform this complete removal process by using the {{ rosa_cli_first }}. {._abstract}

**Procedure**

1.  **Optional:** List your clusters to make sure you are deleting the correct one by running the following command:
    ```terminal
    $ rosa list clusters
    ```
1.  Delete a cluster by running the following command:
    ```terminal
    $ rosa delete cluster --cluster <cluster-name>
    ```

    :::warning

    This command is non-recoverable.
    
    :::

1.  The CLI prompts you to confirm that you want to delete the cluster. Press **y** and then **Enter**. The cluster and all its associated infrastructure will be deleted.

    :::note

    All AWS Security Token Service (STS) and Identity and Access Managmenet (IAM) roles and policies will remain and must be deleted manually once the cluster deletion is complete by following the steps below.
    
    :::

1.  The {{ rosa_cli }} outputs the commands to delete the OpenID Connect (OIDC) provider and Operator IAM roles resources that were created. Wait until the cluster finishes deleting before deleting these resources. Perform a quick status check by running the following command:
    ```terminal
    $ rosa list clusters
    ```
1.  Once the cluster is deleted, delete the OIDC provider by running the following command:
    ```terminal
    $ rosa delete oidc-provider -c <clusterID> --mode auto --yes
    ```
1.  Delete the Operator IAM roles by running the following command:
    ```terminal
    $ rosa delete operator-roles -c <clusterID> --mode auto --yes
    ```

    :::note

    This command requires the cluster ID and not the cluster name.
    
    :::

1.  Only remove the remaining account roles if they are no longer needed by other clusters in the same account. If you want to create other {{ product_title }} clusters in this account, do not perform this step.

    To delete the account roles, you need to know the prefix used when creating them. The default is "ManagedOpenShift" unless you specified otherwise.

    Delete the account roles by running the following command:
    ```terminal
    $ rosa delete account-roles --prefix <prefix> --mode auto --yes
    ```