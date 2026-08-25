---
title: Configure eviction and run strategies
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configure eviction and run strategies {id="virt-eviction-strategies"}
{%- set context = "virt-eviction-strategies" %}

You can configure eviction strategies for virtual machines (VMs) or for the cluster. The default eviction strategy is `LiveMigrate`, which ensures that a virtual machine instance (VMI) is not interrupted if the node is placed into maintenance or drained.

{%- if not (openshift_rosa or openshift_dedicated) %}
**Cluster eviction strategies**

| Eviction strategy | Description | Interrupts workflow | Blocks upgrades |
| --- | --- | --- | --- |
| `LiveMigrate` ^1^ | Prioritizes workload continuity over upgrades. | No | Yes ^2^ |
| `LiveMigrateIfPossible` | Prioritizes upgrades over workload continuity to ensure that the environment is updated. | Yes | No |
| `None` ^3^ | Shuts down VMs with no eviction strategy. | Yes | No |
1.  Default eviction strategy for multi-node clusters.
1.  If a VM blocks an upgrade, you must shut down the VM manually.
1.  Default eviction strategy for {{ sno }}.
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-vm-eviction-strategy-cli.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/virt-configuring-cluster-eviction-strategy-cli.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-runstrategies-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-runstrategy-vm.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/virt-delete-failed-node-vm-failover.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="_additional_resources"}
*   [Live migration policies](/virt/live_migration/virt-configuring-live-migration#virt-live-migration-policies_virt-configuring-live-migration)
*   [About listing all the nodes in a cluster](/nodes/nodes/nodes-nodes-viewing#nodes-nodes-viewing-listing_nodes-nodes-viewing)
*   [OpenShift Virtualization - Fencing and VM High Availability Guide](https://access.redhat.com/articles/7057929)
*   [How to destroy all the data from server for decommission?](https://access.redhat.com/solutions/84663)
*   [Listing all virtual machine instances using the CLI](/virt/managing_vms/virt-manage-vmis#virt-listing-vmis-cli_virt-manage-vmis)
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Deleting nodes from a bare-metal cluster](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-deleting-bare-metal_nodes-nodes-working)
{% endif %}