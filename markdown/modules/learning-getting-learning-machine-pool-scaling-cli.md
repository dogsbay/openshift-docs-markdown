{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling worker nodes using the CLI {id="learning-getting-started-learning-machine-pool-scaling-cli_{{ context }}"}

Edit a machine pool to scale the number of worker nodes in that specific machine pool by using {{ rosa_cli }}. {._abstract}

**Procedure**

1.  Run the following command to see the default machine pool that is created with each cluster:
    ```terminal
    $ rosa list machinepools --cluster=<cluster-name>
    ```

    **Example output**:
    ```terminal
    ID          AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS            TAINTS    AVAILABILITY ZONES
    Default     No           2         m5.xlarge                                  us-east-1a
    ```
1.  To scale the default machine pool out to a different number of nodes, run the following command:
    ```terminal
    $ rosa edit machinepool --cluster=<cluster-name> --replicas=<number-nodes> <machinepool-name>
    ```

    **For example**:
    ```terminal
    $ rosa edit machinepool --cluster=my-rosa-cluster --replicas 3 Default
    ```
1.  Run the following command to confirm that the machine pool has scaled:
    ```terminal
    $ rosa describe cluster --cluster=<cluster-name> | grep Compute
    ```

    **For example**:
    ```terminal
    $ rosa describe cluster --cluster=my-rosa-cluster | grep Compute
    ```

    **Example output**:
    ```terminal
     - Compute (Autoscaled):    2-4
     - Compute (current):       2
    ```