{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ azure_full }} {id="migration-configuring-azure_{{ context }}"}

Configure Microsoft Azure storage and service principal credentials for backup storage with {{ oadp_short }}. This provides the necessary authentication and storage infrastructure for data protection operations. {._abstract}

**Prerequisites**

*   You must have the [{{ azure_short }} CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed.

Tools that use {{ azure_short }} services should always have restricted permissions to make sure that {{ azure_short }} resources are safe. Therefore, instead of having applications sign in as a fully privileged user, {{ azure_short }} offers service principals. An {{ azure_short }} service principal is a name that can be used with applications, hosted services, or automated tools.

This identity is used for access to resources.

*   Create a service principal
*   Sign in using a service principal and password
*   Sign in using a service principal and certificate
*   Manage service principal roles
*   Create an {{ azure_short }} resource using a service principal
*   Reset service principal credentials

For more details, see [Create an {{ azure_short }} service principal with Azure CLI](https://learn.microsoft.com/en-us/cli/azure/azure-cli-sp-tutorial-1?tabs=bash).

**Procedure**

1.  Log in to {{ azure_short }}:
    ```terminal
    $ az login
    ```
1.  Set the `AZURE_RESOURCE_GROUP` variable:
    ```terminal
    $ AZURE_RESOURCE_GROUP=Velero_Backups
    ```
1.  Create an {{ azure_short }} resource group:
    ```terminal
    $ az group create -n $AZURE_RESOURCE_GROUP --location CentralUS
    ```

    where:

    `CentralUS`
    :   Specifies your location.

1.  Set the `AZURE_STORAGE_ACCOUNT_ID` variable:
    ```terminal
    $ AZURE_STORAGE_ACCOUNT_ID="velero$(uuidgen | cut -d '-' -f5 | tr '[A-Z]' '[a-z]')"
    ```
1.  Create an {{ azure_short }} storage account:
    ```terminal
    $ az storage account create \
        --name $AZURE_STORAGE_ACCOUNT_ID \
        --resource-group $AZURE_RESOURCE_GROUP \
        --sku Standard_GRS \
        --encryption-services blob \
        --https-only true \
        --kind BlobStorage \
        --access-tier Hot
    ```
1.  Set the `BLOB_CONTAINER` variable:
    ```terminal
    $ BLOB_CONTAINER=velero
    ```
1.  Create an Azure Blob storage container:
    ```terminal
    $ az storage container create \
      -n $BLOB_CONTAINER \
      --public-access off \
      --account-name $AZURE_STORAGE_ACCOUNT_ID
    ```
1.  Create a service principal and credentials for `velero`:
    ```terminal
    $ AZURE_SUBSCRIPTION_ID=`az account list --query '[?isDefault].id' -o tsv`
      AZURE_TENANT_ID=`az account list --query '[?isDefault].tenantId' -o tsv`
    ```
1.  Create a service principal with the `Contributor` role, assigning a specific `--role` and `--scopes`:
    ```terminal
    $ AZURE_CLIENT_SECRET=`az ad sp create-for-rbac --name "velero" \
                                                    --role "Contributor" \
                                                    --query 'password' -o tsv \
                                                    --scopes /subscriptions/$AZURE_SUBSCRIPTION_ID/resourceGroups/$AZURE_RESOURCE_GROUP`
    ```

    The CLI generates a password for you. Ensure you capture the password.
1.  After creating the service principal, obtain the client id.
    ```terminal
    $ AZURE_CLIENT_ID=`az ad app credential list --id <your_app_id>`
    ```

    :::note

    For this to be successful, you must know your {{ azure_short }} application ID.
    
    :::

1.  Save the service principal credentials in the `credentials-velero` file:
    ```terminal
    $ cat << EOF > ./credentials-velero
    AZURE_SUBSCRIPTION_ID=${AZURE_SUBSCRIPTION_ID}
    AZURE_TENANT_ID=${AZURE_TENANT_ID}
    AZURE_CLIENT_ID=${AZURE_CLIENT_ID}
    AZURE_CLIENT_SECRET=${AZURE_CLIENT_SECRET}
    AZURE_RESOURCE_GROUP=${AZURE_RESOURCE_GROUP}
    AZURE_CLOUD_NAME=AzurePublicCloud
    EOF
    ```

    You use the `credentials-velero` file to add {{ azure_short }} as a replication repository.