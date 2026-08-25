---
title: About disconnected environments
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About disconnected environments {id="about-disconnected-environments"}
{%- set context = "about-disconnected-environments" %}

A disconnected environment is an environment that does not have full access to the internet. {._abstract}

{{ product_title }} is designed to perform many automatic functions that depend on an internet connection, such as retrieving release images from a registry or retrieving update paths and recommendations for the cluster.
Without a direct internet connection, you must perform additional setup and configuration for your cluster to maintain full functionality in the disconnected environment.

{% leveloffset +1 %}{% include "./modules/glossary-discc-env-terms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pref-methods-working-discc-env.md" %}{% endleveloffset %}

## Additional resources {id="about-additional-resources_{{ context }}" ._additional-resources}
*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)
*   [Installing a cluster with customizations](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)
*   [Updating a cluster in a disconnected environment using the OpenShift Update Service](/disconnected/updating/disconnected-update-osus#updating-disconnected-cluster-osus)