---
title: Using config maps with applications
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using config maps with applications {id="config-maps"}
{%- set context = "config-maps" %}

By using a config map, you can decouple configuration artifacts from image content to keep containerized applications portable. {._abstract}

The following sections define config maps, explain how to create and use them, and describe use cases for consuming `ConfigMap` objects in pods.

{% leveloffset +1 %}{% include "./modules/nodes-pods-configmap-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating and using config maps](/nodes/pods/nodes-pods-configmaps)

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmaps-use-case-consuming-in-env-vars.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmaps-use-case-setting-command-line-arguments.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-configmaps-use-case-consuming-in-volumes.md" %}{% endleveloffset %}