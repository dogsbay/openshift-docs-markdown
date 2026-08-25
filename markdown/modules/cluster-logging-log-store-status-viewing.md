{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the status of the Elasticsearch log store {id="cluster-logging-log-store-comp-viewing_{{ context }}"}

You can view the status of the Elasticsearch log store.

**Prerequisites**

*   The {{ clo }} and {{ es_op }} are installed.

**Procedure**

1.  Change to the `openshift-logging` project by running the following command:
    ```terminal
    $ oc project openshift-logging
    ```
1.  To view the status:
    1.  Get the name of the Elasticsearch log store instance by running the following command:
        ```terminal
        $ oc get Elasticsearch
        ```
        ```terminal title="Example output"
        NAME            AGE
        elasticsearch   5h9m
        ```
    1.  Get the Elasticsearch log store status by running the following command:
        ```terminal
        $ oc get Elasticsearch <Elasticsearch-instance> -o yaml
        ```

        For example:
        ```terminal
        $ oc get Elasticsearch elasticsearch -n openshift-logging -o yaml
        ```

        The output includes information similar to the following:
        ```yaml title="Example output"
        status: (1)
          cluster: (2)
            activePrimaryShards: 30
            activeShards: 60
            initializingShards: 0
            numDataNodes: 3
            numNodes: 3
            pendingTasks: 0
            relocatingShards: 0
            status: green
            unassignedShards: 0
          clusterHealth: ""
          conditions: [] (3)
          nodes: (4)
          - deploymentName: elasticsearch-cdm-zjf34ved-1
            upgradeStatus: {}
          - deploymentName: elasticsearch-cdm-zjf34ved-2
            upgradeStatus: {}
          - deploymentName: elasticsearch-cdm-zjf34ved-3
            upgradeStatus: {}
          pods: (5)
            client:
              failed: []
              notReady: []
              ready:
              - elasticsearch-cdm-zjf34ved-1-6d7fbf844f-sn422
              - elasticsearch-cdm-zjf34ved-2-dfbd988bc-qkzjz
              - elasticsearch-cdm-zjf34ved-3-c8f566f7c-t7zkt
            data:
              failed: []
              notReady: []
              ready:
              - elasticsearch-cdm-zjf34ved-1-6d7fbf844f-sn422
              - elasticsearch-cdm-zjf34ved-2-dfbd988bc-qkzjz
              - elasticsearch-cdm-zjf34ved-3-c8f566f7c-t7zkt
            master:
              failed: []
              notReady: []
              ready:
              - elasticsearch-cdm-zjf34ved-1-6d7fbf844f-sn422
              - elasticsearch-cdm-zjf34ved-2-dfbd988bc-qkzjz
              - elasticsearch-cdm-zjf34ved-3-c8f566f7c-t7zkt
          shardAllocationEnabled: all
        ```
        1.  In the output, the cluster status fields appear in the `status` stanza.
        1.  The status of the Elasticsearch log store:
            *   The number of active primary shards.
            *   The number of active shards.
            *   The number of shards that are initializing.
            *   The number of Elasticsearch log store data nodes.
            *   The total number of Elasticsearch log store nodes.
            *   The number of pending tasks.
            *   The Elasticsearch log store status: `green`, `red`, `yellow`.
            *   The number of unassigned shards.
        1.  Any status conditions, if present. The Elasticsearch log store status indicates the reasons from the scheduler if a pod could not be placed. Any events related to the following conditions are shown:
            *   Container Waiting for both the Elasticsearch log store and proxy containers.
            *   Container Terminated for both the Elasticsearch log store and proxy containers.
            *   Pod unschedulable.
            Also, a condition is shown for a number of issues; see **Example condition messages**.
        1.  The Elasticsearch log store nodes in the cluster, with `upgradeStatus`.
        1.  The Elasticsearch log store client, data, and master pods in the cluster, listed under `failed`, `notReady`, or `ready` state.

## Example condition messages {id="cluster-logging-elasticsearch-status-message_{{ context }}"}

The following are examples of some condition messages from the `Status` section of the Elasticsearch instance.

The following status message indicates that a node has exceeded the configured low watermark, and no shard will be allocated to this node.

```yaml
status:
  nodes:
  - conditions:
    - lastTransitionTime: 2019-03-15T15:57:22Z
      message: Disk storage usage for node is 27.5gb (36.74%). Shards will be not
        be allocated on this node.
      reason: Disk Watermark Low
      status: "True"
      type: NodeStorage
    deploymentName: example-elasticsearch-cdm-0-1
    upgradeStatus: {}
```

The following status message indicates that a node has exceeded the configured high watermark, and shards will be relocated to other nodes.

```yaml
status:
  nodes:
  - conditions:
    - lastTransitionTime: 2019-03-15T16:04:45Z
      message: Disk storage usage for node is 27.5gb (36.74%). Shards will be relocated
        from this node.
      reason: Disk Watermark High
      status: "True"
      type: NodeStorage
    deploymentName: example-elasticsearch-cdm-0-1
    upgradeStatus: {}
```

The following status message indicates that the Elasticsearch log store node selector in the custom resource (CR) does not match any nodes in the cluster:

```yaml
status:
    nodes:
    - conditions:
      - lastTransitionTime: 2019-04-10T02:26:24Z
        message: '0/8 nodes are available: 8 node(s) didn''t match node selector.'
        reason: Unschedulable
        status: "True"
        type: Unschedulable
```

The following status message indicates that the Elasticsearch log store CR uses a non-existent persistent volume claim (PVC).

```yaml
status:
   nodes:
   - conditions:
     - last Transition Time:  2019-04-10T05:55:51Z
       message:               pod has unbound immediate PersistentVolumeClaims (repeated 5 times)
       reason:                Unschedulable
       status:                True
       type:                  Unschedulable
```

The following status message indicates that your Elasticsearch log store cluster does not have enough nodes to support the redundancy policy.

```yaml
status:
  clusterHealth: ""
  conditions:
  - lastTransitionTime: 2019-04-17T20:01:31Z
    message: Wrong RedundancyPolicy selected. Choose different RedundancyPolicy or
      add more nodes with data roles
    reason: Invalid Settings
    status: "True"
    type: InvalidRedundancy
```

This status message indicates your cluster has too many control plane nodes:

```yaml
status:
  clusterHealth: green
  conditions:
    - lastTransitionTime: '2019-04-17T20:12:34Z'
      message: >-
        Invalid master nodes count. Please ensure there are no more than 3 total
        nodes with master roles
      reason: Invalid Settings
      status: 'True'
      type: InvalidMasters
```

The following status message indicates that Elasticsearch storage does not support the change you tried to make.

For example:
```yaml
status:
  clusterHealth: green
  conditions:
    - lastTransitionTime: "2021-05-07T01:05:13Z"
      message: Changing the storage structure for a custom resource is not supported
      reason: StorageStructureChangeIgnored
      status: 'True'
      type: StorageStructureChangeIgnored
```

The `reason` and `type` fields specify the type of unsupported change:


`StorageClassNameChangeIgnored`
:   Unsupported change to the storage class name.

`StorageSizeChangeIgnored`
:   Unsupported change the storage size.

`StorageStructureChangeIgnored`
:   Unsupported change between ephemeral and persistent storage structures.

    :::important


    If you try to configure the `ClusterLogging` CR to switch from ephemeral to persistent storage, the {{ es_op }} creates a persistent volume claim (PVC) but does not create a persistent volume (PV). To clear the `StorageStructureChangeIgnored` status, you must revert the change to the `ClusterLogging` CR and delete the PVC.
    
    :::