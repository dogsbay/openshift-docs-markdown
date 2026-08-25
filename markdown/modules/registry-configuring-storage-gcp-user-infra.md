{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the registry storage for {{ gcp_short }} with user-provisioned infrastructure {id="registry-configuring-storage-gcp-user-infra_{{ context }}"}

If the Registry Operator cannot create a {{ gcp_first }} bucket, you must set up the storage medium manually and configure the settings in the registry custom resource (CR). {._abstract}

**Prerequisites**

*   A cluster on {{ gcp_short }} with user-provisioned infrastructure.
*   To configure registry storage for {{ gcp_short }}, you need to provide Registry Operator
cloud credentials.
*   For GCS on {{ gcp_short }} storage, the secret is expected to contain one key whose value is the
contents of a credentials file provided by {{ gcp_short }}:
    *   `REGISTRY_STORAGE_GCS_KEYFILE`


    :::warning

    You can secure your registry images that use a {{ gcp_full }} Storage bucket by setting [public access prevention](https://cloud.google.com/storage/docs/using-public-access-prevention).
    
    :::


**Procedure**

1.  Set up an [Object Lifecycle Management policy](https://cloud.google.com/storage/docs/lifecycle) to abort incomplete multipart uploads that are one day old.
1.  Fill in the storage configuration in `configs.imageregistry.operator.openshift.io/cluster`:
    ```terminal
    $ oc edit configs.imageregistry.operator.openshift.io/cluster
    ```
    ```yaml title="Example configuration"
    apiVersion: imageregistry.operator.openshift.io/v1
    kind: Config
    metadata:
      name: cluster
    spec:
      storage:
        gcs:
          bucket: <bucket_name>
          projectID: <project_id>
          region: <region_name>
    ```