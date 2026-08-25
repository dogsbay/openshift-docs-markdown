---
title: Restoring applications
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Restoring applications {id="restoring-applications"}
{%- set context = "restoring-applications" %}

Restore application backups by previewing resources before running the restore, creating a `Restore` custom resource (CR), and configuring restore hooks to run commands in restored pods. This helps you to recover your application data and configuration while controlling the restore process. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-review-backup-restore.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-creating-restore-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-creating-restore-hooks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./snippets/oadp-image-stream-tag-trigger.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Triggering updates on image stream changes](/openshift_images/triggering-updates-on-imagestream-changes#triggering-updates-on-imagestream-changes)