---
title: Using Init Containers to perform tasks before a pod is deployed
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-containers-init" %}
# Using Init Containers to perform tasks before a pod is deployed {id="nodes-containers-init"}
{% include "./_attributes/common-attributes.md" %}

You can use _init containers_, which are specialized containers
that run before application containers and can contain utilities or setup scripts not present in an app image.

{% leveloffset +1 %}{% include "./modules/nodes-containers-init-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-init-creating.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Init Containers (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)