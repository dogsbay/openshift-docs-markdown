{%- set _mod_docs_content_type = "CONCEPT" %}
# Block storage {id="security-network-storage-block_{{ context }}"}

For block storage such as AWS Elastic Block Store (EBS), GCE Persistent Disks, and iSCSI, {{ product_title }} uses SELinux to secure mounted volumes for non-privileged pods, making each volume visible only to its associated container.