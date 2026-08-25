---
title: "{{ descheduler_operator }} release notes"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ descheduler_operator }} release notes {id="nodes-descheduler-release-notes"}
{%- set context = "nodes-descheduler-release-notes" %}

Review the {{ descheduler_operator }} release notes to track its development and learn what is new and changed with each release. {._abstract}

The {{ descheduler_operator }} allows you to evict pods so that they can be rescheduled on more appropriate nodes.

For more information, see [About the descheduler](/nodes/scheduling/descheduler/index#nodes-descheduler-about_nodes-descheduler-about).

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-rn-5.4.2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-rn-5.4.1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-descheduler-rn-5.4.0.md" %}{% endleveloffset %}