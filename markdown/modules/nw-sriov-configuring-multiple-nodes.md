{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring parallel node draining during SR-IOV network policy updates {id="configure-sr-iov-operator-parallel-nodes_{{ context }}"}

By default, the SR-IOV Network Operator drains workloads from a node before every policy change. The Operator performs this action, one node at a time, to ensure that the reconfiguration does not impact workloads. {._abstract}

In large clusters, draining nodes sequentially can be time-consuming, taking hours or even days. In time-sensitive environments, you can enable parallel node draining in an `SriovNetworkPoolConfig` custom resource (CR) for faster rollouts of SR-IOV network configurations. 

To configure parallel draining, use the `SriovNetworkPoolConfig` CR to create a node pool. You can then add nodes to the pool and define the maximum number of nodes in the pool that the Operator can drain in parallel. With this approach, you can enable parallel draining for faster reconfiguration while ensuring you still have enough nodes remaining in the pool to handle any running workloads.


:::note

A node can only belong to one SR-IOV network pool configuration. If a node is not part of a pool, the node gets added to a virtual, default, pool that with a configuration for draining one node at a time only.

The node might restart during the draining process.

:::


The procedure requires that you create SR-IOV resources and then parallel drain the nodes.

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.
*   Install the SR-IOV Network Operator.
*   Nodes have hardware that support SR-IOV.

**Procedure**

1.  Create a YAML file that defines the `SriovNetworkPoolConfig` resource:
    ```yaml title="Example sriov-nw-pool.yaml file"
    apiVersion: v1
    kind: SriovNetworkPoolConfig
    metadata:
      name: pool-1
      namespace: openshift-sriov-network-operator
    spec:
      maxUnavailable: 2
      nodeSelector:
        matchLabels:
          node-role.kubernetes.io/worker: ""
    ```

    where:

    `name`
    :   Specify the name of the `SriovNetworkPoolConfig` object.

    `namespace`
    :   Specify namespace where the SR-IOV Network Operator is installed.

    `maxUnavailable`
    :   Specify an integer number, or percentage value, for nodes that can be unavailable in the pool during an update. For example, if you have 10 nodes and you set the maximum unavailable to 2, then only 2 nodes can be drained in parallel at any time, leaving 8 nodes for handling workloads.

    `nodeSelector`
    :   Specify the nodes to add the pool by using the node selector. This example adds all nodes with the `worker` role to the pool.

1.  Create the `SriovNetworkPoolConfig` resource by running the following command:
    ```terminal
    $ oc create -f sriov-nw-pool.yaml
    ```
1.  Create the `sriov-test` namespace by running the following command:
    ```terminal
    $ oc create namespace sriov-test
    ```
1.  Create a YAML file that defines the `SriovNetworkNodePolicy` resource, as demonstrated in the following example YAML file:
    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetworkNodePolicy
    metadata:
      name: sriov-nic-1
      namespace: openshift-sriov-network-operator
    spec:
      deviceType: netdevice
      nicSelector:
        pfNames: ["ens1"]
      nodeSelector:
        node-role.kubernetes.io/worker: ""
      numVfs: 5
      priority: 99
      resourceName: sriov_nic_1
    ```
1.  Create the `SriovNetworkNodePolicy` resource by running the following command:
    ```terminal
    $ oc create -f sriov-node-policy.yaml
    ```
1.  Create a YAML file that defines the `SriovNetwork` resource:
    ```yaml title="Example sriov-network.yaml file"
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetwork
    metadata:
      name: sriov-nic-1
      namespace: openshift-sriov-network-operator
    spec:
      linkState: auto
      networkNamespace: sriov-test
      resourceName: sriov_nic_1
      capabilities: '{ "mac": true, "ips": true }'
      ipam: '{ "type": "static" }'
    ```
1.  Create the `SriovNetwork` resource by running the following command:
    ```terminal
    $ oc create -f sriov-network.yaml
    ```
1.  View the node pool you created by running the following command:
    ```terminal
    $ oc get sriovNetworkpoolConfig -n openshift-sriov-network-operator
    ```

    Expected output shows the name of the node pool, such as `pool-1`, that includes all the node that have the `worker` role and the age of the node pool in seconds, such as `67s`. 
1.  Update the number of virtual functions in the `SriovNetworkNodePolicy` resource to trigger workload draining in the cluster:
    ```terminal
    $ oc patch SriovNetworkNodePolicy sriov-nic-1 -n openshift-sriov-network-operator --type merge -p '{"spec": {"numVfs": 4}}'
    ```
1.  Check the draining status on the target cluster by running the following command:
    ```terminal
    $ oc get sriovNetworkNodeState -n openshift-sriov-network-operator
    ```
    ```terminal title="Example output"
    NAMESPACE                          NAME       SYNC STATUS   DESIRED SYNC STATE   CURRENT SYNC STATE   AGE
    openshift-sriov-network-operator   worker-0   InProgress    Drain_Required       DrainComplete        3d10h
    openshift-sriov-network-operator   worker-1   InProgress    Drain_Required       DrainComplete        3d10h
    ```

    When the draining process completes, the `SYNC STATUS` changes to `Succeeded`, and the `DESIRED SYNC STATE` and `CURRENT SYNC STATE` values return to `IDLE`.