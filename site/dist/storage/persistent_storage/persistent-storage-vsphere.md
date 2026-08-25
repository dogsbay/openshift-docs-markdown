---
title: Persistent storage using VMware vSphere volumes
---

# Persistent storage using VMware vSphere volumes {#persistent-storage-using-vsphere}

OpenShift Container Platform allows use of VMware vSphere’s Virtual Machine Disk (VMDK) volumes. You can provision your OpenShift Container Platform cluster with persistent storage using VMware vSphere. Some familiarity with Kubernetes and VMware vSphere is assumed.

VMware vSphere volumes can be provisioned dynamically. OpenShift Container Platform creates the disk in vSphere and attaches this disk to the correct image.

> [!NOTE]
> OpenShift Container Platform provisions new volumes as independent persistent disks that can freely attach and detach the volume on any node in the cluster. Consequently, you cannot back up volumes that use snapshots, or restore volumes from snapshots. For more information, see "Snapshot Limitations".

The Kubernetes persistent volume framework allows administrators to provision a cluster with persistent storage and gives users a way to request those resources without having any knowledge of the underlying infrastructure.

Persistent volumes are not bound to a single project or namespace; they can be shared across the OpenShift Container Platform cluster. Persistent volume claims are specific to a project or namespace and can be requested by users.

> [!IMPORTANT]
> For new installations, OpenShift Container Platform 4.13 and later provides automatic migration for the vSphere in-tree volume plugin to its equivalent CSI driver. Updating to OpenShift Container Platform 4.15 and later also provides automatic migration. For more information about updating and migration, see "CSI automatic migration".
>
> CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes.

You can provision VMware vSphere volumes dynamically or statically. However, dynamically provisioning VMware vSphere volumes is the recommended method.

**Additional resources**

- [VMware vSphere](https://www.vmware.com/au/products/vsphere.html)
- [Installing a cluster on vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)
