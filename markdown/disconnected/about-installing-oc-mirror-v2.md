---
title: Mirroring images for a disconnected installation by using the oc-mirror plugin v2
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Mirroring images for a disconnected installation by using the oc-mirror plugin v2 {id="about-installing-oc-mirror-v2"}
{%- set context = "about-installing-oc-mirror-v2" %}

You can run your cluster in a disconnected environment if you install the cluster from a mirrored set of {{ product_title }} container images in a private registry. This registry must be running whenever your cluster is running. {._abstract}

You can use oc-mirror plugin v2 to mirror images to a mirror registry in your fully or partially disconnected environments. To download the required images from the official Red&#160;Hat registries, you must run oc-mirror plugin v2 from a system with internet connectivity.

{% leveloffset +1 %}{% include "./modules/oc-mirror-v2-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-v2-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-v2-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-preparing-mirror-hosts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-installing-plugin.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-adding-registry-pull-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-v2-mirroring-image-set.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-building-image-set-config-v2.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the OpenShift Update Service](/updating/understanding_updates/intro-to-updates#update-service-about_understanding-openshift-updates)

{% leveloffset +2 %}{% include "./modules/oc-mirror-workflows-table.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-workflows-partially-disconnected-v2.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-workflows-fully-disconnected-v2.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/oc-mirror-mirror-to-disk-v2.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/oc-mirror-disk-to-mirror-v2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-IDMS-ITMS-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [CatalogSource](/rest_api/operatorhub_apis/catalogsource-operators-coreos-com-v1alpha1)
*   [ImageDigestMirrorSet](/rest_api/config_apis/imagedigestmirrorset-config-openshift-io-v1#imagedigestmirrorset-config-openshift-io-v1)
*   [ImageTagMirrorSet](/rest_api/config_apis/imagetagmirrorset-config-openshift-io-v1#imagetagmirrorset-config-openshift-io-v1)
*   [About catalogs in {{ olmv1 }}](/extensions/catalogs/managing-catalogs#olmv1-about-catalogs_managing-catalogs)

{% leveloffset +2 %}{% include "./modules/oc-mirror-restricted-fields.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-updating-cluster-manifests-v2.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Disconnected environment support in {{ olmv1 }}](/extensions/catalogs/disconnected-catalogs#disconnected-catalogs)

{% leveloffset +1 %}{% include "./modules/oc-mirror-workflows-delete-v2.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Resolving storage cleanup issues in the distribution registry](/disconnected/about-installing-oc-mirror-v2#oc-mirror-v2-procedure-garbage-collector_about-installing-oc-mirror-v2)

{% leveloffset +2 %}{% include "./modules/oc-mirror-v2-procedure-garbage-collector.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-procedure-delete-v2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-v2-about-dry-run.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-dry-run-v2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-troubleshooting-v2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules//oc-mirror-enclave-support-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-enclave-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-proxy-support.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating a cluster in a disconnected environment using the OpenShift Update Service](/disconnected/updating/disconnected-update-osus#updating-disconnected-cluster-osus)
*   [Resolving storage cleanup issues in the distribution registry](/disconnected/about-installing-oc-mirror-v2#oc-mirror-v2-procedure-garbage-collector_about-installing-oc-mirror-v2)

{% leveloffset +1 %}{% include "./modules/oc-mirror-signature-mirroring.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [containers-registries.d(5) manual](https://github.com/containers/container-libs/blob/main/image/docs/containers-registries.d.5.md)

{% leveloffset +2 %}{% include "./modules/oc-mirror-signature-mirroring-procedure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-signature-verification.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-operator-catalog-filtering.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-mirror-imageset-config-parameters-v2.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [opm CLI reference](/cli_reference/opm/cli-opm-ref#cli-opm-ref)

{% leveloffset +1 %}{% include "./modules/oc-mirror-command-reference-v2.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-command-reference-v2-delete.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oc-mirror-about-cache-and-workspace-dirs.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Installing a cluster in a disconnected environment](/disconnected/installing#installing-disconnected-environments)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Updating a cluster in a disconnected environment using the OpenShift Update Service](/disconnected/updating/disconnected-update-osus#updating-disconnected-cluster-osus)