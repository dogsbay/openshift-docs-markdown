---
title: "{{ oadp_first }} restore use case"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ oadp_first }} restore use case {id="oadp-use-cases-restore"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-use-cases-restore" %}

Following is a use case for using {{ oadp_short }} to restore a backup to a different namespace.

{% leveloffset +1 %}{% include "./modules/oadp-usecase-restore.md" %}{% endleveloffset %}