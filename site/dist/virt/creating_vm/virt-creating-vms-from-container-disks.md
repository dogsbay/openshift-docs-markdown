---
title: Creating VMs by using container disks
---

# Creating VMs by using container disks {#virt-creating-vms-from-container-disks}

You can create virtual machines (VMs) by using container disks built from operating system images.

You can enable auto updates for your container disks. For more information, see "Additional resources".

> [!IMPORTANT]
> If the container disks are large, the I/O traffic might increase and cause worker nodes to be unavailable. You can perform the following tasks to reclaim resources:
>
> - Prune `DeploymentConfig` objects.
> - Configure garbage collection.

You create a VM from a container disk by performing the following steps:

1. Build an operating system image into a container disk and upload it to your container registry.
2. If your container registry does not have TLS, configure your environment to disable TLS for your registry.
3. Create a VM with the container disk as the disk source by using the OpenShift Container Platform web console or the command line.

> [!IMPORTANT]
> You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red Hat.

## Additional resources {#additional-resources_virt-creating-vms-from-container-disks}

- [Managing automatic boot source updates](/virt/storage/virt-automatic-bootsource-updates#virt-automatic-bootsource-updates)
- [Installing the QEMU guest agent](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)
- [Pruning objects to reclaim resources](/applications/pruning-objects#pruning-deployments_pruning-objects)
- [Configuring garbage collection for containers and images](/nodes/nodes/nodes-nodes-garbage-collection#nodes-nodes-garbage-collection-configuring_nodes-nodes-configuring)
