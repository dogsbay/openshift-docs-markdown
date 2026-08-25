---
title: Connect to a virtual machine console
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connect to a virtual machine console {id="virt-accessing-vm-consoles"}
{%- set context = "virt-accessing-vm-consoles" -%}
{%- set virt_accessing_vm_consoles = true %}

By using VNC, serial, or desktop viewer consoles, you can access the console of your virtual machine for troubleshooting when the VM does not have network connectivity. {._abstract}


:::note

Connecting to a guest VM through the VNC or serial console does not provide a full set of access features and cannot replace the Virtual Desktop Infrastructure (VDI) access. However, these consoles are useful for troubleshooting, as they allow access even if the guest VM has no network.

:::


{% leveloffset +1 %}{% include "./modules/virt-vnc-console-considerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-connecting-vnc-console-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-connecting-vnc-console-virtctl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-grant-token-generation-permission-VNC.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-generate-temporary-token-VNC.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-serial-console-considerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-connecting-serial-console-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-connecting-serial-console-virtctl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-connecting-desktop-viewer-web.md" %}{% endleveloffset %}

## Additional resources {id="_additional-resources_{{ context }}"}

*   [About the Scheduling, Scale, and Performance (SSP) Operator](/virt/about_virt/virt-architecture#virt-about-ssp-operator_virt-architecture)
*   [Connect to the serial console by using the web console](/virt/managing_vms/virt-accessing-vm-consoles#virt-connecting-serial-console-virtctl_virt-accessing-vm-consoles)
*   [Connect to the VNC console by using virtctl](/virt/managing_vms/virt-accessing-vm-consoles#virt-connecting-vnc-console-virtctl_virt-accessing-vm-consoles)
*   [Installing virtctl](/virt/getting_started/virt-using-the-cli-tools#virt-installing-virtctl-binary_virt-using-the-cli-tools)