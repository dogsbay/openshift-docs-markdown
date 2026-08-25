{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using a service principal or a storage account access key {id="oadp-auth-azure-secret-based_{{ context }}"}

You create a default `Secret` object and reference it in the backup storage location custom resource. The credentials file for the `Secret` object can contain information about the Azure service principal or a storage account access key. {._abstract}

The default name of the `Secret` is `{{ credentials }}`.


:::note

The `DataProtectionApplication` custom resource (CR) requires a default `Secret`. Otherwise, the installation fails. If the name of the backup location `Secret` is not specified, the default name is used.

If you do not want to use the backup location credentials during the installation, you can create a `Secret` with the default name by using an empty `credentials-velero` file.

:::


**Prerequisites**

*   You have access to the OpenShift cluster as a user with `cluster-admin` privileges.
*   You have an Azure subscription with appropriate permissions.
*   You have installed {{ oadp_short }}.
*   You have configured an object storage for storing the backups.

**Procedure**

1.  Create a `credentials-velero` file for the backup storage location in the appropriate format for your cloud provider.

    You can use one of the following two methods to authenticate {{ oadp_short }} with Azure.
    *   Use the service principal with secret-based authentication. See the following example:
        ```terminal
        AZURE_SUBSCRIPTION_ID=<azure_subscription_id>
        AZURE_TENANT_ID=<azure_tenant_id>
        AZURE_CLIENT_ID=<azure_client_id>
        AZURE_CLIENT_SECRET=<azure_client_secret>
        AZURE_RESOURCE_GROUP=<azure_resource_group>
        AZURE_CLOUD_NAME=<azure_cloud_name>
        ```
    *   Use a storage account access key. See the following example:
        ```terminal
        AZURE_STORAGE_ACCOUNT_ACCESS_KEY=<azure_storage_account_access_key>
        AZURE_SUBSCRIPTION_ID=<azure_subscription_id> 
        AZURE_RESOURCE_GROUP=<azure_resource_group>
        AZURE_CLOUD_NAME=<azure_cloud_name> 
        ```
1.  Create a `Secret` custom resource (CR) with the default name:
    ```terminal
    $ oc create secret generic {{ credentials }} -n openshift-adp --from-file cloud=credentials-velero
    ```
1.  Reference the `Secret` in the `spec.backupLocations.velero.credential` block of the `DataProtectionApplication` CR when you install the Data Protection Application as shown in the following example:
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_sample>
      namespace: openshift-adp
    spec:
    # ...
      backupLocations:
        - velero:
            config:
              resourceGroup: <azure_resource_group>
              storageAccount: <azure_storage_account_id>
              storageAccountURI: <storage_account_blob_endpoint>
              subscriptionId: <azure_subscription_id>
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

    `<storage_account_blob_endpoint>`
    :   Optional. Specifies the Azure storage account blob endpoint, for example, `https://<storage_account_name>.blob.core.windows.net`. When you specify `storageAccountURI`, the `resourceGroup` and `storageAccount` fields are optional.

    `<custom_secret>`
    :   Specifies the backup location `Secret` with custom name.

    :::note

    If you experience Azure storage account throttling issues with HTTP 429 `TooManyRequests` errors in the Velero logs, add the `storageAccountURI` field to the backup storage location configuration. By providing the storage account blob endpoint directly, Velero bypasses the need to fetch the storage account properties. This also eliminates the need for Reader permission on the storage account.
    
    :::