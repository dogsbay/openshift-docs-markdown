{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a machine pool with the {{ rosa_cli }} {id="learning-getting-started-learning-machine-pool-cli_{{ context }}"}

You can use the {{ rosa_cli }} to create a machine pool. {._abstract}

**Procedure**

1.  Run the following command:
    ```terminal
    $ rosa create machinepool --cluster=<cluster-name> --name=<machinepool-name> --replicas=<number-nodes>
    ```

    **For example**:
    ```terminal
     $ rosa create machinepool --cluster=my-rosa-cluster --name=new-mp
     --replicas=2
    ```

    **Example output**:
    ```terminal
    I: Machine pool 'new-mp' created successfully on cluster 'my-rosa-cluster'
    I: To view all machine pools, run 'rosa list machinepools -c my-rosa-cluster'
    ```
1.  **Optional:** Add node labels or taints to specific nodes in a new machine pool by running the following command:
    ```terminal
    $ rosa create machinepool --cluster=<cluster-name> --name=<machinepool-name> --replicas=<number-nodes> --labels=`<key=pair>`
    ```

    **For example**:
    ```terminal
    $ rosa create machinepool --cluster=my-rosa-cluster --name=db-nodes-mp --replicas=2 --labels='app=db','tier=backend'
    ```

    **Example output**:
    ```terminal
    I: Machine pool 'db-nodes-mp' created successfully on cluster 'my-rosa-cluster'
    ```

    This creates an additional 2 nodes that can be managed as a unit and also assigns them the labels shown.  
1.  Run the following command to confirm machine pool creation and the assigned labels:
    ```terminal
    $ rosa list machinepools --cluster=<cluster-name>
    ```

    **Example output**:
    ```terminal
    ID       AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONE  SUBNET                    DISK SIZE  VERSION  AUTOREPAIR  
    workers  Yes          2/2-4     m5.xlarge                          us-east-1f         subnet-<subnet_id>  300 GiB    4.14.36  Yes 
    ```