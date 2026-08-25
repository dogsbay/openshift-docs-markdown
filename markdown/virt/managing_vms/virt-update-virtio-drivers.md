---
title: Update VirtIO drivers
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Update VirtIO drivers {id="virt-update-virtio-drivers"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-update-virtio-drivers" %}

Update VirtIO drivers in guest operating systems. Using the latest VirtIO drivers increases performance and stability.

{% leveloffset +1 %}{% include "./modules/virt-updating-red-hat-virtio-drivers-windows.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-updating-virtio-drivers-windows.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Allow signed updates from an intranet Microsoft update service location](https://learn.microsoft.com/en-us/windows/deployment/update/waas-wu-settings#allow-signed-updates-from-an-intranet-microsoft-update-service-location)
*   [Do not include drivers with Windows Updates](https://learn.microsoft.com/en-us/windows/deployment/update/waas-wu-settings#do-not-include-drivers-with-windows-updates)