{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using Entra ID with {{ azure_first }} {id="zero-trust-manager-configure-azure_{{ context }}"}

Configure your {{ azure_first }} environment to enable Entra ID integration with {{ azure_short }}. By defining variables and creating a resource group, you establish the infrastructure needed to securely manage workload identities. {._abstract}

**Prerequisites**

*   You have configured the SPIRE OIDC Discovery Provider Route to serve the TLS certificates from a publicly trusted CA.

**Procedure**

1.  Log in to Azure by running the following command:
    ```terminal
    $ az login
    ```
1.  Configure variables for your Azure subscription and tenant by running the following commands:
    ```terminal
    $ export SUBSCRIPTION_ID=$(az account list --query "[?isDefault].id" -o tsv)
    ```
    ```terminal
    $ export TENANT_ID=$(az account list --query "[?isDefault].tenantId" -o tsv)
    ```
    ```terminal
    $ export LOCATION=centralus
    ```

    where:

    `SUBSCRIPTION_ID`
    :   Specifies your unique subscription identifier.


`TENANT_ID`
:   Specifies the ID for your Azure Active Directory instance.


`LOCATION`
:   The Azure region where your resource is created.

1.  Define resource variable names by running the following commands:
    ```terminal
    $ export NAME=ztwim
    ```
    ```terminal
    $ export RESOURCE_GROUP="${NAME}-rg"
    ```
    ```terminal
    $ export STORAGE_ACCOUNT="${NAME}storage"
    ```
    ```terminal
    $ export STORAGE_CONTAINER="${NAME}storagecontainer"
    ```
    ```terminal
    $ export USER_ASSIGNED_IDENTITY_NAME="${NAME}-identity"
    ```

    where:

    `NAME`
    :   Specifies A base name for all resources.


`RESOURCE_GROUP`
:   Specifies the name of the resource group.


`STORAGE_ACCOUNT`
:   Specifies the name for the storage account.


`STORAGE_CONTAINER`
:   Specifies the name for the storage container.


`USER_ASSIGNED_IDENTITY_NAME`
:   Specifies the name for a managed identity.

1.  Create the resource group by running the following command:
    ```terminal
    $ az group create \
      --name "${RESOURCE_GROUP}" \
      --location "${LOCATION}"
    ```