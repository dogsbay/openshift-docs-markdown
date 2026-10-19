{%- set _mod_docs_content_type = "CONCEPT" %}
# Delegate backup and restore to namespace administrators {id="oadp-delegate-backup-restore-namespace-admins-intro_{{ context }}"}

Configure {{ oadp_short }} self-service so that namespace administrators can perform backup and restore operations without the `cluster-admin` role. With self-service enabled, users with namespace-level access can create and manage backups and restores within their authorized namespaces.