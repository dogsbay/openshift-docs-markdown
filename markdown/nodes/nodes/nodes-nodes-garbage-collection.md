---
title: Freeing node resources using garbage collection
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Freeing node resources using garbage collection {id="nodes-nodes-garbage-collection"}
{%- set context = "nodes-nodes-configuring" %}

As an administrator, you can use {{ product_title }} to ensure that your nodes are running efficiently
by freeing up resources through garbage collection. {._abstract}

The {{ product_title }} node performs two types of garbage collection:

*   Container garbage collection: Removes terminated containers.
*   Image garbage collection: Removes images not referenced by any running pods.

{% leveloffset +1 %}{% include "./modules/nodes-nodes-garbage-collection-containers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-garbage-collection-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-garbage-collection-configuring.md" %}{% endleveloffset %}