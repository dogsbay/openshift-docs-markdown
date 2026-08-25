{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding node pools {id="hcp-virt-add-node_{{ context }}"}

You can create node pools for a hosted cluster by specifying a name, number of replicas, and any additional information, such as memory and CPU requirements. {._abstract}

**Procedure**

1.  If the management cluster has a cluster-wide proxy configured, you must configure proxy settings in the `HostedCluster` resource by completing the following steps:
    1.  Edit the `HostedCluster` resource by entering the following command:
        ```terminal
        $ oc edit hc <hosted_cluster_name> -n <hosted_cluster_namespace>
        ```
    1.  In the `HostedCluster` resource, add the proxy configuration as shown in the following example:
        ```yaml
        apiVersion: hypershift.openshift.io/v1beta1
        kind: HostedCluster
        metadata:
          annotations:
        # ...
            hypershift.openshift.io/HasBeenAvailable: "true"
            hypershift.openshift.io/management-platform: VSphere
        # ...
          name: <hosted_cluster_name>
          namespace: <hosted_cluster_namespace>
        # ...
        spec:
        # ...
          clusterID: fa45babd-40f3-4085-9b30-8bc3b7df1557
          configuration:
            proxy:
              httpProxy: http://web-proxy.example.com:3128
              httpsProxy: http://web-proxy.example.com:3128
              noProxy: .example.com,192.168.10.0/24
        ```

        In the `spec.configuration.proxy` fields, specify the details of the proxy configuration.
    1.  Check the status on the management cluster by entering the following command:
        ```terminal
        $ oc get nodepool -n <hosted_cluster_namespace>
        ```
    1.  Check the status on the hosted cluster by entering the following command:
        ```terminal
        $ oc --kubeconfig <hosted_cluster_name>-kubeconfig get nodes
        ```
1.  To create a node pool, enter the following information. In this example, the node pool has more CPUs assigned to the VMs:
    ```terminal
    export NODEPOOL_NAME=${CLUSTER_NAME}-extra-cpu
    export WORKER_COUNT="2"
    export MEM="6Gi"
    export CPU="4"
    export DISK="16"

    $ hcp create nodepool kubevirt \
      --cluster-name $CLUSTER_NAME \
      --name $NODEPOOL_NAME \
      --node-count $WORKER_COUNT \
      --memory $MEM \
      --cores $CPU \
      --root-volume-size $DISK
    ```
1.  Check the status of the node pool by listing `nodepool` resources in the namespace:
    ```terminal
    $ oc get nodepools --namespace <hosted_cluster_namespace>
    ```
    ```terminal title="Example output"
    NAME                      CLUSTER         DESIRED NODES   CURRENT NODES   AUTOSCALING   AUTOREPAIR   VERSION   UPDATINGVERSION   UPDATINGCONFIG   MESSAGE
    example                   example         5               5               False         False        <4.x.0>
    example-extra-cpu         example         2                               False         False                  True              True             Minimum availability requires 2 replicas, current 0 available
    ```

    Replace `<4.x.0>` with the supported {{ product_title }} version that you want to use.

**Verification**

1.  After some time, you can check the status of the node pool by entering the following command:
    ```terminal
    $ oc --kubeconfig $CLUSTER_NAME-kubeconfig get nodes
    ```
    ```terminal title="Example output"
    NAME                      STATUS   ROLES    AGE     VERSION
    example-9jvnf             Ready    worker   97s     v1.27.4+18eadca
    example-n6prw             Ready    worker   116m    v1.27.4+18eadca
    example-nc6g4             Ready    worker   117m    v1.27.4+18eadca
    example-thp29             Ready    worker   4m17s   v1.27.4+18eadca
    example-twxns             Ready    worker   88s     v1.27.4+18eadca
    example-extra-cpu-zh9l5   Ready    worker   2m6s    v1.27.4+18eadca
    example-extra-cpu-zr8mj   Ready    worker   102s    v1.27.4+18eadca
    ```
1.  Verify that the node pool is in the status that you expect by entering this command:
    ```terminal
    $ oc get nodepools --namespace <hosted_cluster_namespace>
    ```
    ```terminal title="Example output"
    NAME                      CLUSTER         DESIRED NODES   CURRENT NODES   AUTOSCALING   AUTOREPAIR   VERSION   UPDATINGVERSION   UPDATINGCONFIG   MESSAGE
    example                   example         5               5               False         False        <4.x.0>
    example-extra-cpu         example         2               2               False         False        <4.x.0>
    ```

    Replace `<4.x.0>` with the supported {{ product_title }} version that you want to use.