---
title: Replacing a failed bare-metal control plane node without BMC credentials
---

# Replacing a failed bare-metal control plane node without BMC credentials {#replacing-control-plane-node}

If a control plane node on your bare-metal cluster has failed and cannot be recovered, but you installed your cluster without providing baseboard management controller (BMC) credentials, you must take extra steps in order to replace the failed node with a new one.

## Additional resources {#additional-resources_replacing-control-plane-node}

- [Replacing an unhealthy bare metal etcd member whose machine is not running or whose node is not ready](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#restore-replace-stopped-baremetal-etcd-member_replacing-unhealthy-etcd-member)
- [Replacing an unhealthy etcd member whose etcd pod is crashlooping](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#restore-replace-crashlooping-etcd-member_replacing-unhealthy-etcd-member)
- [BareMetalHost reference is missing after adding a host to OpenShift Assisted Installer cluster (Red Hat KCS article)](https://access.redhat.com/solutions/6471021)
- [How to retrieve control plane or worker Ignition Configuration from OpenShift Container Platform 4? (Red Hat KCS article)](https://access.redhat.com/solutions/5504291)
