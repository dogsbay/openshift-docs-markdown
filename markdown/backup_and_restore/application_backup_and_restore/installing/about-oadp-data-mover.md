---
title: "About the {{ oadp_short }} Data Mover"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About the {{ oadp_short }} Data Mover {id="about-oadp-data-mover"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "about-oadp-data-mover" %}

Use the {{ oadp_first }} built-in Data Mover to move Container Storage Interface (CSI) volume snapshots to remote object storage and restore stateful applications after cluster failures. This provides disaster recovery capabilities for both containerized and virtual machine workloads.

The Data Mover uses Kopia as the uploader mechanism to read the snapshot data and write to the unified repository. 

{{ oadp_short }} supports CSI snapshots on the following:

*   {{ odf_full }}
*   Any other cloud storage provider with the Container Storage Interface (CSI) driver that supports the Kubernetes Volume Snapshot API

{% leveloffset +1 %}{% include "./modules/oadp-data-mover-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-enabling-built-in-data-mover.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-data-mover-crds.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-incremental-backup-support.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [About Kopia](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-about-kopia#oadp-about-kopia)