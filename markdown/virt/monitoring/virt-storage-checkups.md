---
title: Storage checkups
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Storage checkups {id="virt-storage-checkups"}
{%- set context = "virt-storage-checkups" %}

You can use a storage checkup to verify that the cluster storage is optimally configured for {{ VirtProductName }}. {._abstract}

{% include "./snippets/virt-about-running-checkups.md" %}

{% leveloffset +1 %}{% include "./modules/virt-retain-storage-checkup-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-storage-checkup-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-checking-storage-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-troubleshoot-storage-checkup.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Collecting data for Red&#160;Hat Support](/virt/support/virt-collecting-virt-data#virt-collecting-virt-data)
*   [Using the `must-gather` tool for {{ VirtProductName }}](/virt/support/virt-collecting-virt-data#virt-using-virt-must-gather_virt-collecting-virt-data)

{% leveloffset +1 %}{% include "./modules/virt-troubleshoot-storage-checkup-error-codes.md" %}{% endleveloffset %}