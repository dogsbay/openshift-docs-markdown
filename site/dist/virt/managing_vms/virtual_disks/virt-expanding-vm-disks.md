---
title: Expand virtual machine disks
---

# Expand virtual machine disks {#virt-expanding-vm-disks}

Expand the  persistent volume claim (PVC) of your virtual machine disk to accomodate growing data requirements. If your storage provider does not support volume expansion, you can expand the available virtual storage of a VM by adding blank data volumes.

You cannot reduce the size of a VM disk.

## Additional resources {#additional-resources_virt-expanding-vm-disks}

- [Extending a basic volume in Windows](https://docs.microsoft.com/en-us/windows-server/storage/disk-management/extend-a-basic-volume)
- [Extending an existing file system partition without destroying data in Red Hat Enterprise Linux](https://access.redhat.com/solutions/29095)
- [Extending a logical volume and its file system online in Red Hat Enterprise Linux](https://access.redhat.com/solutions/24770)
- [Configuring preallocation mode for data volumes](/virt/storage/virt-using-preallocation-for-datavolumes#virt-using-preallocation-for-datavolumes)
- [Managing data volume annotations](/virt/storage/virt-managing-data-volume-annotations#virt-managing-data-volume-annotations)
