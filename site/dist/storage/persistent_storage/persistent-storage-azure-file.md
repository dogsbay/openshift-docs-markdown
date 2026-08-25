---
title: Persistent storage using Azure File
---

# Persistent storage using Azure File {#persistent-storage-using-azure-file}

OpenShift Container Platform supports Microsoft Azure File volumes. You can provision your OpenShift Container Platform cluster with persistent storage using Azure. Some familiarity with Kubernetes and Azure is assumed.

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure. You can provision Azure File volumes dynamically.

Persistent volumes are not bound to a single project or namespace, and you can share them across the OpenShift Container Platform cluster. Persistent volume claims are specific to a project or namespace, and can be requested by users for use in applications.

> [!IMPORTANT]
> High availability of storage in the infrastructure is left to the underlying storage provider.

> [!IMPORTANT]
> Azure File volumes use Server Message Block.

> [!IMPORTANT]
> OpenShift Container Platform 4.13 and later provides automatic migration for the Azure File in-tree volume plugin to its equivalent CSI driver.
>
> CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes. For more information about migration, see "CSI automatic migration".

**Additional resources**

- [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
- [Azure Files](https://azure.microsoft.com/en-us/services/storage/files/)
