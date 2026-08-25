{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a machine pool {id="cloud-experts-getting-started-managing-worker-nodes-create-machine-pools_{{ context }}"}

You can create a machine pool with either the command-line interface (CLI) or the user interface (UI). {._abstract}

**Procedure**

*   Create a machine pool by using the {{ rosa_cli_first }}.
    1.  Run the following command:
        ```terminal
        rosa create machinepool --cluster=<cluster-name> --name=<machinepool-name> --replicas=<number-nodes>
        ```

        ***Example input***
        ```terminal
         $ rosa create machinepool --cluster=my-rosa-cluster --name=new-mp
         --replicas=2
        ```

        ***Example output***
        ```terminal
        I: Machine pool 'new-mp' created successfully on cluster 'my-rosa-cluster'
        I: To view all machine pools, run 'rosa list machinepools -c my-rosa-cluster'
        ```
    1.  **Optional:** Add node labels or taints to specific nodes in a new machine pool by running the following command:
        ```terminal
        rosa create machinepool --cluster=<cluster-name> --name=<machinepool-name> --replicas=<number-nodes> --labels=`<key=pair>`
        ```

        ***Example input***
        ```terminal
        $ rosa create machinepool --cluster=my-rosa-cluster --name=db-nodes-mp --replicas=2 --labels='app=db','tier=backend'
        ```

        ***Example output***
        ```terminal
        I: Machine pool 'db-nodes-mp' created successfully on cluster 'my-rosa-cluster'
        ```

        This creates an additional 2 nodes that can be managed as a unit and also assigns them the labels shown.  
    1.  Run the following command to confirm machine pool creation and the assigned labels:
        ```terminal
        rosa list machinepools --cluster=<cluster-name>
        ```

        ***Example output***
        ```terminal
        ID          AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS            TAINTS    AVAILABILITY ZONES
        Default     No           2         m5.xlarge                                  us-east-1a
        ```
*   Create a machine pool with the UI.
    1.  Log in to the {{ cluster_manager_url }} and click your cluster.
        ![cloud-experts-getting-started-managing-ocm-cluster](/_assets/images/cloud-experts-getting-started-managing-ocm-cluster.png)
    1.  Click **Machine pools**.

        ![cloud-experts-getting-started-managing-mp-ocm](/_assets/images/cloud-experts-getting-started-managing-mp-ocm.png)
    1.  Click **Add machine pool**.
    1.  Enter the desired configuration.

        :::tip

        You can also and expand the **Edit node labels and taints** section to add node labels and taints to the nodes in the machine pool.
        
        :::

        ![cloud-experts-getting-started-managing-mp-nlt](/_assets/images/cloud-experts-getting-started-managing-mp-nlt.png)
    1.  You will see the new machine pool you created.
        ![cloud-experts-getting-started-managing-mp-fromui](/_assets/images/cloud-experts-getting-started-managing-mp-fromui.png)