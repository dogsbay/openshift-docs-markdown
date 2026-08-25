{%- set _mod_docs_content_type = "PROCEDURE" %}
# {{ gcp_full }} storage {id="logging-loki-storage-gcp_{{ context }}"}

**Prerequisites**

*   You installed the {{ loki_op }}.
*   You installed the {{ oc_first }}.
*   You created a [project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) on {{ gcp_first }}.
*   You created a [bucket](https://cloud.google.com/storage/docs/creating-buckets) in the same project.
*   You created a [service account](https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account) in the same project for {{ gcp_short }} authentication.

**Procedure**

1.  Copy the service account credentials received from {{ gcp_short }} into a file called `key.json`.
1.  Create an object storage secret with the name `logging-loki-gcs` by running the following command:
    ```terminal
    $ oc create secret generic logging-loki-gcs \
      --from-literal=bucketname="<bucket_name>" \
      --from-file=key.json="<path/to/key.json>"
    ```