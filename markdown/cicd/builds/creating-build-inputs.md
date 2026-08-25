---
title: Creating build inputs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating build inputs {id="creating-build-inputs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-build-inputs" %}

Use the following sections for an overview of build inputs, instructions on how
to use inputs to provide source content for builds to operate on, and how to use
build environments and create secrets.

{% leveloffset +1 %}{% include "./modules/builds-define-build-inputs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-dockerfile-source.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-image-source.md" %}{% endleveloffset %}

{% if not openshift_rosa_hcp %}

**Additional resources**

*   [Configuring project-scoped image pull secrets for mirrored registries](/openshift_images/image-configuration#images-configuration-registry-mirror-project-secret_image-configuration)
{% endif %}

{% leveloffset +1 %}{% include "./modules/builds-source-code.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-using-proxy-git-cloning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-adding-source-clone-secrets.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-automatically-add-source-clone-secrets.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-manually-add-source-clone-secrets.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-gitconfig-file.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-gitconfig-file-secured-git.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-source-secret-basic-auth.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-source-secret-ssh-key-auth.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-source-secret-trusted-ca.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-source-secret-combinations.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/builds-source-secret-combinations-ssh-gitconfig.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/builds-source-secret-combinations-gitconfig-ca.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/builds-source-secret-combinations-basic-auth-ca.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/builds-source-secret-combinations-basic-auth-gitconfig.md" %}{% endleveloffset %}

{% leveloffset +4 %}{% include "./modules/builds-source-secret-combinations-basic-auth-gitconfig-ca.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-binary-source.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-input-secrets-configmaps.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-secrets-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-creating-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-using-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-adding-input-secrets-configmaps.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-source-to-image.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}

{% leveloffset +2 %}{% include "./modules/builds-docker-strategy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-custom-strategy.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/builds-using-external-artifacts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-docker-credentials-private-registries.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-build-environment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-using-build-fields-as-environment-variables.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-using-secrets-as-environment-variables.md" %}{% endleveloffset %}

**Additional resources**

*   [Input secrets and config maps](/cicd/builds/creating-build-inputs#builds-input-secrets-configmaps_creating-build-inputs)

{% leveloffset +1 %}{% include "./modules/builds-service-serving-certificate-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-secrets-restrictions.md" %}{% endleveloffset %}