---
title: Creating virtual machines from templates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating virtual machines from templates {id="virt-creating-vms-from-templates"}
{%- set context = "virt-creating-vms-from-templates" %}

You can create virtual machines (VMs) from Red Hat templates by using the {{ product_title }} web console. {._abstract}

## About VM templates {id="virt-about-templates"}

You can use VM templates to help you easily create VMs.


Expedite creation with boot sources
:   You can expedite VM creation by using templates that have an available boot source. Templates with a boot source are labeled **Available boot source** if they do not have a custom label.

    Templates without a boot source are labeled **Boot source required**. See "Managing automatic boot source updates" for details.


Customize before starting the VM
:   You can customize the disk source and VM parameters before you start the VM.



:::note

If you copy a VM template with all its labels and annotations, your version of the template is marked as deprecated when a new version of the Scheduling, Scale, and Performance (SSP) Operator is deployed. You can remove this designation. See "Removing a deprecated designation from a customized VM template by using the web console".

:::



{{ sno_caps }}
:   Due to differences in storage behavior, some templates are incompatible with {{ sno }}. To ensure compatibility, do not set the `evictionStrategy` field for templates or VMs that use data volumes or storage profiles.

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-from-template.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-customizing-vm-template-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-template.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-dedicated-resources-vm-template.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Managing automatic boot source updates](/virt/storage/virt-automatic-bootsource-updates#virt-automatic-bootsource-updates)