{%- set _mod_docs_content_type = "PROCEDURE" %}
# Elasticsearch cluster health status is red {id="es-cluster-health-is-red_{{ context }}"}

At least one primary shard and its replicas are not allocated to a node. Use the following procedure to troubleshoot this alert.

{% include "./snippets/es-pod-var-logging.md" %}

**Procedure**

1.  Check the Elasticsearch cluster health and verify that the cluster `status` is red by running the following command:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME -- health
    ```
1.  List the nodes that have joined the cluster by running the following command:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
      -- es_util --query=_cat/nodes?v
    ```
1.  List the Elasticsearch pods and compare them with the nodes in the command output from the previous step, by running the following command:
    ```terminal
    $ oc -n openshift-logging get pods -l component=elasticsearch
    ```
1.  If some of the Elasticsearch nodes have not joined the cluster, perform the following steps.
    1.  Confirm that Elasticsearch has an elected master node by running the following command and observing the output:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=_cat/master?v
        ```
    1.  Review the pod logs of the elected master node for issues by running the following command and observing the output:
        ```terminal
        $ oc logs <elasticsearch_master_pod_name> -c elasticsearch -n openshift-logging
        ```
    1.  Review the logs of nodes that have not joined the cluster for issues by running the following command and observing the output:
        ```terminal
        $ oc logs <elasticsearch_node_name> -c elasticsearch -n openshift-logging
        ```
1.  If all the nodes have joined the cluster, check if the cluster is in the process of recovering by running the following command and observing the output:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
      -- es_util --query=_cat/recovery?active_only=true
    ```

    If there is no command output, the recovery process might be delayed or stalled by pending tasks.
1.  Check if there are pending tasks by running the following command and observing the output:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
      -- health | grep number_of_pending_tasks
    ```
1.  If there are pending tasks, monitor their status. If their status changes and indicates that the cluster is recovering, continue waiting. The recovery time varies according to the size of the cluster and other factors. Otherwise, if the status of the pending tasks does not change, this indicates that the recovery has stalled.
1.  If it seems like the recovery has stalled, check if the `cluster.routing.allocation.enable` value is set to `none`, by running the following command and observing the output:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
      -- es_util --query=_cluster/settings?pretty
    ```
1.  If the `cluster.routing.allocation.enable` value is set to `none`, set it to `all`, by running the following command:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
      -- es_util --query=_cluster/settings?pretty \
      -X PUT -d '{"persistent": {"cluster.routing.allocation.enable":"all"}}'
    ```
1.  Check if any indices are still red by running the following command and observing the output:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
      -- es_util --query=_cat/indices?v
    ```
1.  If any indices are still red, try to clear them by performing the following steps.
    1.  Clear the cache by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=<elasticsearch_index_name>/_cache/clear?pretty
        ```
    1.  Increase the max allocation retries by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=<elasticsearch_index_name>/_settings?pretty \
          -X PUT -d '{"index.allocation.max_retries":10}'
        ```
    1.  Delete all the scroll items by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=_search/scroll/_all -X DELETE
        ```
    1.  Increase the timeout by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=<elasticsearch_index_name>/_settings?pretty \
          -X PUT -d '{"index.unassigned.node_left.delayed_timeout":"10m"}'
        ```
1.  If the preceding steps do not clear the red indices, delete the indices individually.
    1.  Identify the red index name by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=_cat/indices?v
        ```
    1.  Delete the red index by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=<elasticsearch_red_index_name> -X DELETE
        ```
1.  If there are no red indices and the cluster status is red, check for a continuous heavy processing load on a data node.
    1.  Check if the Elasticsearch JVM Heap usage is high by running the following command:
        ```terminal
        $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
          -- es_util --query=_nodes/stats?pretty
        ```

        In the command output, review the `node_name.jvm.mem.heap_used_percent` field to determine the JVM Heap usage.
    1.  Check for high CPU utilization. For more information about CPU utilitzation, see the {{ product_title }} "Reviewing monitoring dashboards" documentation.