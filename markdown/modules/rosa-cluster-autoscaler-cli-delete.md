{%- set _mod_docs_content_type = "PROCEDURE" %}
# Delete autoscaling using the ROSA CLI {id="rosa-delete-cluster-autoscale-cli_{{ context }}"}

You can delete the cluster autoscaler if you no longer want to use it.

**Procedure**

*   To delete the cluster autoscaler, run the following command:
    ```terminal title="Example"
    $ rosa delete autoscaler --cluster=<mycluster>
    ```