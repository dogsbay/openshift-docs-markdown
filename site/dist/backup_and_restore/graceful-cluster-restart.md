---
title: Restarting the cluster gracefully
---

# Restarting the cluster gracefully {#graceful-restart-cluster}

You can restart your OpenShift Container Platform cluster after a graceful shutdown by powering on nodes and verifying cluster health. The cluster returns to normal operations when nodes and Operators are healthy.

Even though the cluster is expected to be functional after the restart, the cluster might not recover due to unexpected conditions:

- etcd data corruption during shutdown
- Node failure due to hardware
- Network connectivity issues

If your cluster fails to recover, follow the steps in "Restoring to an earlier cluster state".

**Additional resources**

- [Shutting down the cluster gracefully](/openshift-docs-markdown/backup_and_restore/graceful-cluster-shutdown#graceful-shutdown-cluster)
- [Restoring to an earlier cluster state](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)
