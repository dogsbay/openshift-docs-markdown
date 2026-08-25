---
title: Reducing resource consumption with application idling
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Reducing resource consumption with application idling {id="idling-applications"}
{%- set context = "idling-applications" %}

As an administrator, you can reduce cluster resource consumption and lower public cloud costs by temporarily scaling inactive application resources to zero replicas. {._abstract}

If any scalable resources are not in use, {{ product_title }} discovers and idles them by scaling their replicas to `0`. The next time network traffic is directed to the resources, the resources are unidled by scaling up the replicas, and normal operation continues.

Applications are made of services, as well as other scalable resources, such as deployment configs. The action of idling an application involves idling all associated resources.

{% leveloffset +1 %}{% include "./modules/idle-idling-applications.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/idle-idling-applications-single.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/idle-idling-applications-multiple.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/idle-unidling-applications.md" %}{% endleveloffset %}