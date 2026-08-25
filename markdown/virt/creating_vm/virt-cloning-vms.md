---
title: Cloning VMs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Cloning VMs {id="virt-cloning-vms"}
{%- set context = "virt-cloning-vms" %}

You can clone virtual machines (VMs) or create new VMs from snapshots. {._abstract}


:::important

Cloning a VM with a vTPM device attached to it or creating a new VM from its snapshot is not supported.

:::


{% leveloffset +1 %}{% include "./modules/virt-cloning-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-from-snapshot-web.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Creating VMs by cloning PVCs](/virt/creating_vm/virt-creating-vms-by-cloning-pvcs#virt-creating-vms-by-cloning-pvcs)