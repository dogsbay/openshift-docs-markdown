---
title: Enabling encryption on a vSphere cluster
---

# Enabling encryption on a vSphere cluster {#vsphere-post-installation-encryption}

You can encrypt your virtual machines after installing OpenShift Container Platform 4.22 on vSphere by draining and shutting down your nodes one at a time. While each virtual machine is shutdown, you can enable encryption in the vCenter web interface.

## Additional resources {#additional-resources_enabling-encryption-installation}

- [Evacuating pods on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-evacuating_nodes-nodes-working)
- [vSphere persistent disks encryption](/storage/container_storage_interface/persistent-storage-csi-vsphere#vsphere-pv-encryption)
- [Requirements for encrypting virtual machines](/installing/installing_vsphere/upi/upi-vsphere-installation-reqs#installation-vsphere-encrypted-vms_upi-vsphere-installation-reqs)
