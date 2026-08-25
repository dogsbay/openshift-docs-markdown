---
title: Using Operator Lifecycle Manager in disconnected environments
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using Operator Lifecycle Manager in disconnected environments {id="olm-restricted-networks"}
{%- set context = "olm-restricted-networks" %}

For {{ product_title }} clusters in disconnected environments, Operator Lifecycle Manager (OLM) by default cannot access the Red&#160;Hat-provided software catalog sources hosted on remote registries because those remote sources require full internet connectivity. {._abstract}

However, as a cluster administrator you can still enable your cluster to use OLM in a disconnected environment if you have a workstation that has full internet access. The workstation, which requires full internet access to pull the remote software catalog content, is used to prepare local mirrors of the remote sources, and push the content to a mirror registry.

The mirror registry can be located on a bastion host, which requires connectivity to both your workstation and the disconnected cluster, or a completely disconnected, or _airgapped_, host, which requires removable media to physically move the mirrored content to the disconnected environment.

This guide describes the following process that is required to enable OLM in disconnected environments:

*   Disable the default remote software catalog sources for OLM.
*   Use a workstation with full internet access to create and push local mirrors of the software catalog content to a mirror registry.
*   Configure OLM to install and manage Operators from local sources on the mirror registry instead of the default remote sources.

After enabling OLM in a disconnected environment, you can continue to use your unrestricted workstation to keep your local software catalog sources updated as newer versions of Operators are released.


:::important

While OLM can manage Operators from local sources, the ability for a given Operator to run successfully in a disconnected environment still depends on the Operator itself meeting the following criteria:

*   List any related images, or other container images that the Operator might require to perform their functions, in the `relatedImages` parameter of its `ClusterServiceVersion` (CSV) object.
*   Reference all specified images by a digest (SHA) and not by a tag.

You can search software on the Red&#160;Hat Ecosystem Catalog for a list of Red&#160;Hat Operators that support running in disconnected mode by filtering with the following selections:


Type
:   Containerized application

Deployment method
:   Operator

Infrastructure features
:   Disconnected


    For more information, see "Red&#160;Hat Ecosystem Catalog".

:::


**Additional resources**
{._additional-resources}

*   [Red&#160;Hat Ecosystem Catalog](https://catalog.redhat.com/software/search?p=1&deployed_as=Operator&type=Containerized%20application&badges_and_features=Disconnected)

{% leveloffset +1 %}{% include "./modules/prereq-olm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirroring-operator-catalog.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Mirroring Operator catalogs for use with disconnected clusters](/disconnected/installing-mirroring-installation-images#olm-mirror-catalog_installing-mirroring-installation-images)
*   [Operator Framework packaging format](/operators/understanding/olm-packaging-format#olm-file-based-catalogs_olm-packaging-format)
*   [Managing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-managing-custom-catalogs-fb)
*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)

{% leveloffset +1 %}{% include "./modules/olm-creating-catalog-from-index.md" %}{% endleveloffset %}

## Additional resources {id="using-olm-additional-resources_{{ context }}" ._additional-resources}

*   [Red&#160;Hat-provided Operator catalogs](/operators/understanding/olm-rh-catalogs#olm-rh-catalogs)
*   [Accessing images for Operators from private registries](/operators/admin/olm-managing-custom-catalogs#olm-accessing-images-private-registries_olm-managing-custom-catalogs)
*   [Image template for custom catalog sources](/operators/understanding/olm/olm-understanding-olm#olm-catalogsource-image-template_olm-understanding-olm)
*   [Image pull policy](/openshift_images/managing_images/image-pull-policy#image-pull-policy)
*   [Update installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)