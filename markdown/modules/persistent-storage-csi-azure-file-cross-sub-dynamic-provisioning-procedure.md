{%- set _mod_docs_content_type = "PROCEDURE" %}
# Dynamic provisioning across subscriptions for Azure File {id="persistent-storage-csi-azure-file-cross-sub-dynamic-provisioning-procedure_{{ context }}"}

Enable Azure File dynamic provisioning across Azure subscriptions by granting the cluster’s Azure identity access to a storage account in a different subscription, then creating a storage class that references the target subscription. {._abstract}

**Prerequisites**

*   Installed {{ product_title }} cluster on Azure with the service principal or managed identity as an Azure identity in one subscription (call it Subscription A)
*   Access to another subscription (call it Subscription B) with the storage that is in the same tenant as the cluster
*   Logged in to the Azure CLI

**Procedure**

1.  Record the Azure identity (service principal or managed identity) by running the following applicable commands. The Azure identity is needed in a later step:
    *   If using the _service principal_ as the Azure identity when installing the cluster:
        ```terminal
        $ sp_id=$(oc -n openshift-cluster-csi-drivers get secret azure-file-credentials -o jsonpath='{.data.azure_client_id}' | base64 --decode)
        ```
        ```terminal
        $ az ad sp show --id ${sp_id} --query displayName --output tsv
        ```
    *   If using the _managed identity_ as the Azure identity when installing the cluster:
        ```terminal
        $ mi_id=$(oc -n openshift-cluster-csi-drivers get secret azure-file-credentials -o jsonpath='{.data.azure_client_id}' | base64 --decode)
        ```
        ```terminal
        $ az identity list --query "[?clientId=='${mi_id}'].{Name:name}" --output tsv
        ```
1.  Grant the Azure identity (service principal or managed identity) permission to access the resource group in another Subscription B where you want to provision the Azure File share by doing one of the following:
    *   Run the following Azure CLI command:
        ```terminal
        az role assignment create \
          --assignee <object-id-or-app-id> \
          --role <role-name> \
          --scope /subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.Storage/storageAccounts/<storage-account-name>
        ```
        *   `<object-id-or-app-id>`: Specifies the service principal or managed identity that you obtained from the previous step, such as `sp_id` or `mi_id`.
        *   `<role-name>`: Specifies the role name. Contributor or your own role with required permissions.
        *   `<subscription-id>`: Subscription B ID.
        *   `<resource-group-name>`: Subscription B resource group name.

            Or
    *   Log in to the Azure portal and on the left menu, click **Resource groups**:
        1.  Choose the resource group in Subscription B to which you want to assign a role by clicking **resource group** -> **Access control (IAM)** -> **Role assignments** tab to view current assignments, and then click **Add** > **Add role assignment**.
        1.  On the **Role** tab, choose the contributor role to assign, and then click **Next**. You can also create and choose your own role with required permission.
        1.  On the **Members** tab: 
            1.  Choose an assignee by selecting the type of assignee: user, group, or service principal (or managed identity). 
            1.  Click **Select members**. 
            1.  Search for, and then select the desired service principal or managed identity recorded in the previous step. 
            1.  Click **Select** to confirm.
        1.  On the **Review + assign** tab, review the settings.
        1.  To finish the role assignment, click **Review + assign**.

            :::note

            If you only want to use a specific storage account to provision the Azure File share, you can also obtain the Azure identity (service principal or managed identity) permission to access the storage account by using similar steps.
            
            :::

1.  Create an Azure File storage class by using a similar configuration to the following:
    ```yaml title="Example Azure File storage class YAML file"
    allowVolumeExpansion: true
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: <sc-name>
    mount options:
      - mfsymlinks
      - cache=strict
      - nosharesock
      - actimeo=30
    parameters:
      subscriptionID: <xxxx-xxxx-xxxx-xxxx-xxxx>
      resourceGroup: <resource group name>
      storageAccount: <storage account>
      skuName: <skuName>
    provisioner: file.csi.azure.com
    reclaimPolicy: Delete
    volumeBindingMode: Immediate
    ```
    *   `metadata.name`: Specifies the name of the storage class.
    *   `parameters.subscriptionID`: Specifies the subscription B ID.
    *   `parameters.resourceGroup`: Specifies the Subscription B resource group name.
    *   `parameters.storageAccount`: Specifies the storage account name, if you want to specify your own.
    *   `parameters.skuName`: Specifies the name of the SKU type.
1.  Create a persistent volume claim (PVC) that specifies the Azure File storage class that you created in the previous step by using a similar configuration to the following:
    ```yaml title="Example PVC YAML file"
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: <pvc-name>
    spec:
      storageClassName: <sc-name-cross-sub>
      accessModes:
        - ReadWriteMany
      resources:
        requests:
          storage: 5Gi
    ```
    *   `metadata.name`: Specifies the name of the PVC.
    *   `spec.storageClassName`: Specifies the name of the storage class that you created in the previous step.