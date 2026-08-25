{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using tolerations to control log store pod placement {id="cluster-logging-logstore-tolerations_{{ context }}"}

By default, log store pods have the following toleration configurations:

```yaml title="Elasticsearch log store pods default tolerations"
apiVersion: v1
kind: Pod
metadata:
  name: elasticsearch-example
  namespace: openshift-logging
spec:
# ...
  tolerations:
  - effect: NoSchedule
    key: node.kubernetes.io/disk-pressure
    operator: Exists
  - effect: NoExecute
    key: node.kubernetes.io/not-ready
    operator: Exists
    tolerationSeconds: 300
  - effect: NoExecute
    key: node.kubernetes.io/unreachable
    operator: Exists
    tolerationSeconds: 300
  - effect: NoSchedule
    key: node.kubernetes.io/memory-pressure
    operator: Exists
# ...
```

```yaml title="LokiStack log store pods default tolerations"
apiVersion: v1
kind: Pod
metadata:
  name: lokistack-example
  namespace: openshift-logging
spec:
# ...
  tolerations:
  - effect: NoExecute
    key: node.kubernetes.io/not-ready
    operator: Exists
    tolerationSeconds: 300
  - effect: NoExecute
    key: node.kubernetes.io/unreachable
    operator: Exists
    tolerationSeconds: 300
  - effect: NoSchedule
    key: node.kubernetes.io/memory-pressure
    operator: Exists
# ...
```

You can configure a toleration for log store pods by adding a taint and then modifying the `tolerations` syntax in the `ClusterLogging` custom resource (CR).

**Prerequisites**

*   You have installed the {{ clo }}.
*   You have installed the {{ oc_first }}.
*   You have deployed an internal log store that is either Elasticsearch or LokiStack.

**Procedure**

1.  Add a taint to a node where you want to schedule the {{ logging }} pods, by running the following command:
    ```terminal
    $ oc adm taint nodes <node_name> <key>=<value>:<effect>
    ```
    ```terminal title="Example command"
    $ oc adm taint nodes node1 lokistack=node:NoExecute
    ```

    This example places a taint on `node1` that has key `lokistack`, value `node`, and taint effect `NoExecute`. Nodes with the `NoExecute` effect schedule only pods that match the taint and remove existing pods that do not match.
1.  Edit the `logstore` section of the `ClusterLogging` CR to configure a toleration for the log store pods:
    ```yaml title="Example ClusterLogging CR"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogging
    metadata:
    # ...
    spec:
    # ...
      logStore:
        type: lokistack
        elasticsearch:
          nodeCount: 1
          tolerations:
          - key: lokistack (1)
            operator: Exists (2)
            effect: NoExecute (3)
            tolerationSeconds: 6000 (4)
    # ...
    ```
    1.  Specify the key that you added to the node.
    1.  Specify the `Exists` operator to require a taint with the key `lokistack` to be present on the node.
    1.  Specify the `NoExecute` effect.
    1.  Optional: Specify the `tolerationSeconds` parameter to set how long a pod can remain bound to a node before being evicted.

This toleration matches the taint created by the `oc adm taint` command. A pod with this toleration can be scheduled onto `node1`.