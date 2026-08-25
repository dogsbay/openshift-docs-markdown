---
title: Descheduler overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Descheduler overview {id="nodes-descheduler-about"}
{%- set context = "nodes-descheduler-about" %}

The descheduler evicts running pods so that the default scheduler can place them on more suitable nodes. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-profiles.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Default scheduling](/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)