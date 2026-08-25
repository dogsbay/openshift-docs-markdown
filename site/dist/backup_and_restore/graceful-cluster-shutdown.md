---
title: Shutting down the cluster gracefully
---

# Shutting down the cluster gracefully {#graceful-shutdown-cluster}

You can shut down your OpenShift Container Platform cluster for planned maintenance by cordoning nodes, draining workloads, and stopping nodes in order. Graceful shutdown preserves cluster state so you can restart the cluster when maintenance is complete.

## Additional resources {#additional-resources_restarting-restoring-cluster}

- [Backing up etcd](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
- [Restoring to an earlier cluster state](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)
- [Restarting the cluster gracefully](/openshift-docs-markdown/backup_and_restore/graceful-cluster-restart#graceful-restart-cluster)
