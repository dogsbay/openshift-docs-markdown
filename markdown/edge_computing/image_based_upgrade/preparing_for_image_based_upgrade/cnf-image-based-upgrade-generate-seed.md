---
title: "Generating a seed image for the image-based upgrade with the {{ lcao }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Generating a seed image for the image-based upgrade with the {{ lcao }} {id="cnf-image-based-upgrade-generate-seed-image"}
{%- set context = "generate-seed" %}

Use the {{ lcao }} to generate the seed image with the `SeedGenerator` custom resource (CR).

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-seed-image-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-generate-seed-image.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring a shared container partition between ostree stateroots](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#cnf-image-based-upgrade-shared-container-partition_shared-container-partition)
*   [Configuring a shared container partition between ostree stateroots when using {{ ztp }}](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#ztp-image-based-upgrade-shared-container-partition_shared-container-partition)