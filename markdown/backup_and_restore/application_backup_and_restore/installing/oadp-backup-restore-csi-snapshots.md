---
title: Backing up and restoring CSI snapshots data movement
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Backing up and restoring CSI snapshots data movement {id="oadp-backup-restore-csi-snapshots"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-backup-restore-csi-snapshots" %}

You can back up and restore persistent volumes by using the {{ oadp_short }} 1.3 Data Mover. 

{% leveloffset +1 %}{% include "./modules/oadp-1-3-backing-csi-snapshots.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-1-3-restoring-csi-snapshots.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-deletion-policy-1-3.md" %}{% endleveloffset %}