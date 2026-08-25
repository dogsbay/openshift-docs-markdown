{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling up and down workloads in a hosted cluster {id="scale-up-down-autoscaler-hcp_{{ context }}"}

To scale up and down the workloads in your hosted cluster, you can use the `ScaleUpAndScaleDown` behavior. The compute nodes scale up when you add workloads and scale down when you delete workloads. {._abstract}

**Prerequisites**

*   You have created the `HostedCluster` and `NodePool` resources.

**Procedure**

1.  Enable cluster autoscaling for your hosted cluster by setting the scaling behavior to `ScaleUpAndScaleDown`. Run the following command:
    ```terminal
    $ oc patch -n <hosted_cluster_namespace> \
      hostedcluster <hosted_cluster_name> \
      --type=merge \
      --patch='{"spec": {"autoscaling": {"scaling": "ScaleUpAndScaleDown", "maxPodGracePeriod": 60, "scaleDown": {"utilizationThresholdPercent": 50}}}}'
    ```
1.  Remove the `spec.replicas` field from the `NodePool` resource to allow cluster autoscaler to manage the node count. Run the following command:
    ```terminal
    $ oc patch -n <hosted_cluster_namespace> \
      nodepool <node_pool_name> \
      --type=json  \
      --patch='[{"op": "remove", "path": "/spec/replicas"}]'
    ```
1.  Enable cluster autoscaling to configure the minimum and maximum node counts for your node pools. Run the following command:
    ```terminal
    $ oc patch -n <hosted_cluster_namespace> \
      nodepool <nodepool_name> \
      --type=merge --patch='{"spec": {"autoScaling": {"max": 3, "min": 1}}}'
    ```

**Verification**

*   To verify that all compute nodes are in the `Ready` status, run the following command:
    ```terminal
    $ oc --kubeconfig <hosted_cluster_name>.kubeconfig get nodes
    ```