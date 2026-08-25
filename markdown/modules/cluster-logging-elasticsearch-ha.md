{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring replication policy for the log store {id="cluster-logging-elasticsearch-ha_{{ context }}"}

You can define how Elasticsearch shards are replicated across data nodes in the cluster.

**Prerequisites**

*   The Red Hat OpenShift Logging and Elasticsearch Operators must be installed.

**Procedure**

1.  Edit the `ClusterLogging` custom resource (CR) in the `openshift-logging` project:
    ```terminal
    $ oc -n openshift-logging edit ClusterLogging instance
    ```
    ```yaml
    apiVersion: "logging.openshift.io/v1"
    kind: "ClusterLogging"
    metadata:
      name: "instance"

    ....

    spec:
      logStore:
        type: "elasticsearch"
        elasticsearch:
          redundancyPolicy: "SingleRedundancy" (1)
    ```
    1.  Specify a redundancy policy for the shards. The change is applied upon saving the changes.
        *   **FullRedundancy**. Elasticsearch fully replicates the primary shards for each index
        to every data node. This provides the highest safety, but at the cost of the highest amount of disk required and the poorest performance.
        *   **MultipleRedundancy**. Elasticsearch fully replicates the primary shards for each index to half of the data nodes.
        This provides a good tradeoff between safety and performance.
        *   **SingleRedundancy**. Elasticsearch makes one copy of the primary shards for each index.
        Logs are always available and recoverable as long as at least two data nodes exist.
        Better performance than MultipleRedundancy, when using 5 or more nodes. You cannot
        apply this policy on deployments of single Elasticsearch node.
        *   **ZeroRedundancy**. Elasticsearch does not make copies of the primary shards.
        Logs might be unavailable or lost in the event a node is down or fails.
        Use this mode when you are more concerned with performance than safety, or have
        implemented your own disk/PVC backup/restore strategy.


:::note

The number of primary shards for the index templates is equal to the number of Elasticsearch data nodes.

:::