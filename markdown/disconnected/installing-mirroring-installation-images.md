---
title: Mirroring images for a disconnected installation by using the oc adm command
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Mirroring images for a disconnected installation by using the oc adm command {id="installing-mirroring-installation-images"}
{%- set context = "installing-mirroring-installation-images" %}

You can ensure your clusters only use container images that satisfy your organizational controls on external content. Before you install a cluster on infrastructure that you provision in a restricted network, you must mirror the required container images into that environment. {._abstract}

By using the `oc adm` command, you can mirror release and catalog images in OpenShift. To mirror container images, you must have a registry for mirroring.


:::important

*   The `oc adm release mirror` command is deprecated as of {{ product_title }} 4.22 and will be removed in a future release.
As an alternative, use the oc-mirror plugin v2.
*   You must have access to the internet to obtain the necessary container images.
In this procedure, you place your mirror registry on a mirror host
that has access to both your network and the internet. If you do not have access
to a mirror host, use the "Mirroring Operator catalogs for use with disconnected clusters" procedure to copy images to a device you can move across network boundaries with.

:::



:::note

When using the `oc adm release mirror` command, release image signatures are not automatically mirrored to the disconnected registry. Missing release signatures prevent cluster upgrades, as `ClusterImagePolicy` requires all release images to be verified. To ensure image signatures are correctly mirrored, it is recommended to use the oc-mirror v2 plugin.

:::


{% leveloffset +1 %}{% include "./modules/installing-mirroring-installation-images-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-about-mirror-registry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Viewing the image pull source](/installing/validation_and_troubleshooting/validating-an-installation#viewing-the-image-pull-source_validating-an-installation)

{% leveloffset +1 %}{% include "./modules/installing-preparing-mirror-host.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-adding-registry-pull-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-mirror-repository.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-preparing-samples-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-images-samples-disconnected-mirroring-assist.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-mirroring-catalog.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Docker v2-2](https://docs.docker.com/registry/spec/manifest-v2-2/)
*   [Service Mesh Operator mirroring failed](https://access.redhat.com/solutions/6975305)

{% leveloffset +2 %}{% include "./modules/olm-mirror-catalog-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-mirroring-catalog-extracting.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/olm-mirroring-catalog-colocated.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/olm-mirroring-catalog-airgapped.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Unauthorized error thrown while using catalog mirror command with Quay registry](https://access.redhat.com/solutions/5440741)

{% leveloffset +2 %}{% include "./modules/olm-mirroring-catalog-manifests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-mirroring-catalog-post.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Populating the software catalog from mirrored Operator catalogs](/post_installation_configuration/preparing-for-users#post-install-mirrored-catalogs_post-install-preparing-for-users)
*   [Updating or filtering a file-based catalog image](/operators/admin/olm-managing-custom-catalogs#olm-filtering-fbc_olm-managing-custom-catalogs)

## Additional resources {id="restricted-networks-additional-resources" ._additional-resources}

*   [Gathering data about specific features](/support/gathering-cluster-data#gathering-data-specific-features_gathering-cluster-data)
*   [Installing a cluster on vSphere in a disconnected environment with user-provisioned infrastructure](/installing/installing_vsphere/upi/installing-restricted-networks-vsphere#installing-restricted-networks-vsphere)
*   [Installing a user-provisioned bare-metal cluster on a disconnected environment](/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installing-restricted-networks-bare-metal)
*   [Installing a cluster on {{ aws_short }} in a disconnected environment with user-provisioned infrastructure](/installing/installing_aws/upi/installing-restricted-networks-aws#installing-restricted-networks-aws)