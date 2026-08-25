---
title: Using the Cluster Samples Operator with an alternate registry
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Using the Cluster Samples Operator with an alternate registry {id="samples-operator-alt-registry"}

{%- set context = "samples-operator-alt-registry" %}

You can use the Cluster Samples Operator with an alternate registry by preparing a mirror host and creating a mirror registry. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-about-mirror-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-adding-registry-pull-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-mirror-repository.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-restricted-network-samples.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-images-samples-disconnected-mirroring-assist.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Additional resources {id="additional-resources_samples-operator-alt-registry" ._additional-resources}

*   [Viewing the image pull source](/installing/validation_and_troubleshooting/validating-an-installation#viewing-the-image-pull-source_validating-an-installation)
*   [Using Cluster Samples Operator image streams with alternate or mirrored registries](/openshift_images/samples-operator-alt-registry#installation-restricted-network-samples_samples-operator-alt-registry)
{% endif %}