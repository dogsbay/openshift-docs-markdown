{%- set _mod_docs_content_type = "CONCEPT" %}
# Encrypt etcd data {id="microshift-encrypt-etcd-data_{{ context }}"}

Kubernetes objects are stored in an etcd database and might contain sensitive data. The etcd data is not encrypted by default. You can encrypt the disk that contains the etcd database by using the Linux Unified Key Setup-on-disk-format (LUKS) management tool for block device encryption.