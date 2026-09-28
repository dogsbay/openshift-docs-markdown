{%- set _mod_docs_content_type = "CONCEPT" %}
# Encrypt sensitive data at rest {id="encrypt-sensitive-data-at-rest-con_{{ context }}"}

You can encrypt the etcd database so that secrets, config maps, and OAuth tokens are unreadable on disk, and encrypt the node file systems so that container runtime data, logs, and caches are protected as well. Together these controls keep cluster data unreadable if the underlying disks or snapshots are accessed without authorization.