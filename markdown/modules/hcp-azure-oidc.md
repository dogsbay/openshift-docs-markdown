{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up an OIDC issuer {id="hcp-azure-oidc_{{ context }}"}

To prepare to deploy {{ hcp }} on {{ azure_short }}, you need to set up an OIDC issuer for hosted clusters. {._abstract}

**Prerequisites**

*   The {{ azure_short }} command-line interface (CLI) is installed and configured.
*   The `jq` command-line JSON processor is installed.
*   The Cloud Credential Operator utility (`ccoctl`) is installed. For more information, see "How to obtain the ccoctl tool for OpenShift 4".
*   The appropriate {{ azure_short }} permissions are set.

**Procedure**

1.  Set your environment variables as shown in the following example:
    ```terminal
    PERSISTENT_RG_NAME="os4-common"
    LOCATION="eastus"
    AZURE_CREDS="/path/to/azure-creds.json"
    SUBSCRIPTION_ID="my-subscription-id"
    ```
1.  Create a persistent resource group by entering the following command:
    ```terminal
    $ az group create --name $PERSISTENT_RG_NAME --location $LOCATION
    ```
1.  Configure an OIDC issuer URL by using the Cloud Credential Operator tool to complete the following steps:
    1.  Set the OIDC issuer variables as shown in the following example:
        ```terminal
        OIDC_STORAGE_ACCOUNT_NAME="yourstorageaccount"
        TENANT_ID="your-tenant-id"
        ```
    1.  Create an RSA key pair and save the private and public key by entering the following command:
        ```terminal
        $ ccoctl azure create-key-pair
        ```
    1.  Set variables for the token issuer key paths as shown in the following example:
        ```terminal
        SA_TOKEN_ISSUER_PRIVATE_KEY_PATH="/path/to/serviceaccount-signer.private"
        SA_TOKEN_ISSUER_PUBLIC_KEY_PATH="/path/to/serviceaccount-signer.public"
        ```
    1.  Create an OIDC issuer by entering the following command:
        ```terminal
        $ ccoctl azure create-oidc-issuer \
            --oidc-resource-group-name ${PERSISTENT_RG_NAME} \
            --tenant-id ${TENANT_ID} \
            --region ${LOCATION} \
            --name ${OIDC_STORAGE_ACCOUNT_NAME} \
            --subscription-id ${SUBSCRIPTION_ID} \
            --public-key-file ${SA_TOKEN_ISSUER_PUBLIC_KEY_PATH}
        ```
    1.  Set the OIDC issuer URL as shown in the following example:
        ```terminal
        OIDC_ISSUER_URL="https://${OIDC_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${OIDC_STORAGE_ACCOUNT_NAME}"
        ```

**Verification**

*   Try to access the OIDC issuer by entering the following command:
    ```terminal
    $ curl -s "${OIDC_ISSUER_URL}/.well-known/openid-configuration" | jq .
    ```