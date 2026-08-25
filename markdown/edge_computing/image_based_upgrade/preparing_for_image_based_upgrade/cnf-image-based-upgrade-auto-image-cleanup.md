---
title: Configuring the automatic image cleanup of the container storage disk
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the automatic image cleanup of the container storage disk {id="cnf-image-based-upgrade-configure-auto-image-cleanup"}
{%- set context = "auto-cleanup" %}

Configure when the {{ lcao }} cleans up unpinned images in the `Prep` stage by setting a minimum threshold for available storage space through annotations.
The default container storage disk usage threshold is 50%.

The {{ lcao }} does not delete images that are pinned in CRI-O or are currently used.
The Operator selects the images for deletion by starting with dangling images and then sorting the images from oldest to newest that is determined by the image `Created` timestamp.

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-configure-container-storage-image-cleanup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-disable-container-storage-image-cleanup.md" %}{% endleveloffset %}