---
title: Deploying on OpenStack with rootVolume and etcd on local disk
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Deploying on OpenStack with rootVolume and etcd on local disk {id="deploying-openstack-on-local-disk"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "deploying-openstack-on-local-disk" %}

After installation, you can resolve and prevent performance issues of your {{ rh_openstack_first }} installation by moving etcd from a root volume (provided by {{ rh_openstack }} Cinder) to a dedicated ephemeral local disk.

{% leveloffset +1 %}{% include "./modules/installation-osp-local-disk-deployment.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_deploying-openstack-on-local-disk"}

*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Overview of backup and restore options](/backup_and_restore/index#backup-restore-operations-overview)