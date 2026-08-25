{%- set _mod_docs_content_type = "PROCEDURE" %}
# Edit autoscaling after cluster creation with the ROSA CLI {id="rosa-edit-cluster-autoscale-cli_{{ context }}"}

You can edit any specific parameters of the cluster autoscaler after creating the autoscaler.

**Procedure**

{%- if openshift_rosa_hcp %}
*   To edit the cluster autoscaler, run the following command:
    ```terminal title="Example"
    $ rosa edit autoscaler --cluster=<mycluster>
    ```
    *   To edit a specific parameter, run the following command:
        ```terminal title="Example"
        $ rosa edit autoscaler -h --cluster=<mycluster> <parameter>=<value>
        ```
{%- endif %}

{%- if openshift_rosa %}
*   To edit the cluster autoscaler, run the following command:
    ```terminal title="Example"
    $ rosa edit autoscaler --cluster=<mycluster>
    ```
    *   To edit a specific parameter, run the following command:
        ```terminal title="Example"
        $ rosa edit autoscaler --cluster=<mycluster> <parameter>
        ```
{%- endif %}