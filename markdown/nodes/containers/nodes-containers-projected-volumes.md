---
title: Mapping volumes using projected volumes
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-containers-projected-volumes" %}
{% include "./_attributes/common-attributes.md" %}
# Mapping volumes using projected volumes {id="nodes-containers-projected-volumes"}

You can centralize sensitive information and environment metadata for your applications by using projected volumes to map multiple configuration sources, such as secrets and config maps, into a single directory. Having a single directory makes it easier for your applications to access that information. {._abstract}

The following types of volume sources can be projected:

*   Secrets
*   Config Maps
*   Downward API


:::note

All sources are required to be in the same namespace as the pod.

:::


{% leveloffset +1 %}{% include "./modules/nodes-containers-projected-volumes-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-projected-volumes-creating.md" %}{% endleveloffset %}