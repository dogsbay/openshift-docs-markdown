{%- set _mod_docs_content_type = "PROCEDURE" %}
# Azure File object definition {id="azure-file-definition_{{ context }}"}

To enable Azure File storage classes to dynamically provision file shares, grant the persistent volume binder permissions to create and manage secrets containing Azure storage credentials. This allows the provisioner to securely store and access the Azure storage account name and key required for file share creation. {._abstract}

**Procedure**

1.  Define a `ClusterRole` object that allows access to create and view secrets as in the following example file:
    ```yaml title="Cluster role example YAML file"
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
      name: <persistent_volume_binder_role>
    rules:
    - apiGroups: ['']
      resources: ['secrets']
      verbs:     ['get','create']
    ```
    *   `Metadata.name`: The name of the cluster role to view and create secrets.
1.  Add the cluster role to the service account by running the following command:
    ```terminal
    $ oc adm policy add-cluster-role-to-user <persistent-volume-binder-role> system:serviceaccount:kube-system:persistent-volume-binder
    ```

    Where `<persistent-volume-binder-role>` is the name of the cluster role you provided in the preceding step.
1.  Create the Azure File `StorageClass` object as in the following example file:
    ```yaml title="Example Azure File storage class YAML file"
    kind: StorageClass
    apiVersion: storage.k8s.io/v1
    metadata:
      name: <azure-file>
    provisioner: kubernetes.io/azure-file
    parameters:
      location: eastus
      skuName: Standard_LRS
      storageAccount: <storage-account>
    reclaimPolicy: Delete
    volumeBindingMode: Immediate
    ```
    *   `metadata.name`: Name of the storage class. The persistent volume claim uses this storage class for provisioning the associated persistent volumes.
    *   `parameters.location`: Location of the Azure storage account, such as `eastus`. The default is empty, meaning that a new Azure storage account is created in the {{ product_title }} cluster’s location.
    *   `parameters.skuName`: SKU tier of the Azure storage account, such as `Standard_LRS`. The default is empty, meaning that a new Azure storage account is created with the `Standard_LRS` SKU.
    *   `parameters.storageAccount`: Name of the Azure storage account. If a storage account is provided, then `skuName` and `location` are ignored. If no storage account is provided, the storage class searches for storage accounts associated with the resource group for accounts that match the defined `skuName` and `location`.