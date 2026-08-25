---
title: About cluster updates in a disconnected environment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About cluster updates in a disconnected environment {id="about-disconnected-updates"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "about-disconnected-updates" %}

You can update a {{ product_title }} cluster in a disconnected environment where the cluster nodes cannot access the internet or where you want to manage update recommendations and release images locally for policy or performance purposes.

{% leveloffset +1 %}{% include "./modules/mirror-ocp-images.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring {{ product_title }} images](/disconnected/updating/mirroring-image-repository#mirroring-ocp-image-repository)

{% leveloffset +1 %}{% include "./modules/perform-cluster-update-disconnected-evn.md" %}{% endleveloffset %}

**Additional resources**

*   [Updating a cluster in a disconnected environment using the OpenShift Update Service](/disconnected/updating/disconnected-update-osus#updating-disconnected-cluster-osus)
*   [Updating a cluster in a disconnected environment without the OpenShift Update Service](/disconnected/updating/disconnected-update#updating-disconnected-cluster)

{% leveloffset +1 %}{% include "./modules/uninstalling-osus.md" %}{% endleveloffset %}

**Additional resources**

*   [Uninstalling the OpenShift Update Service from a cluster](/disconnected/updating/uninstalling-osus#uninstalling-osus)