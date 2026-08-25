---
title: "Creating ConfigMap objects for the image-based upgrade with the {{ lcao }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating ConfigMap objects for the image-based upgrade with the {{ lcao }} {id="cnf-image-based-upgrade-prep-resources"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cnf-non-gitops" %}

The {{ lcao }} needs all your {{ oadp_short }} resources, extra manifests, and custom catalog sources wrapped in a `ConfigMap` object to process them for the image-based upgrade.

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-prep-oadp.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring a shared container partition between ostree stateroots](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#cnf-image-based-upgrade-shared-container-partition_shared-container-partition)
*   [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-prep-extramanifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-prep-catalogsource.md" %}{% endleveloffset %}

**Additional resources**

*   [Catalog source](/operators/understanding/olm/olm-understanding-olm#olm-catalogsource_olm-understanding-olm)
*   [Performing an image-based upgrade for {{ sno }} with {{ lcao }}](/edge_computing/image_based_upgrade/cnf-image-based-upgrade-base#cnf-image-based-upgrade)