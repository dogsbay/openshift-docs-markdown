---
title: "{{ run_once_operator }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ run_once_operator }} overview {id="run-once-duration-override-about"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "run-once-duration-override-about" %}

The {{ run_once_operator }} enforces time limits on run-once pods to prevent tasks from running indefinitely and consuming cluster resources.

{% leveloffset +1 %}{% include "./modules/rodoo-about.md" %}{% endleveloffset %}