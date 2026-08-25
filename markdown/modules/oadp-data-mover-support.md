{%- set _mod_docs_content_type = "CONCEPT" %}
# Data Mover support {id="oadp-data-mover-support_{{ context }}"}

Review Data Mover support and compatibility across {{ oadp_short }} versions to understand which backups can be restored. This helps you plan version upgrades and backup strategies. {._abstract}

The {{ oadp_short }} built-in Data Mover, which was introduced in {{ oadp_short }} 1.3 as a Technology Preview, is now fully supported for both containerized and virtual machine workloads.


Supported

:   The Data Mover backups taken with {{ oadp_short }} 1.3 can be restored using {{ oadp_short }} 1.3 and later.


Not supported

:   Backups taken with {{ oadp_short }} 1.1 or {{ oadp_short }} 1.2 using the Data Mover feature cannot be restored using {{ oadp_short }} 1.3 and later.

{{ oadp_short }} 1.1 and {{ oadp_short }} 1.2 are no longer supported. The DataMover feature in {{ oadp_short }} 1.1 or {{ oadp_short }} 1.2 was a Technology Preview and was never supported. DataMover backups taken with {{ oadp_short }} 1.1 or {{ oadp_short }} 1.2 cannot be restored on later versions of {{ oadp_short }}.