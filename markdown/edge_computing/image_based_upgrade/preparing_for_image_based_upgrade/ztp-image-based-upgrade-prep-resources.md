---
title: "Creating ConfigMap objects for the image-based upgrade with the {{ lcao }} using {{ ztp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating ConfigMap objects for the image-based upgrade with the {{ lcao }} using {{ ztp }} {id="ztp-image-based-upgrade-prep-resources"}

{%- set context = "ztp-gitops" %}

Create your {{ oadp_short }} resources, extra manifests, and custom catalog sources wrapped in a `ConfigMap` object to prepare for the image-based upgrade. {._abstract}

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-prep-oadp.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring a shared container partition between ostree stateroots when using {{ ztp }}](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#ztp-image-based-upgrade-shared-container-partition_shared-container-partition)
*   [Installing and configuring the {{ oadp_short }} Operator with {{ ztp }}](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-install-operators#ztp-image-based-upgrade-installing-oadp_install-operators)

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-prep-label-extramanifests.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring a shared container partition between ostree stateroots when using {{ ztp }}](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#ztp-image-based-upgrade-shared-container-partition_shared-container-partition)
*   [Performing an image-based upgrade for {{ sno }} clusters using {{ ztp }}](/edge_computing/image_based_upgrade/ztp-image-based-upgrade#ztp-image-based-upgrade)