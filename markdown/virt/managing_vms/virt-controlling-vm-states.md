---
title: Control virtual machine states
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Control virtual machine states {id="virt-controlling-vm-states"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-controlling-vm-states" %}

You can use `virtctl` to manage virtual machine states and perform other actions from the CLI. For example, you can use `virtctl` to force stop a VM or expose a port.

You can stop, start, restart, reset, pause, and unpause virtual machines from the web console.

{% leveloffset +1 %}{% include "./modules/virt-configure-rbac-console-subresources-api.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-enable-vm-action-confirmation-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-starting-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-stopping-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-restarting-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-resetting-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-pausing-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-unpausing-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-controlling-multiple-vms.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Using the CLI tools](/virt/getting_started/virt-using-the-cli-tools#virt-using-the-cli-tools)