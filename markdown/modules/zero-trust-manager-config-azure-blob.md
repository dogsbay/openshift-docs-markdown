{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Azure blob storage {id="zero-trust-manager-configure-azure-blob_{{ context }}"}

Create a new {{ azure_first }} storage account and container to provide a dedicated location for your content. Configuring this storage ensures that the {{ zero_trust_full }} can successfully store and retrieve blobs for your environment. {._abstract}

**Procedure**

1.  Create a new storage account that is used to store content by running the following command:
    ```terminal
    $ az storage account create \
      --name ${STORAGE_ACCOUNT} \
      --resource-group ${RESOURCE_GROUP} \
      --location ${LOCATION} \
      --encryption-services blob
    ```
1.  Obtain the storage ID for the newly created storage account by running the following command:
    ```terminal
    $ export STORAGE_ACCOUNT_ID=$(az storage account show -n ${STORAGE_ACCOUNT} -g ${RESOURCE_GROUP} --query id --out tsv)
    ```
1.  Create a storage container inside the newly created storage account to provide a location to support the storage of blobs by running the following command:
    ```terminal
    $ az storage container create \
      --account-name ${STORAGE_ACCOUNT} \
      --name ${STORAGE_CONTAINER} \
      --auth-mode login
    ```