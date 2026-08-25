---
title: Evicting pods using the descheduler
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Evicting pods using the descheduler {id="nodes-descheduler-configuring"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nodes-descheduler-configuring" %}

You can run the descheduler in {{ product_title }} by installing the {{ descheduler_operator }} and setting the required profiles and other customizations.

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-configuring-profiles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-configuring-interval.md" %}{% endleveloffset %}