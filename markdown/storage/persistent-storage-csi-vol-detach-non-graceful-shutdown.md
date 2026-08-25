---
title: Detach volumes after non-graceful node shutdown
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Detach volumes after non-graceful node shutdown {id="ephemeral-storage-csi-vol-detach-non-graceful-shutdown"}
{%- set toc = true -%}
{%- set toc_title = true -%}
{%- set context = "ephemeral-storage-csi-vol-detach-non-graceful-shutdown" %}
{% include "./_attributes/common-attributes.md" %}

[role="_abstract"] 
Automatic volume detachment after non-graceful node shutdowns prevents volumes from remaining attached to failed nodes, enabling faster workload recovery by allowing pods to reschedule and reattach volumes on healthy nodes without manual intervention.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vol-detach-non-graceful-shutdown-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vol-detach-non-graceful-shutdown-procedure.md" %}{% endleveloffset %}