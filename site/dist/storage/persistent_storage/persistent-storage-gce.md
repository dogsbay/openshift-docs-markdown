---
title: Persistent storage using GCE Persistent Disk
---

# Persistent storage using GCE Persistent Disk {#persistent-storage-using-gce}

OpenShift Container Platform supports GCE Persistent Disk volumes (gcePD). You can provision your OpenShift Container Platform cluster with persistent storage using GCE. Some familiarity with Kubernetes and GCE is assumed.

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure.

GCE Persistent Disk volumes can be provisioned dynamically.

Persistent volumes are not bound to a single project or namespace; they can be shared across the OpenShift Container Platform cluster. Persistent volume claims are specific to a project or namespace and can be requested by users.

> [!IMPORTANT]
> OpenShift Container Platform 4.12 and later provides automatic migration for the GCE Persist Disk in-tree volume plugin to its equivalent CSI driver.
>
> CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes.
>
> For more information about migration, see CSI automatic migration.

> [!IMPORTANT]
> High availability of storage in the infrastructure is left to the underlying storage provider.

**Additional resources**

- [GCE Persistent Disk](https://cloud.google.com/compute/docs/disks/)
- [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
