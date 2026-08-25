{%- set _mod_docs_content_type = "PROCEDURE" %}
# Elasticsearch node disk high watermark reached {id="es-node-disk-high-watermark-reached_{{ context }}"}

Elasticsearch attempts to relocate shards away from a node that has reached the high watermark to a node with low disk usage that has not crossed any watermark threshold limits.

To allocate shards to a particular node, you must free up some space on that node. If increasing the disk space is not possible, try adding a new data node to the cluster, or decrease the total cluster redundancy policy.

{% include "./snippets/es-pod-var-logging.md" %}

**Procedure**

1.  Identify the node on which Elasticsearch is deployed by running the following command:
    ```terminal
    $ oc -n openshift-logging get po -o wide
    ```
1.  Check the disk space on each node:
    ```terminal
    $ for pod in `oc -n openshift-logging get po -l component=elasticsearch -o jsonpath='{.items[*].metadata.name}'`; \
      do echo $pod; oc -n openshift-logging exec -c elasticsearch $pod \
      -- df -h /elasticsearch/persistent; done
    ```
1.  Check if the cluster is rebalancing:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
      -- es_util --query=_cluster/health?pretty | grep relocating_shards
    ```

    If the command output shows relocating shards, the high watermark has been exceeded. The default value of the high watermark is 90%.
1.  Increase the disk space on all nodes. If increasing the disk space is not possible, try adding a new data node to the cluster, or decrease the total cluster redundancy policy.
1.  To check the current `redundancyPolicy`, run the following command:
    ```terminal
    $ oc -n openshift-logging get es elasticsearch \
      -o jsonpath='{.spec.redundancyPolicy}'
    ```

    If you are using a `ClusterLogging` resource on your cluster, run the following command:
    ```terminal
    $ oc -n openshift-logging get cl \
      -o jsonpath='{.items[*].spec.logStore.elasticsearch.redundancyPolicy}'
    ```

    If the cluster `redundancyPolicy` value is higher than the `SingleRedundancy` value, set it to the `SingleRedundancy` value and save this change.
1.  If the preceding steps do not fix the issue, delete the old indices.
    1.  Check the status of all indices on Elasticsearch by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME -- indices
        ```
    1.  Identify an old index that can be deleted.
    1.  Delete the index by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=<elasticsearch_index_name> -X DELETE
        ```