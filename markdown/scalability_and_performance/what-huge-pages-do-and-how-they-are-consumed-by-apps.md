---
title: Optimizing memory management for workloads by using huge pages
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Optimizing memory management for workloads by using huge pages {id="what-huge-pages-do-and-how-they-are-consumed"}
{%- set context = "huge-pages" %}

To optimize memory management for specific workloads, configure huge pages. {._abstract}

{% leveloffset +1 %}{% include "./modules/what-huge-pages-do.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/how-huge-pages-are-consumed-by-apps.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/consuming-huge-pages-resource-using-the-downward-api.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Allowing containers to consume Downward API objects](/nodes/containers/nodes-containers-downward-api#nodes-containers-downward-api)

{% leveloffset +1 %}{% include "./modules/configuring-huge-pages.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/disabling-transparent-huge-pages.md" %}{% endleveloffset %}