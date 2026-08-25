---
title: Restrict resource consumption with limit ranges
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cluster-limit-ranges" %}
# Restrict resource consumption with limit ranges {id="nodes-cluster-limit-ranges"}
{% include "./_attributes/common-attributes.md" %}

You can use limit ranges to restrict resource consumption for specific objects in a project.

By default, containers run with unbounded compute resources on an {{ product_title }} cluster. 

You can configure resource consumption for the following objects:

*   pods and containers: You can set minimum and maximum requirements for CPU and memory for pods and their containers.
*   Image streams: You can set limits on the number of images and tags in an `ImageStream` object.
*   Images: You can limit the size of images that can be pushed to an internal registry.
*   Persistent volume claims (PVC): You can restrict the size of the PVCs that can be requested.

If a pod does not meet the constraints imposed by the limit range, the pod cannot be created in the namespace.

{% leveloffset +1 %}{% include "./modules/nodes-cluster-limit-ranges-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-limit-ranges-limits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-limit-ranges-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-limit-ranges-viewing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-limit-ranges-deleting.md" %}{% endleveloffset %}