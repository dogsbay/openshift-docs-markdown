{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the priority expander in a hosted cluster {id="priority-expander-autoscaler-hcp_{{ context }}"}

You can define the priority for your node pools and create high priority machines before low priority machines by using the priority expander in your hosted cluster. {._abstract}

**Prerequisites**

*   You have created the `HostedCluster` and `NodePool` resources.

**Procedure**

1.  To define the priority for your node pools, create a config map named `priority-expander-configmap.yaml` in your hosted cluster. Node pools with low numbers receive high priority. See the following example configuration:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: cluster-autoscaler-priority-expander
      namespace: kube-system
    # ...
    data:
      priorities: |-
        10:
          - ".*<node_pool_name1>.*"
        100:
          - ".*<node_pool_name2>.*"
    # ...
    ```
1.  Generate the `kubeconfig` file by running the following command:
    ```terminal
    $ hcp create kubeconfig --name <hosted_cluster_name> --namespace <hosted_cluster_namespace> > nested.config
    ```
1.  Create the `ConfigMap` object by running the following command:
    ```terminal
    $ oc --kubeconfig nested.config create -f priority-expander-configmap.yaml
    ```
1.  Enable cluster autoscaling by setting the priority expander for your hosted cluster. Run the following command:
    ```terminal
    $ oc patch -n <hosted_cluster_namespace> \
      hostedcluster <hosted_cluster_name> \
      --type=merge \
      --patch='{"spec": {"autoscaling": {"scaling": "ScaleUpOnly", "maxPodGracePeriod": 60, "expanders": ["Priority"]}}}'
    ```
1.  Remove the `spec.replicas` field from the `NodePool` resource to allow the cluster autoscaler to manage the node count. Run the following command:
    ```terminal
    $ oc patch -n <hosted_cluster_namespace> \
      nodepool <node_pool_name> \
      --type=json
      --patch='[{"op": "remove", "path": "/spec/replicas"}]'
    ```
1.  Enable cluster autoscaling to configure the minimum and maximum node counts for your node pools. Run the following command:
    ```terminal
    $ oc patch -n <hosted_cluster_namespace> \
      nodepool <nodepool_name> \
      --type=merge --patch='{"spec": {"autoScaling": {"max": 3, "min": 1}}}'
    ```

**Verification**

*   After you apply new workloads, verify that the compute nodes associated with the priority node pool are scaled up first. Run the following command to check the status of the compute node:
    ```terminal
    $ oc --kubeconfig nested.config get nodes -l 'hypershift.openshift.io/nodePool=<node_pool_name>'
    ```