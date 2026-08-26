{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable autoscaling after cluster creation with the {{ rosa_cli }} {id="rosa-enable-cluster-autoscale-cli-after_{{ context }}"}

You can use the {{ rosa_cli_first }} to set cluster-wide autoscaling after cluster creation. {._abstract}


**Procedure**

*   After you have created a cluster, create the autoscaler:
    ```terminal title="Example"
    $ rosa create autoscaler --cluster=<mycluster>
    ```
    *   You can also create the autoscaler with specific parameters using the following command:
        ```terminal title="Example"
        $ rosa create autoscaler --cluster=<mycluster> <parameter>
        ```