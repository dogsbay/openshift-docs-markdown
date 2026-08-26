{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable autoscaling after cluster creation by using the interactive mode with the {{ rosa_cli }} {id="rosa-enable-cluster-autoscale-cli-interactive_after_{{ context }}"}

You can use the interactive mode of your terminal, if available, to set cluster-wide autoscaling behavior after cluster creation. {._abstract}

**Procedure**

*   After you have created a cluster, type the following command:
    ```terminal title="Example"
    $ rosa create autoscaler --cluster=<mycluster> --interactive
    ```

    You can then set all available autoscaling parameters.