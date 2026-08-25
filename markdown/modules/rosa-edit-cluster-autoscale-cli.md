{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing autoscaling after cluster creation with the ROSA CLI {id="rosa-edit-cluster-autoscale-cli_{{ context }}"}

You can edit any specific parameters of the cluster autoscaler after creating the autoscaler when using the {{ rosa_cli_first }}. {._abstract}

**Procedure**

*   To edit the cluster autoscaler, run the following command:
    ```terminal title="Example"
    $ rosa edit autoscaler --cluster=<mycluster>
    ```
*   To edit a specific parameter, run the following command:
    ```terminal title="Example"
    $ rosa edit autoscaler --cluster=<mycluster> <parameter>
    ```