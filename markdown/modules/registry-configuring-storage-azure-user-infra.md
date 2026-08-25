{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring registry storage for Azure {id="registry-configuring-storage-azure-user-infra_{{ context }}"}

During installation, your cloud credentials are sufficient to create Azure Blob
Storage, and the Registry Operator automatically configures storage. {._abstract}

**Prerequisites**

*   A cluster on Azure with user-provisioned infrastructure.
*   To configure registry storage for Azure, provide Registry Operator
cloud credentials.
*   For Azure storage the secret is expected to contain one key:
    *   `REGISTRY_STORAGE_AZURE_ACCOUNTKEY`

**Procedure**

1.  Create an [Azure storage container](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal).
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
        azure:
          accountName: <storage_account_name>
          container: <container_name>
    ```