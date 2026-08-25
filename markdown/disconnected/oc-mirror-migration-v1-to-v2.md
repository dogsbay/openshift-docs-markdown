---
title: Migrating from oc-mirror plugin v1 to v2
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Migrating from oc-mirror plugin v1 to v2 {id="oc-mirror-migration-v1-to-v2"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oc-mirror-migration-v1-to-v2" %}

The oc-mirror v2 plugin introduces major changes to image mirroring workflows. Understand the migration process and check for compatibility with oc-mirror plugin v2 to ensure a successful migration.


:::important

You must manually update the configurations by modifying the API version and removing deprecated fields. For more information, see "Changes from oc-mirror plugin v1 to v2".

:::


{% leveloffset +1 %}{% include "./modules/oc-mirror-migration-differences.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-migration-process.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Mirroring an image set in a partially disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-workflows-partially-disconnected-v2_about-installing-oc-mirror-v2)
*   [Mirroring an image set in a fully disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-workflows-fully-disconnected-v2_about-installing-oc-mirror-v2)
*   [Changes from oc-mirror plugin v1 to v2](/disconnected/oc-mirror-migration-v1-to-v2#oc-mirror-migration-differences_oc-mirror-migration-v1-to-v2)
*   [Deletion of images from your disconnected environment](/disconnected/about-installing-oc-mirror-v2#oc-mirror-procedure-delete-v2_about-installing-oc-mirror-v2)