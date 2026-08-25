---
title: "{{ run_once_operator }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ run_once_operator }} overview {id="run-once-duration-override-about"}
{%- set context = "run-once-duration-override-about" %}

The {{ run_once_operator }} enforces time limits on run-once pods to prevent tasks from running indefinitely and consuming cluster resources. {._abstract}

{% leveloffset +1 %}{% include "./modules/rodoo-about.md" %}{% endleveloffset %}