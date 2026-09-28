{%- set _mod_docs_content_type = "CONCEPT" %}
# Disable etcd encryption {id="disable-etcd-encryption-con_{{ context }}"}

If you no longer require encryption at rest for the cluster database, or you need to rule it out while troubleshooting, you can disable etcd encryption. The API server then rewrites the affected resources and stores them unencrypted.