---
title: Mirroring images for a disconnected installation by using the oc-mirror plugin v2
---

# Mirroring images for a disconnected installation by using the oc-mirror plugin v2 {#about-installing-oc-mirror-v2}

You can run your cluster in a disconnected environment if you install the cluster from a mirrored set of OpenShift Container Platform container images in a private registry. This registry must be running whenever your cluster is running.

You can use oc-mirror plugin v2 to mirror images to a mirror registry in your fully or partially disconnected environments. To download the required images from the official Red Hat registries, you must run oc-mirror plugin v2 from a system with internet connectivity.

**Additional resources**

- [About the OpenShift Update Service](/openshift-docs-markdown/updating/understanding_updates/intro-to-updates#update-service-about_understanding-openshift-updates)

**Additional resources**

- [CatalogSource](#../rest_api/operatorhub_apis/catalogsource-operators-coreos-com-v1alpha1.html)
- [ImageDigestMirrorSet](/openshift-docs-markdown/rest_api/config_apis/imagedigestmirrorset-config-openshift-io-v1#imagedigestmirrorset-config-openshift-io-v1)
- [ImageTagMirrorSet](/openshift-docs-markdown/rest_api/config_apis/imagetagmirrorset-config-openshift-io-v1#imagetagmirrorset-config-openshift-io-v1)
- [About catalogs in {{ olmv1 }}](/openshift-docs-markdown/extensions/catalogs/managing-catalogs#olmv1-about-catalogs_managing-catalogs)

**Additional resources**

- [Disconnected environment support in {{ olmv1 }}](/openshift-docs-markdown/extensions/catalogs/disconnected-catalogs#disconnected-catalogs)

**Additional resources**

- [Resolving storage cleanup issues in the distribution registry](/openshift-docs-markdown/disconnected/about-installing-oc-mirror-v2#oc-mirror-v2-procedure-garbage-collector_about-installing-oc-mirror-v2)

**Additional resources**

- [Updating a cluster in a disconnected environment using the OpenShift Update Service](/openshift-docs-markdown/disconnected/updating/disconnected-update-osus#updating-disconnected-cluster-osus)
- [Resolving storage cleanup issues in the distribution registry](/openshift-docs-markdown/disconnected/about-installing-oc-mirror-v2#oc-mirror-v2-procedure-garbage-collector_about-installing-oc-mirror-v2)

**Additional resources**

- [containers-registries.d(5) manual](https://github.com/containers/container-libs/blob/main/image/docs/containers-registries.d.5.md)

**Additional resources**

- [opm CLI reference](/openshift-docs-markdown/cli_reference/opm/cli-opm-ref#cli-opm-ref)

## Additional resources {#additional-resources_about-installing-oc-mirror-v2}

- [Installing a cluster in a disconnected environment](/openshift-docs-markdown/disconnected/installing#installing-disconnected-environments)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Updating a cluster in a disconnected environment using the OpenShift Update Service](/openshift-docs-markdown/disconnected/updating/disconnected-update-osus#updating-disconnected-cluster-osus)
