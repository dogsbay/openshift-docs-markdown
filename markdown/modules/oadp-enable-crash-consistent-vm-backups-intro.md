{%- set _mod_docs_content_type = "CONCEPT" %}
# Enable crash-consistent VM backups {id="oadp-enable-crash-consistent-vm-backups-intro_{{ context }}"}

Use {{ oadp_short }} Virtual Machine Data Protection (VMDP) to enable crash-consistent backups of virtual machines by quiescing guest file systems and flushing application data before the snapshot is taken.