{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploy OpenStack with etcd on local disk {id="deploy-openstack-with-etcd-on-local-disk-intro_{{ context }}"}

After installation, you can resolve and prevent performance issues of your {{ rh_openstack_first }} installation by moving etcd from a root volume (provided by {{ rh_openstack }} Cinder) to a dedicated ephemeral local disk.