---
title: Manage virtual machine instances
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Manage virtual machine instances {id="virt-manage-vmis"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-manage-vmis" %}

Manage standalone virtual machine instances (VMIs) that were created independently outside of the {{ VirtProductName }} environment through the web console by using `oc` or `virtctl` commands from the command-line interface (CLI).

The `virtctl` command provides more virtualization options than the `oc` command. For example, you can use `virtctl` to pause a VM or expose a port.

{% leveloffset +1 %}{% include "./modules/virt-about-vmis.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-listing-vmis-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-listing-vmis-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-searching-vmis-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-editing-vmis-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-deleting-vmis-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-deleting-vmis-web.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Using the CLI tools](/virt/getting_started/virt-using-the-cli-tools#virt-using-the-cli-tools)