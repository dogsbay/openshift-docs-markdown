{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating secrets for different credentials {id="oadp-secrets-for-different-credentials_{{ context }}"}

Create separate `Secret` objects when your backup and snapshot locations require different credentials. This allows you to configure distinct authentication for each storage location while maintaining secure credential management. {._abstract}

**Procedure**

1.  Create a `credentials-velero` file for the snapshot location in the appropriate format for your cloud provider.
1.  Create a `Secret` for the snapshot location with the default name:
    ```terminal
    $ oc create secret generic {{ credentials }} -n openshift-adp --from-file cloud=credentials-velero
    ```
1.  Create a `credentials-velero` file for the backup location in the appropriate format for your object storage.
1.  Create a `Secret` for the backup location with a custom name:
    ```terminal
    $ oc create secret generic <custom_secret> -n openshift-adp --from-file cloud=credentials-velero
    ```
1.  Add the `Secret` with the custom name to the `DataProtectionApplication` CR, as in the following example:

{% if installing_oadp_azure %}
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
    ...
      backupLocations:
        - velero:
            config:
              resourceGroup: <azure_resource_group>
              storageAccount: <azure_storage_account_id>
              subscriptionId: <azure_subscription_id>
              storageAccountKeyEnvVar: AZURE_STORAGE_ACCOUNT_ACCESS_KEY
            credential:
              key: cloud
              name: <custom_secret>
            provider: azure
            default: true
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
      snapshotLocations:
        - velero:
            config:
              resourceGroup: <azure_resource_group>
              subscriptionId: <azure_subscription_id>
              incremental: "true"
            provider: {{ provider }}
    ```

    where:

    `custom_secret`
    :   Specifies the backup location `Secret` with custom name.
{% endif %}
{% if installing_oadp_gcp %}
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
    ...
      backupLocations:
        - velero:
            provider: {{ provider }}
            default: true
            credential:
              key: cloud
              name: <custom_secret>
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
      snapshotLocations:
        - velero:
            provider: {{ provider }}
            default: true
            config:
              project: <project>
              snapshotLocation: us-west1
    ```
    where:
    `custom_secret`:: Specifies the backup location `Secret` with custom name.
{% endif %}
{% if installing_oadp_mcg %}
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
    ...
      backupLocations:
        - velero:
            config:
              profile: "default"
              region: <region_name>
              s3Url: <url>
              insecureSkipTLSVerify: "true"
              s3ForcePathStyle: "true"
            provider: {{ provider }}
            default: true
            credential:
              key: cloud
              name:  <custom_secret>
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
    ```
    where:
    `region_name`:: Specifies the region, following the naming convention of the documentation of your object storage server.
    `custom_secret`:: Specifies the backup location `Secret` with custom name.
{% endif %}
{% if installing_oadp_ibm_cloud or installing_oadp_ocs %}
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
    ...
      backupLocations:
        - velero:
            provider: <provider>
            default: true
            credential:
              key: cloud
              name: <custom_secret>
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
    ```
    where:
    `custom_secret`:: Specifies the backup location `Secret` with custom name.
{% endif %}