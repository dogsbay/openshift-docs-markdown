{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a {{ product_title }} cluster upgrade with the ROSA CLI {id="rosa-deleting-cluster-upgrade-cli_{{ context }}"}

You can use either the {{ rosa_cli_first }} or {{ cluster_manager }} console to delete a scheduled upgrade. This procedure uses the {{ rosa_cli }}. {._abstract}

**Procedure**

1.  Verify the cluster update has not started using the following command:
    ```terminal
    $ rosa list upgrades --cluster=<cluster_name_or_id>
    ```
    ```terminal title="Example output"
    VERSION  NOTES
    4.19.14  recommended - scheduled for 2026-06-02 15:00 UTC
    4.19.13
    ```
1.  Delete a scheduled update by running the following command:
    ```terminal
    $ rosa delete upgrade --cluster=<cluster_name_or_id>
    ```
1.  Confirm the deletion by entering `Yes` at the confirmation prompt.
    ```terminal title="Example output"
    I: Successfully canceled scheduled upgrade on cluster 'my-cluster'
    ```

You will receive an email notification confirming that the scheduled upgrade has been canceled.