---
title: Node maintenance mode
---

# Node maintenance mode {#virt-node-maintenance}

Placing a node into maintenance mode marks the node as unschedulable, and removes all the VMs and pods from it. Nodes can be placed into maintenance mode by using the `oc adm` utility or `NodeMaintenance` custom resources (CRs).

> [!IMPORTANT]
> Virtual machines (VMs) must have a persistent volume claim (PVC) with a shared `ReadWriteMany` (RWX) access mode to be live migrated.

## Additional resources {#additional-resources_virt-node-maintenance}

- [About live migration](/virt/live_migration/virt-about-live-migration#virt-about-live-migration)
- [About node remediation, fencing, and maintenance](https://docs.redhat.com/en/documentation/workload_availability_for_red_hat_openshift/26.2/html-single/remediation_fencing_and_maintenance/index#about-remediation-fencing-maintenance)
