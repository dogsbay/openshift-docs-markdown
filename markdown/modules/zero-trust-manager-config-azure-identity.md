{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an Azure user managed identity {id="zero-trust-manager-configure-azure-identity_{{ context }}"}

Create a user-assigned managed identity in Azure to manage access control for your resources. You must also obtain the Client ID to associate roles with the service principal. {._abstract}

**Procedure**

1.  Create a new User Managed Identity and then obtain the Client ID of the related Service Principal associated with the User Managed Identity by running the following command:
    ```terminal
    $ az identity create \
      --name ${USER_ASSIGNED_IDENTITY_NAME} \
      --resource-group ${RESOURCE_GROUP}
    ```
    ```terminal
    $ export IDENTITY_CLIENT_ID=$(az identity show --resource-group "${RESOURCE_GROUP}" --name "${USER_ASSIGNED_IDENTITY_NAME}" --query 'clientId' -otsv)
    ```
1.  Retrieve the `CLIENT_ID` of an Azure user-assigned managed identity and save it as an environment variable by running the following command:
    ```terminal
    $ export IDENTITY_CLIENT_ID=$(az identity show --resource-group "${RESOURCE_GROUP}" --name "${USER_ASSIGNED_IDENTITY_NAME}" --query 'clientId' -otsv)
    ```
1.  Associate a role with the Service Principal associated with the User Managed Identity by running the following command:
    ```terminal
    $ az role assignment create \
      --role "Storage Blob Data Contributor" \
      --assignee "${IDENTITY_CLIENT_ID}" \
      --scope ${STORAGE_ACCOUNT_ID}
    ```