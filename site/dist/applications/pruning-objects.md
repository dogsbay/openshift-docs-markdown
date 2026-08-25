---
title: Pruning objects to reclaim resources
---

# Pruning objects to reclaim resources {#pruning-objects}

Reclaim cluster storage and optimize API server performance by pruning stale resources. You can run manual CLI commands or configure automated cron jobs to clean up obsolete deployment, build, image, and group records.

Over time, API objects created in OpenShift Container Platform can accumulate in the cluster’s etcd data store through normal user operations, such as when building and deploying applications.

Cluster administrators can periodically prune older versions of objects from the cluster that are no longer required. For example, by pruning images you can delete older images and layers that are no longer in use, but are still taking up disk space.

**Additional resources**

- [Performing advanced builds -> Pruning builds](/cicd/builds/advanced-build-operations#builds-build-pruning_advanced-build-operations)

**Additional resources**

- [Accessing the registry](/registry/accessing-the-registry#accessing-the-registry)
- [Exposing the registry](/registry/securing-exposing-registry#securing-exposing-registry)
- [Image Registry Operator in OpenShift Container Platform](/registry/configuring-registry-operator#configuring-registry-operator)

**Additional resources**

- [Running tasks in pods using jobs](/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)
- [Resource quotas across multiple projects](/applications/quotas/quotas-setting-across-multiple-projects#setting-quotas-across-multiple-projects)
- [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
