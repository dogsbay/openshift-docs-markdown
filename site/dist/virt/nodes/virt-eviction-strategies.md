---
title: Configure eviction and run strategies
---

# Configure eviction and run strategies {#virt-eviction-strategies}

You can configure eviction strategies for virtual machines (VMs) or for the cluster. The default eviction strategy is `LiveMigrate`, which ensures that a virtual machine instance (VMI) is not interrupted if the node is placed into maintenance or drained. **Cluster eviction strategies**

| Eviction strategy | Description | Interrupts workflow | Blocks upgrades |
| --- | --- | --- | --- |
| `LiveMigrate` ^1^ | Prioritizes workload continuity over upgrades. | No | Yes ^2^ |
| `LiveMigrateIfPossible` | Prioritizes upgrades over workload continuity to ensure that the environment is updated. | Yes | No |
| `None` ^3^ | Shuts down VMs with no eviction strategy. | Yes | No |

1. Default eviction strategy for multi-node clusters.
2. If a VM blocks an upgrade, you must shut down the VM manually.
3. Default eviction strategy for {{ sno }}.

## Additional resources {#_additional_resources}

- [Live migration policies](/openshift-docs-markdown/virt/live_migration/virt-configuring-live-migration#virt-live-migration-policies_virt-configuring-live-migration)
- [About listing all the nodes in a cluster](/openshift-docs-markdown/nodes/nodes/nodes-nodes-viewing#nodes-nodes-viewing-listing_nodes-nodes-viewing)
- [OpenShift Virtualization - Fencing and VM High Availability Guide](https://access.redhat.com/articles/7057929)
- [How to destroy all the data from server for decommission?](https://access.redhat.com/solutions/84663)
- [Listing all virtual machine instances using the CLI](/openshift-docs-markdown/virt/managing_vms/virt-manage-vmis#virt-listing-vmis-cli_virt-manage-vmis)
- [Deleting nodes from a bare-metal cluster](/openshift-docs-markdown/nodes/nodes/nodes-nodes-working#nodes-nodes-working-deleting-bare-metal_nodes-nodes-working)
