---
title: Delete a virtual machine
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Delete a virtual machine {id="virt-delete-vms"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-delete-vms" %}

You can remove virtual machines (VMs) from your cluster to free up resources using either the web console or CLI. Deleting a VM removes the virtual machine definition and optionally its associated storage resources.

{% leveloffset +1 %}{% include "./modules/virt-delete-vm-web.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-deleting-vms.md" %}{% endleveloffset %}