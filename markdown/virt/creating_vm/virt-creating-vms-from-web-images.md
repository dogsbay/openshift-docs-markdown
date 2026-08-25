---
title: Creating VMs by importing images from web pages
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating VMs by importing images from web pages {id="virt-creating-vms-from-web-images"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-creating-vms-from-web-images" %}

You can create virtual machines (VMs) by importing operating system images from web pages.


:::important

You must install the QEMU guest agent on VMs created from operating system images that are not provided by Red&#160;Hat.

:::


{% leveloffset +1 %}{% include "./modules/virt-creating-vm-custom-image-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-web-page-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Installing the QEMU guest agent](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)