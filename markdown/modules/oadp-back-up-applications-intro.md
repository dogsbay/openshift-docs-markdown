{%- set _mod_docs_content_type = "CONCEPT" %}
# Back up applications {id="oadp-back-up-applications-intro_{{ context }}"}

Use the OpenShift API for Data Protection (OADP) to back up applications, persistent volumes, and application data on your {{ product_title }} cluster. OADP supports CSI snapshots, Kopia-based file-system backups, and provider-specific snapshot methods.