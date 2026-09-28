---
title: Create virtual machines by using the web console
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Create virtual machines by using the web console {id="virt-creating-vms-web"}
{%- set context = "virt-creating-vms-web" %}

You can create virtual machines (VMs) by using the {{ product_title }} web console. The web console creation wizard provides workflows for configuring a custom VM, creating a VM from a template, and cloning an existing VM. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-choosing-vm-creation-method-web.md" %}{% endleveloffset %}

**Additional resources**

*   [Virtual machine creation wizard reference](/virt/creating_vm/virt-creating-vms-web#virt-vm-creation-considerations-web_virt-creating-vms-web)

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-custom-configuration-web.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}

**Additional resources**

*   [Organize virtual machines by using the web console](/virt/managing_vms/virt-list-vms#virt-organize-vms-web_virt-list-vms)
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-from-template-web.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}

**Additional resources**

*   [Organize virtual machines by using the web console](/virt/managing_vms/virt-list-vms#virt-organize-vms-web_virt-list-vms)
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-cloning-vm-wizard-web.md" %}{% endleveloffset %}

{% if not openshift_dedicated %}

**Additional resources**

*   [Organize virtual machines by using the web console](/virt/managing_vms/virt-list-vms#virt-organize-vms-web_virt-list-vms)
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-vm-creation-considerations-web.md" %}{% endleveloffset %}