---
title: Image configuration resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Image configuration resources {id="image-configuration-classic"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "image-configuration" %}

You can configure an image registry to store and serve container images.

{% leveloffset +1 %}{% include "./modules/images-configuration-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-configuration-mco-and-registry-changes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-configuration-file.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-allowed.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-blocked.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/images-configuration-blocked-payload.md" %}{% endleveloffset %}

{%- endif %}

{% leveloffset +2 %}{% include "./modules/images-configuration-insecure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images_configuration_shortname_con.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-shortname-when-not-to-use.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-shortname.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-cas.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-configuration-registry-mirror.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-registry-mirror-project-secret.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-registry-mirror-configuring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images_configuring_registry_mirror_config_params.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-registry-mirror-convert.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated) %}
## Additional resources {id="additional-resources_image-configuration"}

*   [Working with manifest lists](/openshift_images/image-streams-manage#images-imagestream-import-import-mode_image-streams-managing)
*   [Understanding feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-about_nodes-cluster-enabling)
*   [Updating the global cluster pull secret](/openshift_images/managing_images/using-image-pull-secrets#images-update-global-pull-secret_using-image-pull-secrets)
*   [Configuring project-scoped image pull secrets for mirrored registries](/openshift_images/image-configuration#images-configuration-registry-mirror-project-secret_image-configuration)
{% endif %}