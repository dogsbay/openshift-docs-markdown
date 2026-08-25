{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling customer-managed encryption keys for a machine set {id="machineset-enabling-customer-managed-encryption-azure_{{ context }}"}

To enhance data security, enable customer-managed encryption on {{ azure_full }} by adding the disk encryption set ID to your machine set. {._abstract}

You can supply an encryption key to {{ azure_short }} to encrypt data on managed disks at rest. You can enable server-side encryption with customer-managed keys by using the Machine API.

An {{ azure_short }} Key Vault, a disk encryption set, and an encryption key are required to use a customer-managed key. The disk encryption set must be in a resource group where the Cloud Credential Operator (CCO) has granted permissions. If not, an additional reader role is required to be granted on the disk encryption set.

**Prerequisites**

*   [You created an {{ azure_short }} Key Vault instance ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/aks/azure-disk-customer-managed-keys#create-an-azure-key-vault-instance).
*   [You created an instance of a disk encryption set ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/aks/azure-disk-customer-managed-keys#create-an-instance-of-a-diskencryptionset).
*   [You granted the disk encryption set access to key vault ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/aks/azure-disk-customer-managed-keys#grant-the-diskencryptionset-access-to-key-vault).

**Procedure**

*   Configure the disk encryption set under the `providerSpec` field in your machine set YAML file. For example:
    ```yaml
    providerSpec:
      value:
        osDisk:
          diskSizeGB: 128
          managedDisk:
            diskEncryptionSet:
              id: /subscriptions/<subscription_id>/resourceGroups/<resource_group_name>/providers/Microsoft.Compute/diskEncryptionSets/<disk_encryption_set_name>
            storageAccountType: Premium_LRS
    ```

**Additional resources**
{._additional-resources}

*   [Customer-managed keys ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/virtual-machines/disk-encryption#customer-managed-keys)