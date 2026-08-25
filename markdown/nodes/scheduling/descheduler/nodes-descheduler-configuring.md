---
title: Evicting pods using the descheduler
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Evicting pods using the descheduler {id="nodes-descheduler-configuring"}
{%- set context = "nodes-descheduler-configuring" %}

You can run the descheduler in {{ product_title }} by installing the {{ descheduler_operator }} and setting the required profiles and other customizations. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-configuring-profiles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-configuring-interval.md" %}{% endleveloffset %}