{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring registry storage for Azure Government {id="registry-configuring-storage-azure-gov-cloud_{{ context }}"}

During installation, your cloud credentials are sufficient to create Azure Blob
Storage, and the Registry Operator automatically configures storage. {._abstract}

**Prerequisites**

*   A cluster on Azure with user-provisioned infrastructure in a government region.
*   To configure registry storage for Azure, provide Registry Operator
cloud credentials.
*   For Azure storage, the secret is expected to contain one key:
    *   `REGISTRY_STORAGE_AZURE_ACCOUNTKEY`

**Procedure**

1.  Create an [Azure storage container](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal).
1.  Fill in the storage configuration in `configs.imageregistry.operator.openshift.io/cluster`:
    ```terminal
    $ oc edit configs.imageregistry.operator.openshift.io/cluster
    ```
    ```yaml title="Example configuration"
    storage:
      azure:
        accountName: <storage-account-name>
        container: <container-name>
        cloudName: AzureUSGovernmentCloud
    ```

    `cloudName` is the name of the Azure cloud environment, which can be used to configure the Azure SDK with the appropriate Azure API endpoints. Defaults to `AzurePublicCloud`. You can also set `cloudName` to `AzureUSGovernmentCloud`, `AzureChinaCloud`, or `AzureGermanCloud` with sufficient credentials.