---
title: OADP Operator issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OADP Operator issues {id="oadp-operator-issues"}
{%- set toc = true %}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "oadp-operator-issues" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" %}

Resolve issues with the {{ oadp_first }} Operator, such as silent failures that prevent proper operation. This helps you restore normal Operator functionality and ensure successful backup and restore operations.

{% leveloffset +1 %}{% include "./modules/resolving-oadp-operator-fails-silently-issue.md" %}{% endleveloffset %}