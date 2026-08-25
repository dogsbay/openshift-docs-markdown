---
title: Working with NUMA topology for virtual machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Working with NUMA topology for virtual machines {id="virt-NUMA-topology"}
{%- set context = "virt-NUMA-topology" %}

{% include "./snippets/about-numa.md" %}

{% leveloffset +1 %}{% include "./modules/virt-using-NUMA.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-NUMA-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-numa-check-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-NUMA-topology-disabling-hotplugs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-disable-CPU-VM-hotplug-instancetype.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-disable-CPU-VM-hotplug.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-disable-kubervirt-hotplug-ratio.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-NUMA-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-NUMA-live-migration.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Topology Manager policies](/scalability_and_performance/using-cpu-manager#using-cpu-manager_topology-manager-policies)
*   [Creating virtual machines from instance types](/virt/creating_vm/virt-creating-vms-from-instance-types#virt-creating-vms-from-instance-types)