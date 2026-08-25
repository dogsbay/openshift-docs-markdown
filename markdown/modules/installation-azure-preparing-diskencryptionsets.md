{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing an {{ azure_short }} Disk Encryption Set {id="preparing-disk-encryption-sets_{{ context }}"}

To use an existing Disk Encryption Set with a user-managed key in {{ product_title }} on {{ azure_short }}, you must create a Disk Encryption Set in {{ azure_short }} and provide the key to the installation program. {._abstract}

**Procedure**

1.  Set the environment variables for the {{ azure_short }} resource group by running the following command:
    ```terminal
    $ export RESOURCEGROUP="<resource_group>" \
        LOCATION="<location>"
    ```

    where:

    `<resource_group>`
    :   Specifies the name of the {{ azure_short }} resource group where you create the Disk Encryption Set and encryption key. To prevent losing access to your keys when you delete the cluster, create the Disk Encryption Set in a separate resource group from the one where you install the cluster.

    `<location>`
    :   Specifies the {{ azure_short }} location where you create the resource group.

1.  Set the environment variables for the {{ azure_short }} Key Vault and Disk Encryption Set by running the following command:
    ```terminal
    $ export KEYVAULT_NAME="<keyvault_name>" \
        KEYVAULT_KEY_NAME="<keyvault_key_name>" \
        DISK_ENCRYPTION_SET_NAME="<disk_encryption_set_name>"
    ```

    where:

    `<keyvault_name>`
    :   Specifies the name of the {{ azure_short }} Key Vault that you create.

    `<keyvault_key_name>`
    :   Specifies the name of the encryption key that you create.

    `<disk_encryption_set_name>`
    :   Specifies the name of the disk encryption set that you create.

1.  Set the environment variable for the ID of your {{ azure_short }} service principal by running the following command:
    ```terminal
    $ export CLUSTER_SP_ID="<service_principal_id>"
    ```

    `<service_principal_id>`
    :   Specifies the ID of the service principal that you use for installation.

1.  Enable host-level encryption in {{ azure_short }} by running the following command:
    ```terminal
    $ az feature register --namespace "Microsoft.Compute" --name "EncryptionAtHost"
    ```
    ```terminal
    $ az feature show --namespace Microsoft.Compute --name EncryptionAtHost
    ```
    ```terminal
    $ az provider register -n Microsoft.Compute
    ```
1.  Create an {{ azure_short }} resource group to hold the disk encryption set and associated resources by running the following command:
    ```terminal
    $ az group create --name $RESOURCEGROUP --location $LOCATION
    ```
1.  Create an {{ azure_short }} Key Vault by running the following command:
    ```terminal
    $ az keyvault create -n $KEYVAULT_NAME -g $RESOURCEGROUP -l $LOCATION \
        --enable-purge-protection true
    ```
1.  Create an encryption key in the key vault by running the following command:
    ```terminal
    $ az keyvault key create --vault-name $KEYVAULT_NAME -n $KEYVAULT_KEY_NAME \
        --protection software
    ```
1.  Capture the ID of the key vault by running the following command:
    ```terminal
    $ KEYVAULT_ID=$(az keyvault show --name $KEYVAULT_NAME --query "[id]" -o tsv)
    ```
1.  Capture the key URL in the key vault by running the following command:
    ```terminal
    $ KEYVAULT_KEY_URL=$(az keyvault key show --vault-name $KEYVAULT_NAME --name \
        $KEYVAULT_KEY_NAME --query "[key.kid]" -o tsv)
    ```
1.  Create a disk encryption set by running the following command:
    ```terminal
    $ az disk-encryption-set create -n $DISK_ENCRYPTION_SET_NAME -l $LOCATION -g \
        $RESOURCEGROUP --source-vault $KEYVAULT_ID --key-url $KEYVAULT_KEY_URL
    ```
1.  Grant the `DiskEncryptionSet` resource access to the key vault by running the following commands:
    ```terminal
    $ DES_IDENTITY=$(az disk-encryption-set show -n $DISK_ENCRYPTION_SET_NAME -g \
        $RESOURCEGROUP --query "[identity.principalId]" -o tsv)
    ```
    ```terminal
    $ az keyvault set-policy -n $KEYVAULT_NAME -g $RESOURCEGROUP --object-id \
        $DES_IDENTITY --key-permissions wrapkey unwrapkey get
    ```
1.  Grant the {{ azure_short }} service principal permission to read the Disk Encryption Set by running the following commands:
    ```terminal
    $ DES_RESOURCE_ID=$(az disk-encryption-set show -n $DISK_ENCRYPTION_SET_NAME -g \
        $RESOURCEGROUP --query "[id]" -o tsv)
    ```
    ```terminal
    $ az role assignment create --assignee $CLUSTER_SP_ID --role "<reader_role>" \
        --scope $DES_RESOURCE_ID -o jsonc
    ```

    `<reader_role>`
    :   Specifies an {{ azure_short }} role with read permissions to the disk encryption set. You can use the `Owner` role or a custom role with the necessary permissions.