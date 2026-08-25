{%- set _mod_docs_content_type = "PROCEDURE" %}
# Minio storage {id="logging-loki-storage-minio_{{ context }}"}

**Prerequisites**

*   You installed the {{ loki_op }}.
*   You installed the {{ oc_first }}.
*   You have [Minio](https://operator.min.io/) deployed on your cluster.
*   You created a [bucket](https://docs.min.io/docs/minio-client-complete-guide.html) on Minio.

**Procedure**

*   Create an object storage secret with the name `logging-loki-minio` by running the following command:
    ```terminal
    $ oc create secret generic logging-loki-minio \
      --from-literal=bucketnames="<bucket_name>" \
      --from-literal=endpoint="<minio_bucket_endpoint>" \
      --from-literal=access_key_id="<minio_access_key_id>" \
      --from-literal=access_key_secret="<minio_access_key_secret>"
    ```