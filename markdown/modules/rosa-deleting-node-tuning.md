{%- set _mod_docs_content_type = "PROCEDURE" %}
# Delete node tuning configurations {id="rosa-deleting-node-tuning_{{ context }}"}

Remove unused node tuning configurations from your cluster to simplify management by using the {{ rosa_cli_first }}. {._abstract}


:::note

You cannot delete a tuning configuration referenced in a machine pool. You must remove the tuning configuration from all machine pools before you can delete it.

:::


**Prerequisites**

*   You have downloaded the latest version of the {{ rosa_cli }}.
*   You have a cluster on the latest version.
*   Your cluster has a node tuning configuration that you want to delete.

**Procedure**

*   To delete a tuning configuration, run the following command:
    ```terminal
    $ rosa delete tuning-config -c <cluster_id> <name_of_tuning>
    ```

    The tuning configuration on the cluster is deleted.

    **Example output**
    ```terminal
    ? Are you sure you want to delete tuning config sample-tuning on cluster sample-cluster? Yes
    I: Successfully deleted tuning config 'sample-tuning' from cluster 'sample-cluster'
    ```