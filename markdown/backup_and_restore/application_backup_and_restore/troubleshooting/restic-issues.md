---
title: Restic issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Restic issues {id="restic-issues"}
{%- set toc = true %}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "restic-issues" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" %}

Troubleshoot common Restic issues during application backups and restores to maintain reliable data protection. Common Restic issues include NFS permission errors, backup custom resource re-creation failures, and restore failures caused by pod security admission policy changes.

{% leveloffset +1 %}{% include "./modules/restic-permission-error-for-nfs-data-volumes-with-root-squash-enabled.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restic-backup-cr-cannot-be-recreated-after-bucket-is-emptied.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-restic-restore-failing-psa-policy.md" %}{% endleveloffset %}