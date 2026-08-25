---
title: "{{ oadp_short }} Self-Service namespace admin use cases"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ oadp_short }} Self-Service namespace admin use cases {id="oadp-self-service-namespace-admin-use-cases"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-self-service-namespace-admin-use-cases" %}

Use {{ oadp_short }} Self-Service as a namespace administrator to create backup storage locations, perform backup and restore operations, and review operation logs for your authorized namespaces. This helps you to manage data protection independently without cluster admin access.

{% leveloffset +1 %}{% include "./modules/oadp-self-service-creating-nabsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-creating-nab.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-deleting-nab.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-creating-nar.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-about-nadr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-nab-nar-logs.md" %}{% endleveloffset %}