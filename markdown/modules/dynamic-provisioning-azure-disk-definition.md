{%- set _mod_docs_content_type = "REFERENCE" %}
# Azure Disk StorageClass object definition {id="azure-disk-definition_{{ context }}"}

This Azure Disk storage class example demonstrates how to configure managed disks with delayed volume binding for optimal zone placement, volume expansion, and performance tiers. Key parameters ensure compatibility with OpenShift nodes, which require managed disks rather than shared or dedicated storage accounts. {._abstract}

```yaml title="Example Azure Disk storage class YAML file"
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: <storage-class-name>
provisioner: kubernetes.io/azure-disk
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: true
parameters:
  kind: Managed
  storageaccounttype: Premium_LRS
reclaimPolicy: Delete
```
*   `metadata.name`: Name of the storage class. The persistent volume claim uses this storage class for provisioning the associated persistent volumes.
*   `volumeBindingMode`: Using `WaitForFirstConsumer` is strongly recommended. This provisions the volume while allowing enough storage to schedule the pod on a free worker node from an available zone.
*   `parameters.kind`: Possible values are `Shared` (default), `Managed`, and `Dedicated`.

    :::important

    Red&#160;Hat only supports the use of `Managed`.

    With `Shared` and `Dedicated`, Azure creates unmanaged disks, while {{ product_title }} creates a managed disk for machine operating system (root) disks. But because Azure Disk does not allow the use of both managed and unmanaged disks on a node, unmanaged disks created with `Shared` or `Dedicated` cannot be attached to {{ product_title }} nodes.
    
    :::

*   `parameters.storageaccounttype`: Azure storage account SKU tier. Default is empty. Note that Premium VMs can attach both `Standard_LRS` and `Premium_LRS` disks. Standard VMs can only attach `Standard_LRS` disks. Managed VMs can only attach managed disks. Unmanaged VMs can only attach unmanaged disks.
    *   `Shared`: Azure creates all unmanaged disks in a few shared storage accounts in the same resource group as the cluster.
    *   `Managed`: Azure creates new managed disks.
    *   `Dedicated`, and a `storageAccount` is not specified: Azure creates a new dedicated storage account for the new unmanaged disk in the same resource group as the cluster.
    *   `Dedicated`, and a `storageAccount` is specified: Azure uses the specified storage account for the new unmanaged disk in the same resource group as the cluster. For this to work, the specified storage account must be in the same region, and Azure Cloud Provider must have write access to the storage account.