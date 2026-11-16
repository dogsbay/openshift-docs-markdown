---
title: About mirror registry for Red Hat OpenShift
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About mirror registry for Red Hat OpenShift {id="installing-mirroring-creating-registry"}
{%- set context = "installing-mirroring-creating-registry" %}

The _mirror registry for Red&#160;Hat OpenShift_ 3.0 is a streamlined container registry that you can use as a target for mirroring the required container images of {{ product_title }} for disconnected installations. {._abstract}

{%- set FeatureName = "Mirror registry for Red Hat OpenShift 3.0" %}
{% include "./snippets/technology-preview.md" %}


:::important

The _mirror registry for Red&#160;Hat OpenShift_ is not intended to be a substitute for a production deployment of {{ quay }}.

:::


If you already have a container image registry, such as {{ quay }}, you can skip this section and go straight to "Mirroring the {{ product_title }} image repository".

{% leveloffset +1 %}{% include "./modules/mirror-registry-introduction.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating a mirror registry with mirror registry for Red&#160;Hat OpenShift](https://docs.redhat.com/en/documentation/openshift_container_platform/4.21/html-single/disconnected_environments/index#installing-mirroring-creating-registry)
*   [OpenShift console Downloads](https://console.redhat.com/openshift/downloads#tool-mirror-registry)
*   [Self-managed Red&#160;Hat OpenShift sizing and subscription guide](https://www.redhat.com/en/resources/self-managed-openshift-sizing-subscription-guide)

{% leveloffset +1 %}{% include "./modules/configuring-rootless-podman-networking.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-localhost.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mirror-registry-data-dir.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-localhost-update.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-migrate-sqlite.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-migrate-postgresql.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-ssl-cert-replace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-uninstall.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-flags.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-release-notes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mirror-registry-release-notes-3-0.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mirror-registry-release-notes-2-0.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mirror-registry-release-notes-1-3.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mirror-registry-release-notes-1-2.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mirror-registry-release-notes-1-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mirror-registry-troubleshooting.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_installing-mirroring-creating-registry" ._additional-resources}

*   [Securing {{ quay }}](https://docs.redhat.com/en/documentation/red_hat_quay/3/html-single/securing_red_hat_quay/index)
*   [Configuring the system to trust the certificate authority](https://docs.redhat.com/en/documentation/red_hat_quay/3/html-single/securing_red_hat_quay/index#configuring-system-trust-ca)
*   [Mirroring the {{ product_title }} image repository](/disconnected/installing-mirroring-installation-images#installation-mirror-repository_installing-mirroring-installation-images)
*   [Mirroring Operator catalogs for use with disconnected clusters](/disconnected/installing-mirroring-installation-images#olm-mirror-catalog_installing-mirroring-installation-images)