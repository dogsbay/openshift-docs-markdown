---
title: Accessing a virtual machine  by using its internal FQDN
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Accessing a virtual machine  by using its internal FQDN {id="virt-accessing-vm-internal-fqdn"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-accessing-vm-internal-fqdn" %}

You can access a virtual machine on a stable, fully qualified domain name (FQDN) by using headless services. A headless service creates DNS records for each pod instead of a virtual IP, enabling FQDN access without exposing specific ports.


:::important

If you created a VM by using the {{ product_title }} web console, you can find its internal FQDN listed in the **Network** tile on the **Overview** tab of the **VirtualMachine details** page.

:::


{% leveloffset +1 %}{% include "./modules/virt-creating-headless-services.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-discovering-vm-internal-fqdn.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-connecting-vm-internal-fqdn.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Exposing a VM by using a service](/virt/vm_networking/virt-exposing-vm-with-service#virt-exposing-vm-with-service)