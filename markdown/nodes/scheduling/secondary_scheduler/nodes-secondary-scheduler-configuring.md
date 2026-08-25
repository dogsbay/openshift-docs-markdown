---
title: Scheduling pods using a secondary scheduler
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Scheduling pods using a secondary scheduler {id="secondary-scheduler-configuring"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "secondary-scheduler-configuring" %}

You can run a custom secondary scheduler in {{ product_title }} by installing the {{ secondary_scheduler_operator }}, deploying the secondary scheduler, and setting the secondary scheduler in the pod definition.

{% leveloffset +1 %}{% include "./modules/nodes-secondary-scheduler-install-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-secondary-scheduler-configuring-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-secondary-scheduler-pod-console.md" %}{% endleveloffset %}