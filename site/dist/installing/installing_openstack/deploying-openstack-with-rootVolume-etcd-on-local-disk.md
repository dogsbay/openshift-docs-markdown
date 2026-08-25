---
title: Deploying on OpenStack with rootVolume and etcd on local disk
---

# Deploying on OpenStack with rootVolume and etcd on local disk {#deploying-openstack-on-local-disk}

After installation, you can resolve and prevent performance issues of your {{ rh_openstack_first }} installation by moving etcd from a root volume (provided by {{ rh_openstack }} Cinder) to a dedicated ephemeral local disk.

## Additional resources {#additional-resources_deploying-openstack-on-local-disk}

- [Recommended etcd practices](/openshift-docs-markdown/etcd/etcd-practices#recommended-etcd-practices)
- [Overview of backup and restore options](/openshift-docs-markdown/backup_and_restore/index#backup-restore-operations-overview)
