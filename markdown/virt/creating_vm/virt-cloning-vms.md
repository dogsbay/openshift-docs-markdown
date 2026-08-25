---
title: Cloning VMs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Cloning VMs {id="virt-cloning-vms"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-cloning-vms" %}

You can clone virtual machines (VMs) or create new VMs from snapshots.


:::important

Cloning a VM with a vTPM device attached to it or creating a new VM from its snapshot is not supported.

:::


{% leveloffset +1 %}{% include "./modules/virt-cloning-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-from-snapshot-web.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Creating VMs by cloning PVCs](/virt/creating_vm/virt-creating-vms-by-cloning-pvcs#virt-creating-vms-by-cloning-pvcs)