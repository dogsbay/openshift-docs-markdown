---
title: Using build strategies
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using build strategies {id="build-strategies"}
{%- set context = "build-strategies" %}

The following sections define the primary supported build strategies, and how to use them.

{% leveloffset +1 %}{% include "./modules/builds-strategy-docker-build.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-docker-from-image.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-dockerfile-path.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-docker-environment-variables.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-docker-build-arguments.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-docker-squash-layers.md" %}{% endleveloffset %}

{%- set context = "build-strategies-docker" %}

{% leveloffset +2 %}{% include "./modules/builds-using-build-volumes.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Build inputs](/cicd/builds/creating-build-inputs#builds-define-build-inputs_creating-build-inputs)
*   [Input secrets and config maps](/cicd/builds/creating-build-inputs#builds-input-secrets-configmaps_creating-build-inputs)

{% leveloffset +1 %}{% include "./modules/builds-strategy-s2i-build.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-s2i-incremental-builds.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-s2i-override-builder-image-scripts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-s2i-environment-variables.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-strategy-s2i-environment-files.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-strategy-s2i-buildconfig-environment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-s2i-ignore-source-files.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-create-s2i.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/images-create-s2i-build.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/images-create-s2i-scripts.md" %}{% endleveloffset %}

{%- set context = "build-strategies-s2i" %}

{% leveloffset +2 %}{% include "./modules/builds-using-build-volumes.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Build inputs](/cicd/builds/creating-build-inputs#builds-define-build-inputs_creating-build-inputs)
*   [Input secrets and config maps](/cicd/builds/creating-build-inputs#builds-input-secrets-configmaps_creating-build-inputs)

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/builds-strategy-custom-build.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-custom-from-image.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-custom-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-custom-environment-variables.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-custom.md" %}{% endleveloffset %}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/builds-strategy-pipeline-build.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-understanding-openshift-pipeline.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-pipeline-providing-jenkinsfile.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-pipeline-environment-variables.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-strategy-pipeline-mapping-buildconfig-jenkins.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-tutorial-pipeline.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-strategy-secrets-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-strategy-enable-pulling-pushing.md" %}{% endleveloffset %}