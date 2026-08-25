---
title: "Backing up and restoring a hosted cluster on {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up and restoring a hosted cluster on {{ VirtProductName }} {id="hcp-backup-restore-virt"}
{%- set context = "hcp-backup-restore-virt" %}

You can back up and restore a hosted cluster on {{ VirtProductName }} to fix failures.

{% leveloffset +1 %}{% include "./modules/backup-hosted-cluster-virt.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restore-hosted-cluster-virt.md" %}{% endleveloffset %}