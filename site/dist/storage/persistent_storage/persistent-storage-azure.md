---
title: Persistent storage using Azure
---

# Persistent storage using Azure {#persistent-storage-using-azure}

OpenShift Container Platform supports Microsoft Azure Disk volumes. You can provision your OpenShift Container Platform cluster with persistent storage by using Azure. Some familiarity with Kubernetes and Azure is assumed.

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure. Azure Disk volumes can be provisioned dynamically. Persistent volumes are not bound to a single project or namespace; they can be shared across the OpenShift Container Platform cluster. Persistent volume claims are specific to a project or namespace and can be requested by users.

> [!IMPORTANT]
> OpenShift Container Platform 4.11 and later provides automatic migration for the Azure Disk in-tree volume plugin to its equivalent CSI driver.
>
> CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes. For more information about migration, see CSI automatic migration.

> [!IMPORTANT]
> High availability of storage in the infrastructure is left to the underlying storage provider.

**Additional resources**

- [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
- [Microsoft Azure Disk](https://azure.microsoft.com/en-us/services/storage/disks)

**Additional resources**

- [Azure Disk Storage Class](https://kubernetes.io/docs/concepts/storage/storage-classes/#new-azure-disk-storage-class-starting-from-v1-7-2)

**Additional resources**

- [Microsoft Azure ultra disks documentation](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#ultra-disks)
- [Machine sets that deploy machines on ultra disks using CSI PVCs](/storage/container_storage_interface/persistent-storage-csi-azure#machineset-azure-ultra-disk_persistent-storage-csi-azure)
- [Machine sets that deploy machines on ultra disks as data disks](/machine_management/creating_machinesets/creating-machineset-azure#machineset-azure-ultra-disk_creating-machineset-azure)
