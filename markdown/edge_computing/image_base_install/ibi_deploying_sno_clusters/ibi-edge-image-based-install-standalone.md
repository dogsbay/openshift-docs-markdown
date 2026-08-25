---
title: "About image-based deployments for {{ sno }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About image-based deployments for {{ sno }} {id="ibi-image-based-install-standalone"}
{%- set context = "ibi-edge-image-based-install" %}

You can manually generate a configuration ISO by using the `openshift-install` program. Attach the configuration ISO to your preinstalled target host to complete the deployment.

{% leveloffset +1 %}{% include "./modules/ibi-create-standalone-config-iso.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using image pull secrets](/openshift_images/managing_images/using-image-pull-secrets)
*   [Reference specifications for the `image-based-installation-config.yaml` manifest](/edge_computing/image_base_install/ibi_deploying_sno_clusters/ibi-edge-image-based-install-standalone#ibi-installer-configuration-config_ibi-edge-image-based-install)

{% leveloffset +2 %}{% include "./modules/ibi-installer-configuration-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ibi-extra-manifests-standalone.md" %}{% endleveloffset %}