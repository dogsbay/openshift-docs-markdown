---
title: Creating and using config maps
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating and using config maps {id="configmaps"}
{%- set context = "configmaps" %}

You can review the following sections to learn how to create and use config maps. By using a config map, you can decouple environment-specific configuration from your container images, so that your applications are easily portable. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-pods-configmap-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-configmap-create-from-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-configmap-create.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmap-creating-from-directories.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmap-creating-from-files.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmap-creating-from-literal-values.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmaps-use-case-consuming-in-env-vars.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmaps-use-case-setting-command-line-arguments.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmaps-use-case-consuming-in-volumes.md" %}{% endleveloffset %}