---
title: Allowing containers to consume API objects
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-containers-downward-api" %}
# Allowing containers to consume API objects {id="nodes-containers-downward-api"}
{% include "./_attributes/common-attributes.md" %}

You can use the _Downward API_ to allow containers to consume information about API objects, such as the pod’s name, namespace, and resource values, without coupling to {{ product_title }} by using environment variables or a volume plugin.

{% leveloffset +1 %}{% include "./modules/nodes-containers-downward-api-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-downward-api-container-values.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-containers-downward-api-container-values-envars.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-containers-downward-api-container-values-plugin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-downward-api-container-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-containers-downward-api-container-resources-envars.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-containers-downward-api-container-resources-plugin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-downward-api-container-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-downward-api-container-configmaps.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-downward-api-container-envars.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-downward-api-container-escaping.md" %}{% endleveloffset %}