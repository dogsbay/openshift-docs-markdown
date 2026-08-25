{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret for Loki object storage by using the web console {id="loki-create-object-storage-secret-console_{{ context }}"}

To configure Loki object storage, you must create a secret. You can create a secret by using the {{ product_title }} web console.

**Prerequisites**

*   You have administrator permissions.
*   You have access to the {{ product_title }} web console.
*   You installed the {{ loki_op }}.

**Procedure**

1.  Go to **Workloads** -> **Secrets** in the **Administrator** perspective of the {{ product_title }} web console.
1.  From the **Create** drop-down list, select **From YAML**.
1.  Create a secret that uses the `access_key_id` and `access_key_secret` fields to specify your credentials and the `bucketnames`, `endpoint`, and `region` fields to define the object storage location. AWS is used in the following example:
    ```yaml title="Example Secret object"
    apiVersion: v1
    kind: Secret
    metadata:
      name: logging-loki-s3
      namespace: openshift-logging
    stringData:
      access_key_id: AKIAIOSFODNN7EXAMPLE
      access_key_secret: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
      bucketnames: s3-bucket-name
      endpoint: https://s3.eu-central-1.amazonaws.com
      region: eu-central-1
    ```