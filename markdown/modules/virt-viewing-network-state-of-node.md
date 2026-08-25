{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the network state of a node by using the CLI {id="virt-viewing-network-state-of-node_{{ context }}"}

Node network state is the network configuration for all nodes in the cluster. A `NodeNetworkState` object exists on every node in the cluster. This object is periodically updated and captures the state of the network for that node. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  List all the `NodeNetworkState` objects in the cluster:
    ```terminal
    $ oc get nns
    ```
1.  Inspect a `NodeNetworkState` object to view the network on that node. The output in this example has been redacted for clarity:
    ```terminal
    $ oc get nns node01 -o yaml
    ```

    Example output:
    ```yaml
    apiVersion: nmstate.io/v1
    kind: NodeNetworkState
    metadata:
      name: node01
    status:
      currentState:
        dns-resolver:
    # ...
        interfaces:
    # ...
        route-rules:
    # ...
        routes:
    # ...
      lastSuccessfulUpdateTime: "2020-01-31T12:14:00Z"
    ```

    `metadata.name`
    :   The name of the `NodeNetworkState` object is taken from the node.

    `status.currentState`
    :   The `currentState` contains the complete network configuration for the node, including DNS, interfaces, and routes.

    `status.lastSuccessfulUpdateTime`
    :   Timestamp of the last successful update. This is updated periodically if the node is reachable and can be used to evaluate the freshness of the report.