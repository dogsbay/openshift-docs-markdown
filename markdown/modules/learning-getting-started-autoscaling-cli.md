{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling autoscaling for an existing machine pool using the CLI {id="learning-getting-started-autoscaling-cli_{{ context }}"}

To ensure your environment dynamically adapts to changing workload demands, you can enable cluster autoscaling at cluster creation or when creating a new machine pool. To do this, use the `--enable-autoscaling` option. {._abstract}

**Procedure**

1.  Autoscaling is set based on machine pool availability. To find out which machine pools are available for autoscaling, run the following command:
    ```terminal
    $ rosa list machinepools -c <cluster-name>
    ```

    **For example**:
    ```terminal
    ID       AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONE  SUBNET                    DISK SIZE  VERSION  AUTOREPAIR  
    workers  No           2/2       m5.xlarge                          us-east-1f         subnet-<subnet_id>  300 GiB    4.14.36  Yes
    ```
1.  Run the following command to add autoscaling to an available machine pool:
    ```terminal
    $ rosa edit machinepool -c <cluster-name> --enable-autoscaling <machinepool-name> --min-replicas=<num> --max-replicas=<num>
    ```

    **For example**:
    ```terminal
    $ rosa edit machinepool -c my-rosa-cluster --enable-autoscaling workers --min-replicas=2 --max-replicas=4
    ```

    The above command creates an autoscaler for the worker nodes that scales between 2 and 4 nodes depending on the resources.