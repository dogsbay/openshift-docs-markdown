{%- set _mod_docs_content_type = "PROCEDURE" %}
# {{ rh_storage }} storage {id="logging-loki-storage-odf_{{ context }}"}

**Prerequisites**

*   You installed the {{ loki_op }}.
*   You installed the {{ oc_first }}.
*   You deployed [{{ rh_storage }}](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/).
*   You configured your {{ rh_storage }} cluster [for object storage](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html/managing_and_allocating_storage_resources/adding-file-and-object-storage-to-an-existing-external-ocs-cluster).

**Procedure**

1.  Create an `ObjectBucketClaim` custom resource in the `openshift-logging` namespace:
    ```yaml
    apiVersion: objectbucket.io/v1alpha1
    kind: ObjectBucketClaim
    metadata:
      name: loki-bucket-odf
      namespace: openshift-logging
    spec:
      generateBucketName: loki-bucket-odf
      storageClassName: openshift-storage.noobaa.io
    ```
1.  Get bucket properties from the associated `ConfigMap` object by running the following command:
    ```terminal
    BUCKET_HOST=$(oc get -n openshift-logging configmap loki-bucket-odf -o jsonpath='{.data.BUCKET_HOST}')
    BUCKET_NAME=$(oc get -n openshift-logging configmap loki-bucket-odf -o jsonpath='{.data.BUCKET_NAME}')
    BUCKET_PORT=$(oc get -n openshift-logging configmap loki-bucket-odf -o jsonpath='{.data.BUCKET_PORT}')
    ```
1.  Get bucket access key from the associated secret by running the following command:
    ```terminal
    ACCESS_KEY_ID=$(oc get -n openshift-logging secret loki-bucket-odf -o jsonpath='{.data.AWS_ACCESS_KEY_ID}' | base64 -d)
    SECRET_ACCESS_KEY=$(oc get -n openshift-logging secret loki-bucket-odf -o jsonpath='{.data.AWS_SECRET_ACCESS_KEY}' | base64 -d)
    ```
1.  Create an object storage secret with the name `logging-loki-odf` by running the following command:
    ```terminal
    $ oc create -n openshift-logging secret generic logging-loki-odf \
    --from-literal=access_key_id="<access_key_id>" \
    --from-literal=access_key_secret="<secret_access_key>" \
    --from-literal=bucketnames="<bucket_name>" \
    --from-literal=endpoint="https://<bucket_host>:<bucket_port>"
    ```