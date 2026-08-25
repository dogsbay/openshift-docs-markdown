{%- set _mod_docs_content_type = "PROCEDURE" %}
# Update billing accounts for {{ product_title }} clusters {id="rosa-update-billing_{{ context }}"}

Change the AWS billing account a deployed cluster uses by running `rosa edit cluster` in interactive mode. {._abstract}

**Prerequisites**

*   You must have more than one AWS billing account.
*   You must link the AWS billing account to the same Red&#160;Hat organization where you deployed the cluster.

**Procedure**

1.  Run the following command in your terminal window. Replace `<cluster_ID>` with the ID of the cluster whose billing account you want to update.
    ```terminal
    $ rosa edit cluster -c <cluster_ID>
    ```

    :::note

    To locate the IDs of your active clusters, run the `$ rosa list clusters` command in your terminal window.
    
    :::

1.  Skip to the `Billing Account` parameter within the interactive mode.
1.  Select the required AWS billing account from the list of available options and press **Enter**.

    The AWS billing account for your cluster is now updated.