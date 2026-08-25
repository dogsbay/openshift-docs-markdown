{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding node pools {id="hcp-bm-add-np_{{ context }}"}

You can create node pools for a hosted cluster by specifying a name, number of replicas, and any additional information, such as an agent label selector. {._abstract}


:::note

Only a single agent namespace is supported for each hosted cluster. As a result, when you add a node pool to a hosted cluster, the node pool must be either from a single `InfraEnv` resource or from an `InfraEnv` resource that is in the same agent namespace.

:::


**Procedure**

1.  To create a node pool, enter the following information:
    ```terminal
    $ hcp create nodepool agent \
      --cluster-name <hosted_cluster_name> \
      --name <nodepool_name> \
      --node-count <worker_node_count> \
      --agentLabelSelector size=medium
    ```
    *   `--cluster-name` specifies your hosted cluster name, for example, `my-hosted-cluster`.
    *   `--name` specifies the name of your node pool, for example, `my-hosted-cluster-extra-cpu`.
    *   `--node-count` specifies the worker node count, for example, `2`.
    *   `--agentLabelSelector` is optional. The node pool uses agents with the `size=medium` label.
1.  Check the status of the node pool by listing `nodepool` resources in the `clusters` namespace:
    ```terminal
    $ oc get nodepools --namespace clusters
    ```
1.  Extract the `admin-kubeconfig` secret by entering the following command:
    ```terminal
    $ oc extract -n <hosted_control_plane_namespace> secret/admin-kubeconfig --to=./hostedcluster-secrets --confirm
    ```
    ```terminal title="Example output"
    hostedcluster-secrets/kubeconfig
    ```
1.  After some time, you can check the status of the node pool by entering the following command:
    ```terminal
    $ oc --kubeconfig ./hostedcluster-secrets get nodes
    ```

**Verification**

*   Verify that the number of available node pools match the number of expected node pools by entering this command:
    ```terminal
    $ oc get nodepools --namespace clusters
    ```