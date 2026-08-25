{%- set _mod_docs_content_type = "CONCEPT" %}
# Data backup failure {id="microshift-backup-data-failed_{{ context }}"}

Data backups are automatic on `rpm-ostree` systems. If you are not using an `rpm-ostree` system and attempted to create a manual backup, certain conditions can cause the backup to fail. {._abstract}


{{ microshift_short }} was stopped too soon after the system started
:   Wait until the system completes health checks and background processes before stopping {{ microshift_short }}.


{{ microshift_short }} stopped because of an error
:   Verify that {{ microshift_short }} is healthy and in a running state before you create a backup.


Insufficient storage space
:   Verify that sufficient storage is available for {{ microshift_short }} data before you create a backup.


Insufficient user permissions
:   Verify that you have the correct user permissions and configurations required to create a backup.