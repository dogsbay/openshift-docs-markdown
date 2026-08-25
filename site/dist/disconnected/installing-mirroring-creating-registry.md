---
title: Creating a mirror registry with mirror registry for Red Hat OpenShift
---

# Creating a mirror registry with mirror registry for Red Hat OpenShift {#installing-mirroring-creating-registry}

The *mirror registry for Red Hat OpenShift* is a small and streamlined container registry that you can use as a target for mirroring the required container images of OpenShift Container Platform for disconnected installations.

If you already have a container image registry, such as {{ quay }}, you can skip this section and go straight to "Mirroring the OpenShift Container Platform image repository".

For more information, see "{{ quay }}".

> [!IMPORTANT]
> The *mirror registry for Red Hat OpenShift* is not intended to be a substitute for a production deployment of {{ quay }}.

**Additional resources**

- [OpenShift console Downloads](https://console.redhat.com/openshift/downloads#tool-mirror-registry)
- [Self-managed Red Hat OpenShift sizing and subscription guide](https://www.redhat.com/en/resources/self-managed-openshift-sizing-subscription-guide)

## Additional resources {#additional-resources_installing-mirroring-creating-registry}

- [{{ quay }} garbage collection](https://access.redhat.com/documentation/en-us/red_hat_quay/3/html/manage_red_hat_quay/garbage-collection#doc-wrapper)
- [Securing {{ quay }}](https://docs.redhat.com/en/documentation/red_hat_quay/3/html-single/securing_red_hat_quay/index)
- [Configuring the system to trust the certificate authority](https://docs.redhat.com/en/documentation/red_hat_quay/3/html-single/securing_red_hat_quay/index#configuring-system-trust-ca)
- [Mirroring the OpenShift Container Platform image repository](/disconnected/installing-mirroring-installation-images#installation-mirror-repository_installing-mirroring-installation-images)
- [Mirroring Operator catalogs for use with disconnected clusters](/disconnected/installing-mirroring-installation-images#olm-mirror-catalog_installing-mirroring-installation-images)
