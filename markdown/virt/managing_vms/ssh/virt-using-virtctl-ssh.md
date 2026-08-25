---
title: Configure SSH by using the virtctl CLI tool
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configure SSH by using the virtctl CLI tool {id="virt-using-virtctl-ssh"}
{%- set context = "virt-using-virtctl-ssh" %}

You can add a public SSH key to a virtual machine (VM) and connect to the VM by running the `virtctl ssh` command, or add the `virtctl port-foward` command to your `.ssh/config` file and connect to the VM by using OpenSSH.


:::important

The `virtctl ssh` command method is not recommended for high traffic loads because it places a burden on the API server.

:::


You can add public SSH keys to {{ op_system_base_full }} 9 VMs at runtime or at first boot to VMs with guest operating systems that can be configured by using a cloud-init data source.


:::tip

You can copy the `virtctl ssh` command in the web console by selecting **Copy SSH command** from the options {{ kebab }} menu beside a VM on the **VirtualMachines** page.

Alternatively, right-click the VM in the tree view and select **Copy SSH command** from the menu to copy the `virtctl ssh` command.

:::


{% leveloffset +1 %}{% include "./modules/virt-about-static-and-dynamic-ssh-keys.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-static-key-management-vm.md" %}{% endleveloffset %}

{%- set context = "static-key" -%}
{%- set static_key = true %}
{% leveloffset +2 %}{% include "./modules/virt-adding-key-creating-vm-template.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-vm-instancetype.md" %}{% endleveloffset %}
{%- set static_key = false %}

{% leveloffset +2 %}{% include "./modules/virt-adding-public-key-vm-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-adding-dynamic-key-vm.md" %}{% endleveloffset %}

{%- set context = "dynamic-key" -%}
{%- set dynamic_key = true %}
{% leveloffset +2 %}{% include "./modules/virt-adding-key-creating-vm-template.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-vm-instancetype.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-editing-vm-dynamic-key-injection.md" %}{% endleveloffset %}
{%- set dynamic_key = false %}

{% leveloffset +2 %}{% include "./modules/virt-enabling-dynamic-key-injection-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-using-virtctl-ssh-command.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-using-virtctl-port-forward-command.md" %}{% endleveloffset %}