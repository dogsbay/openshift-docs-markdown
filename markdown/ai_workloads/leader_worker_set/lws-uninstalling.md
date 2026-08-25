---
title: "Uninstalling the {{ lws_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling the {{ lws_operator }} {id="lws-uninstalling"}

{%- set context = "lws-uninstalling" %}

If you no longer need the {{ lws_operator }} in your cluster, you can uninstall the Operator and remove its related resources.

{% leveloffset +1 %}{% include "./modules/lws-uninstall.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lws-remove-resources.md" %}{% endleveloffset %}