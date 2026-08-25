---
title: "{{ oadp_first }} restore use case"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ oadp_first }} restore use case {id="oadp-use-cases-restore"}
{%- set context = "oadp-use-cases-restore" %}

Following is a use case for using {{ oadp_short }} to restore a backup to a different namespace. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-usecase-restore.md" %}{% endleveloffset %}