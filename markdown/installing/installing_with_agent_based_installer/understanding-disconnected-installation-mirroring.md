---
title: Understanding disconnected installation mirroring
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding disconnected installation mirroring {id="understanding-disconnected-installation-mirroring"}
{%- set context = "understanding-disconnected-installation-mirroring" %}

You can use a mirror registry for disconnected installations and to ensure that your clusters only use container images that satisfy your organization’s controls on external content. {._abstract}

Before you install a cluster on infrastructure that you provision in a disconnected environment, you must mirror the required container images into that environment. To mirror container images, you must have a registry for mirroring.

You can use one of the following procedures to mirror your {{ product_title }} image repository to your mirror registry:

*   "Mirroring images for a disconnected installation by using the oc-mirror plugin v2"
*   "Mirroring images for a disconnected installation"

{% leveloffset +1 %}{% include "./modules/agent-install-about-mirroring-for-disconnected-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/agent-install-configuring-for-disconnected-registry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)
*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [Installing an {{ product_title }} cluster with the Agent-based Installer](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)