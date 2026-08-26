{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling autoscaling nodes in an existing cluster using the {{ rosa_cli }} {id="rosa-disabling-autoscaling_{{ context }}"}

Disable autoscaling for worker nodes in the machine pool definition using the {{ rosa_cli_first }}. {._abstract}

**Procedure**

*   Enter the following command:
    ```terminal
    $ rosa edit machinepool --cluster=<cluster_name> <machinepool_ID> --enable-autoscaling=false --replicas=<number>
    ```

    The following example disables autoscaling on the `default` machine pool on a cluster named `mycluster`:
    ```terminal
    $ rosa edit machinepool --cluster=mycluster default --enable-autoscaling=false --replicas=3
    ```