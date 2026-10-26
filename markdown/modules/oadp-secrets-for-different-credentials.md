{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create secrets for different credentials {id="oadp-secrets-for-different-credentials_{{ context }}"}

Create separate `Secret` objects when your backup and snapshot locations require different credentials. This allows you to configure distinct authentication for each storage location while maintaining secure credential management. {._abstract}

**Procedure**

1.  Create a `credentials-velero` file for the snapshot location in the appropriate format for your cloud provider.
1.  Create a `Secret` for the snapshot location with the default name for your provider:
    ```terminal
    $ oc create secret generic <default_secret_name> -n openshift-adp --from-file cloud=credentials-velero
    ```

    Replace `<default_secret_name>` with `cloud-credentials` for AWS, Multicloud Object Gateway (MCG), {{ rh_storage_first }} (ODF), {{ ibm_cloud_title }}, or KubeVirt; `cloud-credentials-azure` for Azure; or `cloud-credentials-gcp` for GCP.
1.  Create a `credentials-velero` file for the backup location in the appropriate format for your object storage.
1.  Create a `Secret` for the backup location with a custom name:
    ```terminal
    $ oc create secret generic <custom_secret> -n openshift-adp --from-file cloud=credentials-velero
    ```
1.  Add the `Secret` with the custom name to the `DataProtectionApplication` CR, as in the following example for your provider:

Azure
:   ```yaml
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
            provider: azure
    ```

    `custom_secret`
    :   Specifies the backup location `Secret` with custom name.


GCP
:   ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
    ...
      backupLocations:
        - velero:
            provider: gcp
            default: true
            credential:
              key: cloud
              name: <custom_secret>
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
      snapshotLocations:
        - velero:
            provider: gcp
            default: true
            config:
              project: <project>
              snapshotLocation: us-west1
    ```

    `custom_secret`
    :   Specifies the backup location `Secret` with custom name.


MCG
:   ```yaml
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
            provider: aws
            default: true
            credential:
              key: cloud
              name:  <custom_secret>
            objectStorage:
              bucket: <bucket_name>
              prefix: <prefix>
    ```

    `region_name`
    :   Specifies the region, following the naming convention of the documentation of your object storage server.

    `custom_secret`
    :   Specifies the backup location `Secret` with custom name.


{{ ibm_cloud_title }} or {{ rh_storage }}
:   ```yaml
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

    `custom_secret`
    :   Specifies the backup location `Secret` with custom name.