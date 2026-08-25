{%- set _mod_docs_content_type = "PROCEDURE" %}
# Elasticsearch node disk low watermark reached {id="es-node-disk-low-watermark-reached_{{ context }}"}

Elasticsearch does not allocate shards to nodes that reach the low watermark.

{% include "./snippets/es-pod-var-logging.md" %}

**Procedure**

1.  Identify the node on which Elasticsearch is deployed by running the following command:
    ```terminal
    $ oc -n openshift-logging get po -o wide
    ```
1.  Check if there are unassigned shards by running the following command:
    ```terminal
    $ oc exec -n openshift-logging -c elasticsearch $ES_POD_NAME \
      -- es_util --query=_cluster/health?pretty | grep unassigned_shards
    ```
1.  If there are unassigned shards, check the disk space on each node, by running the following command:
    ```terminal
    $ for pod in `oc -n openshift-logging get po -l component=elasticsearch -o jsonpath='{.items[*].metadata.name}'`; \
      do echo $pod; oc -n openshift-logging exec -c elasticsearch $pod \
      -- df -h /elasticsearch/persistent; done
    ```
1.  In the command output, check the `Use` column to determine the used disk percentage on that node.
    ```terminal title="Example output"
    elasticsearch-cdm-kcrsda6l-1-586cc95d4f-h8zq8
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/nvme1n1     19G  522M   19G   3% /elasticsearch/persistent
    elasticsearch-cdm-kcrsda6l-2-5b548fc7b-cwwk7
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/nvme2n1     19G  522M   19G   3% /elasticsearch/persistent
    elasticsearch-cdm-kcrsda6l-3-5dfc884d99-59tjw
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/nvme3n1     19G  528M   19G   3% /elasticsearch/persistent
    ```

    If the used disk percentage is above 85%, the node has exceeded the low watermark, and shards can no longer be allocated to this node.
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