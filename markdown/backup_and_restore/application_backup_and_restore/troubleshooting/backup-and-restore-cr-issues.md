---
title: Backup and Restore CR issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Backup and Restore CR issues {id="backup-and-restore-cr-issues"}
{%- set toc = true %}

{%- set context = "backup-and-restore-cr-issues" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" %}

Resolve common issues with `Backup` and `Restore` custom resources (CRs), such as volume retrieval failures, and backups remaining in progress or partially failed states. This helps you ensure successful backup and restore operations in {{ oadp_short }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/troubleshooting-backup-cr-cannot-retrieve-volume-issue.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-backup-cr-status-remains-in-progress-issue.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-backup-cr-status-remains-in-partiallyfailed-issue.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-troubleshooting-pvc-binding-delay.md" %}{% endleveloffset %}