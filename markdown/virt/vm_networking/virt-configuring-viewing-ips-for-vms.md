---
title: Configuring and viewing IP addresses
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring and viewing IP addresses {id="virt-configuring-viewing-ips-for-vms"}
{%- set context = "virt-configuring-viewing-ips-for-vms" %}

You can configure an IP address when you create a virtual machine (VM). The IP address is provisioned with cloud-init. View the IP address of a VM by using the {{ product_title }} web console or the command line. The network information is collected by the QEMU guest agent. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-configuring-ip-vm-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-ip-vm-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-viewing-vmi-ip-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-viewing-vmi-ip-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Installing the QEMU guest agent](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent)