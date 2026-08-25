{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mixing node types {id="cloud-experts-getting-started-managing-worker-nodes-mixing-node-types_{{ context }}"}

You can also mix different worker node machine types in the same cluster by using new machine pools. You cannot change the node type of a machine pool once it is created, but you can create a new machine pool with different nodes by adding the `--instance-type` flag. {._abstract}

**Procedure**

1.  For example, to change the database nodes to a different node type, run the following command:
    ```terminal
    rosa create machinepool --cluster=<cluster-name> --name=<mp-name> --replicas=<number-nodes> --labels='<key=pair>' --instance-type=<type>
    ```

    **Example input**
    ```terminal
    rosa create machinepool --cluster=my-rosa-cluster --name=db-nodes-large-mp --replicas=2 --labels='app=db','tier=backend' --instance-type=m5.2xlarge
    ```
1.  To see all the instance types available, run the following command:
    ```terminal
    rosa list instance-types
    ```
1.  To make step-by-step changes, use the `--interactive` flag:
    ```terminal
    rosa create machinepool -c <cluster-name> --interactive
    ```
    ![cloud-experts-getting-started-managing-mp-interactive](/_assets/images/cloud-experts-getting-started-managing-mp-interactive.png)
1.  Run the following command to list the machine pools and see the new, larger instance type:
    ```terminal
    rosa list machinepools -c <cluster-name>
    ```
    ![cloud-experts-getting-started-managing-large-mp](/_assets/images/cloud-experts-getting-started-managing-large-mp.png)