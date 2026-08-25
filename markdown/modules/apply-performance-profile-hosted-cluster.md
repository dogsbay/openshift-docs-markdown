{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring low-latency tuning in a hosted cluster {id="apply-performance-profile-hosted-cluster_{{ context }}"}

To set low latency with the performance profile on the nodes in your hosted cluster, you can use the Node Tuning Operator. In {{ hcp }}, you can configure low-latency tuning by creating config maps that contain `Tuned` objects and referencing those config maps in your node pools.  {._abstract}

The tuned object in this case is a `PerformanceProfile` object that defines the performance profile you want to apply to the nodes in a node pool.

**Procedure**

1.  Export the management cluster `kubeconfig` file by running the following command:
    ```terminal
    $ export MGMT_KUBECONFIG=<path_to_mgmt_kubeconfig>
    ```
1.  Create the `ConfigMap` object in the management cluster by running the following command:
    ```terminal
    $ oc --kubeconfig="$MGMT_KUBECONFIG" apply -f my-hosted-cp-performance-profile.yaml
    ```
1.  Edit the `NodePool` object in the `clusters` namespace adding the `spec.tuningConfig` field and the name of the created performance profile in that field by running the following command:
    ```terminal
    $ oc edit np -n clusters
    ```
    ```yaml
    apiVersion: hypershift.openshift.io/v1beta1
    kind: NodePool
    metadata:
      annotations:
        hypershift.openshift.io/nodePoolCurrentConfig: 2f752a2c
        hypershift.openshift.io/nodePoolCurrentConfigVersion: 998aa3ce
        hypershift.openshift.io/nodePoolPlatformMachineTemplate: democluster-us-east-1a-3dff55ec
      creationTimestamp: "2025-04-09T09:41:55Z"
      finalizers:
      - hypershift.openshift.io/finalizer
      generation: 1
      labels:
        hypershift.openshift.io/auto-created-for-infra: democluster
      name: democluster-us-east-1a
      namespace: clusters
      ownerReferences:
      - apiVersion: hypershift.openshift.io/v1beta1
        kind: HostedCluster
        name: democluster
        uid: af77e390-c289-433c-9d29-3aee8e5dc76f
      resourceVersion: "53056"
      uid: 11efa47c-5a7b-476c-85cf-a274f748a868
    spec:
      tuningConfig:  
      - name: performance
      arch: amd64
      clusterName: democluster
      management:
    ```

    :::note

    You can reference the same profile in multiple node pools. In {{ hcp }}, the Node Tuning Operator appends a hash of the node pool name and namespace to the name of the `Tuned` custom resources to distinguish them. After you make the changes, the system detects that a configuration change is required and starts a rolling update of the nodes in that pool to apply the new configuration.
    
    :::


**Verification**

1.  List all node pools across all namespaces by running the following command:
    ```terminal
    $ oc --kubeconfig="$MGMT_KUBECONFIG" get np -A
    ```
    ```terminal title="Example output"
    NAMESPACE   NAME                     CLUSTER       DESIRED NODES   CURRENT NODES   AUTOSCALING   AUTOREPAIR   VERSION   UPDATINGVERSION   UPDATINGCONFIG   MESSAGE
    clusters    democluster-us-east-1a   democluster   1               1               False         False        4.17.0    False             True                          
    ```

    :::note

    The `UPDATINGCONFIG` field indicates whether the node pool is in the process of updating its configuration. During this update, the `UPDATINGCONFIG` field in the node pool’s status becomes `True`. The new configuration is considered fully applied only when the `UPDATINGCONFIG` field returns to `False`.
    
    :::

1.  List all config maps in the `clusters-democluster` namespace by running the following command:
    ```terminal
    $ oc --kubeconfig="$MGMT_KUBECONFIG" get cm -n clusters-democluster
    ```
    ```terminal title="Example output"
    NAME                                                 DATA   AGE
    aggregator-client-ca                                 1      69m
    auth-config                                          1      68m
    aws-cloud-config                                     1      68m
    aws-ebs-csi-driver-trusted-ca-bundle                 1      66m
    ...                                                  1      67m
    kubelet-client-ca                                    1      69m
    kubeletconfig-performance-democluster-us-east-1a     1      22m
    ...
    ovnkube-identity-cm                                  2      66m
    performance-democluster-us-east-1a                   1      22m
    ...                                                  
    tuned-performance-democluster-us-east-1a             1      22m
    ```

    The output shows a kubeletconfig `kubeletconfig-performance-democluster-us-east-1a` and a performance profile `performance-democluster-us-east-1a` has been created. The Node Tuning Operator syncs the `Tuned` objects into the hosted cluster. You can verify which `Tuned` objects are defined and which profiles are applied to each node.
1.  List available secrets on the management cluster by running the following command:
    ```terminal
    $ oc get secrets -n clusters
    ```
    ```terminal title="Example output"
    NAME                              TYPE                      DATA   AGE
    builder-dockercfg-25qpp           kubernetes.io/dockercfg   1      128m
    default-dockercfg-mkvlz           kubernetes.io/dockercfg   1      128m
    democluster-admin-kubeconfig      Opaque                    1      127m
    democluster-etcd-encryption-key   Opaque                    1      128m
    democluster-kubeadmin-password    Opaque                    1      126m
    democluster-pull-secret           Opaque                    1      128m
    deployer-dockercfg-8lfpd          kubernetes.io/dockercfg   1      128m
    ```
1.  Extract the `kubeconfig` file for the hosted cluster by running the following command:
    ```terminal
    $ oc get secret <secret_name> -n clusters -o jsonpath='{.data.kubeconfig}' | base64 -d > hosted-cluster-kubeconfig
    ```
    ```terminal title="Example"
    $ oc get secret democluster-admin-kubeconfig -n clusters -o jsonpath='{.data.kubeconfig}' | base64 -d > hosted-cluster-kubeconfig
    ```
1.  Export the hosted cluster kubeconfig by running the following command:
    ```terminal
    $ export HC_KUBECONFIG=<path_to_hosted-cluster-kubeconfig>
    ```
1.  Verify that the kubeletconfig is mirrored in the hosted cluster by running the following command:
    ```terminal
    $ oc --kubeconfig="$HC_KUBECONFIG" get cm -n openshift-config-managed | grep kubelet
    ```
    ```terminal title="Example output"
    kubelet-serving-ca                            			1   79m
    kubeletconfig-performance-democluster-us-east-1a		1   15m
    ```
1.  Verify that the `single-numa-node` policy is set on the hosted cluster by running the following command:
    ```terminal
    $ oc --kubeconfig="$HC_KUBECONFIG" get cm kubeletconfig-performance-democluster-us-east-1a -o yaml -n openshift-config-managed | grep single
    ```
    ```terminal title="Example output"
        topologyManagerPolicy: single-numa-node
    ```