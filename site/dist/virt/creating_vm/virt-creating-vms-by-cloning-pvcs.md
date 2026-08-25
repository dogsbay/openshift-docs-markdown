---
title: Creating VMs by cloning PVCs
---

# Creating VMs by cloning PVCs {#virt-creating-vms-by-cloning-pvcs}

You can create virtual machines (VMs) by cloning existing persistent volume claims (PVCs) with custom images.

You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red Hat.

You clone a PVC by creating a data volume that references a source PVC.

## Additional resources {#additional-resources_virt-creating-vms-by-cloning-pvcs}

- [Setting a default cloning strategy using a storage profile](/virt/storage/virt-configuring-storage-profile#virt-customizing-storage-profile-default-cloning-strategy_virt-configuring-storage-profile)
- [Installing the QEMU guest agent](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)
- [Volume cloning](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/latest/html/managing_and_allocating_storage_resources/volume-cloning_rhodf#volume-cloning_rhodf)
- [CSI volume snapshots](/storage/container_storage_interface/persistent-storage-csi-snapshots#persistent-storage-csi-snapshots)
