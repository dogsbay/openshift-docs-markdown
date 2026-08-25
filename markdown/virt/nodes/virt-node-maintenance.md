---
title: Node maintenance mode
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Node maintenance mode {id="virt-node-maintenance"}
{%- set context = "virt-node-maintenance" %}

Placing a node into maintenance mode marks the node as unschedulable, and removes all the VMs and pods from it.
Nodes can be placed into maintenance mode by using the `oc adm` utility or `NodeMaintenance` custom resources (CRs). {._abstract}


:::important

{% if openshift_dedicated %}
Virtual machines (VMs) must use persistent volume claims (PVCs) with storage that supports live migration to be live migrated.
{% endif %}
{% if not openshift_dedicated %}
Virtual machines (VMs) must have a persistent volume claim (PVC) with a shared `ReadWriteMany` (RWX) access mode to be live migrated.
{% endif %}

:::


{% leveloffset +1 %}{% include "./modules/virt-maintaining-bare-metal-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-node-maintenance-operator.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [About live migration](/virt/live_migration/virt-about-live-migration#virt-about-live-migration)
*   [About node remediation, fencing, and maintenance](https://docs.redhat.com/en/documentation/workload_availability_for_red_hat_openshift/26.2/html-single/remediation_fencing_and_maintenance/index#about-remediation-fencing-maintenance)