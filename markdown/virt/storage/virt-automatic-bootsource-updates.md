---
title: Managing automatic boot source updates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing automatic boot source updates {id="virt-automatic-bootsource-updates"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-automatic-bootsource-updates" %}

You can manage automatic updates for boot sources used to create virtual machines. This includes configuring update behavior for Red Hat and custom boot sources.

{% leveloffset +1 %}{% include "./modules/virt-managing-auto-update-all-system-boot-sources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-default-and-virt-default-storage-class.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-storage-class-bootsource-update.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-autoupdate-custom-bootsource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-enabling-volume-snapshot-boot-source.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-disable-auto-updates-single-boot-source.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-increasing-bootsource-disk-image-retention.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-verify-status-bootsource-update.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [All Red Hat boot sources](/virt/storage/virt-automatic-bootsource-updates#virt-managing-auto-update-all-system-boot-sources_virt-automatic-bootsource-updates)
*   [All custom boot sources](/virt/storage/virt-automatic-bootsource-updates#virt-autoupdate-custom-bootsource_virt-automatic-bootsource-updates)
*   [Individual Red Hat or custom boot sources](/virt/storage/virt-automatic-bootsource-updates#virt-disable-auto-updates-single-boot-source_virt-automatic-bootsource-updates)