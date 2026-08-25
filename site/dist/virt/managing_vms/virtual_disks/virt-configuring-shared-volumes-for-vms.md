---
title: Configure shared volumes for virtual machines
---

# Configure shared volumes for virtual machines {#virt-configuring-shared-volumes-for-vms}

Enable high-availability scenarios like Windows Failover Clustering by configuring shared disks to allow multiple virtual machines to access the same storage volume. A shared disk’s volume must be block mode.

You configure disk sharing by exposing the storage as either of these types:

- An ordinary VM disk
- A logical unit number (LUN) disk with an SCSI connection and raw device mapping, as required for Windows Failover Clustering for shared volumes

In addition to configuring disk sharing, you can also set an error policy for each ordinary VM disk or LUN disk. The error policy controls how the hypervisor behaves when an input/output error occurs on a disk Read or Write.

## Additional resources {#additional-resources_virt-configuring-shared-volumes-for-vms}

- [Persistent reservation helper protocol](https://www.qemu.org/docs/master/interop/pr-helper.html)
- [Failover Clustering in Windows Server and Azure Stack HCI](https://learn.microsoft.com/en-us/windows-server/failover-clustering/failover-clustering-overview)
