{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling autoscaling for an existing machine pool using the CLI {id="cloud-experts-getting-started-autoscaling-cli_{{ context }}"}

You can enable autoscaling on your machine pools by using the {{ rosa_cli_first }}. {._abstract}


:::note

Cluster autoscaling can be enabled at cluster creation and when creating a new machine pool by using the `--enable-autoscaling` option.

:::


**Procedure**

1.  Autoscaling is set based on machine pool availability. To find out which machine pools are available for autoscaling, run the following command:
    ```terminal
    $ rosa list machinepools -c <cluster-name>
    ```

    **Example output**
    ```terminal
    ID         AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS     TAINTS    AVAILABILITY ZONES
    Default    No           2         m5.xlarge                           us-east-1a
    ```
1.  Run the following command to add autoscaling to an available machine pool:
    ```terminal
    $ rosa edit machinepool -c <cluster-name> --enable-autoscaling <machinepool-name> --min-replicas=<num> --max-replicas=<num>
    ```

    **Example input**
    ```terminal
    $ rosa edit machinepool -c my-rosa-cluster --enable-autoscaling Default --min-replicas=2 --max-replicas=4
    ```

    The above command creates an autoscaler for the worker nodes that scales between 2 and 4 nodes depending on the resources.