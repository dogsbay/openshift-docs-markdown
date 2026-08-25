---
title: Creating virtual machines by using the CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating virtual machines by using the CLI {id="virt-creating-vms-from-cli"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-creating-vms-cli" %}

You can create virtual machines (VMs) from the command line by editing or creating a `VirtualMachine` manifest. You can simplify VM configuration by using an instance type in your VM manifest.


:::note

You can also create VMs from instance types by using the {{ product_title }} web console.

:::


{% leveloffset +1 %}{% include "./modules/virt-creating-vm-cli.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-uploading-image-virtctl.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/virt-supported-custom-video-devices.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
{%- if not openshift_dedicated %}
*   [SSH access for virtual machines](/virt/managing_vms/ssh/virt-accessing-vm-ssh#virt-accessing-vm-ssh)
{%- endif %}
*   [Creating virtual machines from instance types](/virt/creating_vm/virt-creating-vms-from-instance-types#virt-creating-vms-from-instance-types)