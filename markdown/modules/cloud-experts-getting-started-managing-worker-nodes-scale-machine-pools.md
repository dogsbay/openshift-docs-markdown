{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling worker nodes {id="cloud-experts-getting-started-managing-worker-nodes-scale-machine-pools_{{ context }}"}

Edit a machine pool to scale the number of worker nodes in that specific machine pool. You can use either the CLI or the UI to scale worker nodes. {._abstract}

**Procedure**

*   Scale worker nodes using the CLI
    1.  Run the following command to see the default machine pool that is created with each cluster:
        ```terminal
        rosa list machinepools --cluster=<cluster-name>
        ```

        **Example output**
        ```terminal
        ID          AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS            TAINTS    AVAILABILITY ZONES
        Default     No           2         m5.xlarge                                  us-east-1a
        ```
    1.  To scale the default machine pool out to a different number of nodes, run the following command:
        ```terminal
        rosa edit machinepool --cluster=<cluster-name> --replicas=<number-nodes> <machinepool-name>
        ```

        **Example input**
        ```terminal
        rosa edit machinepool --cluster=my-rosa-cluster --replicas 3 Default
        ```
    1.  Run the following command to confirm that the machine pool has scaled:
        ```terminal
        rosa describe cluster --cluster=<cluster-name> | grep Compute
        ```

        **Example input**
        ```terminal
        $ rosa describe cluster --cluster=my-rosa-cluster | grep Compute
        ```

        **Example output**
        ```terminal
        - Compute:                 3 (m5.xlarge)
        ```
*   Scaling worker nodes using the UI
    1.  Click the three dots to the right of the machine pool you want to edit.
    1.  Click **Edit**.
    1.  Enter the desired number of nodes, and click **Save**.
    1.  Confirm that the cluster has scaled by selecting the cluster, clicking the **Overview** tab, and scrolling to **Compute listing**. The compute listing should equal the scaled nodes. For example, 3/3.
        ![cloud-experts-getting-started-managing-ocm-nodes](/_assets/images/cloud-experts-getting-started-managing-ocm-nodes.png)