---
title: Backing up and restoring etcd data
---

# Backing up and restoring etcd data {#backup-etcd}

Back up etcd data regularly and store it in a secure location so you can restore your cluster to a previous state, using a snapshot from the same z-stream release.

As the key-value store for OpenShift Container Platform, etcd persists the state of all resource objects.

Back up the etcd data for your cluster regularly and store it in a secure location, ideally outside the OpenShift Container Platform environment. Do not take an etcd backup before the first certificate rotation completes, which occurs 24 hours after installation, otherwise the backup will contain expired certificates. It is also recommended to take etcd backups during non-peak usage hours because the etcd snapshot has a high I/O cost.

Be sure to take an etcd backup before you update your cluster. Taking a backup before you update is important because when you restore your cluster, you must use an etcd backup that was taken from the same z-stream release. For example, an OpenShift Container Platform 4.17.5 cluster must use an etcd backup that was taken from 4.17.5.

> [!IMPORTANT]
> Back up your cluster’s etcd data by performing a single invocation of the backup script on a control plane host. Do not take a backup for each control plane host.

After you have an etcd backup, you can restore to a previous cluster state.

**Additional resources**

- [Restoring to an earlier cluster state](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)
- [Recovering an unhealthy etcd cluster for {{ hcp }}](/openshift-docs-markdown/hosted_control_planes/hcp_high_availability/hcp-recovering-etcd-cluster#hcp-recovering-etcd-cluster)
