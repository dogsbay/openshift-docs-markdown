{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the log store for emptyDir storage {id="cluster-logging-elasticsearch-persistent-storage-empty_{{ context }}"}

You can use emptyDir with your log store, which creates an ephemeral
deployment in which all of a pod’s data is lost upon restart.


:::note

When using emptyDir, if log storage is restarted or redeployed, you will lose data.

:::


**Prerequisites**

*   The Red Hat OpenShift Logging and Elasticsearch Operators must be installed.

**Procedure**

1.  Edit the `ClusterLogging` CR to specify emptyDir:
    ```yaml
     spec:
        logStore:
          type: "elasticsearch"
          elasticsearch:
            nodeCount: 3
            storage: {}
    ```