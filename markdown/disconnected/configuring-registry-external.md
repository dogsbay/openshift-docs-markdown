---
title: Configuring your cluster to use an external registry
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring your cluster to use an external registry {id="configuring-registry-external"}
{%- set context = "configuring-registry-external" %}

If your cluster was installed without an external registry, you can configure the cluster to use an external registry as a postinstallation task in order to use a mirroring workflow for your image management. {._abstract}


:::important

This configuration is applicable only to clusters installed using the method described in [Installing a cluster without an external registry](/installing/installing_with_agent_based_installer/installing-ove#installing-ove).

:::


When you install a cluster using the method described in "Installing a cluster without an external registry", the cluster relies on images contained in the downloaded ISO for its lifecycle management.
However, you might want to configure your cluster to use an external image registry and mirror images to the registry instead.
To do this, you must set up an external registry, successfully complete an update using images from the external registry, and finally delete `InternalReleaseImage` custom resource, which maintains an internal image registry in the cluster.

{%- set FeatureName = "Configuring your cluster to use an external registry" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/converting-external-registry-prereqs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating a mirror registry with mirror registry for Red&#160;Hat OpenShift](/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry)
*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)
*   [Updating a cluster in a disconnected environment using the OpenShift Update Service](/disconnected/updating/disconnected-update-osus#updating-disconnected-cluster-osus)

{% leveloffset +1 %}{% include "./modules/converting-external-registry-delete.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing a cluster without an external registry](/installing/installing_with_agent_based_installer/installing-ove#installing-ove)