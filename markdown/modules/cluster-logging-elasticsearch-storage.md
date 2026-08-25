{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring persistent storage for the log store {id="cluster-logging-elasticsearch-storage_{{ context }}"}

Elasticsearch requires persistent storage. The faster the storage, the faster the Elasticsearch performance.


:::warning

Using NFS storage as a volume or a persistent volume (or via NAS such as
Gluster) is not supported for Elasticsearch storage, as Lucene relies on file
system behavior that NFS does not supply. Data corruption and other problems can
occur.

:::


**Prerequisites**

*   The Red Hat OpenShift Logging and Elasticsearch Operators must be installed.

**Procedure**

1.  Edit the `ClusterLogging` CR to specify that each data node in the cluster is bound to a Persistent Volume Claim.
    ```yaml
    apiVersion: "logging.openshift.io/v1"
    kind: "ClusterLogging"
    metadata:
      name: "instance"
    # ...
    spec:
      logStore:
        type: "elasticsearch"
        elasticsearch:
          nodeCount: 3
          storage:
            storageClassName: "gp2"
            size: "200G"
    ```

This example specifies each data node in the cluster is bound to a Persistent Volume Claim that requests "200G" of AWS General Purpose SSD (gp2) storage.


:::note

If you use a local volume for persistent storage, do not use a raw block volume, which is described with `volumeMode: block` in the `LocalVolume` object. Elasticsearch cannot use raw block volumes.

:::