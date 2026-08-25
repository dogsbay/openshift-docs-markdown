{%- set _mod_docs_content_type = "PROCEDURE" %}
# Elasticsearch disk space is running low {id="es-disk-space-low_{{ context }}"}

Elasticsearch is predicted to run out of disk space within the next 6 hours based on current disk usage. Use the following procedure to troubleshoot this alert.

**Procedure**

1.  Get the disk space of the Elasticsearch node:
    ```terminal
    $ for pod in `oc -n openshift-logging get po -l component=elasticsearch -o jsonpath='{.items[*].metadata.name}'`; \
      do echo $pod; oc -n openshift-logging exec -c elasticsearch $pod \
      -- df -h /elasticsearch/persistent; done
    ```
1.  In the command output, check the `Avail` column to determine the free disk space on that node.
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
1.  Increase the disk space on all nodes. If increasing the disk space is not possible, try adding a new data node to the cluster, or decrease the total cluster redundancy policy.
1.  To check the current `redundancyPolicy`, run the following command:
    ```terminal
    $ oc -n openshift-logging get es elasticsearch -o jsonpath='{.spec.redundancyPolicy}'
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