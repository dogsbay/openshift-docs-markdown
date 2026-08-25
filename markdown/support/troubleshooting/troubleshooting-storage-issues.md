---
title: Troubleshooting storage issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting storage issues {id="troubleshooting-storage-issues"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "troubleshooting-storage-issues" %}

A multi-attach storage error occurs when the mounting volume on a new node is not possible because the failed node cannot unmount the attached volume. A cluster administrator can resolve multi-attach storage issues by enabling multiple attachments using RWX volumes or recovering/deleting the failed node when using an RWO volume.

{% leveloffset +1 %}{% include "./modules/storage-multi-attach-error.md" %}{% endleveloffset %}