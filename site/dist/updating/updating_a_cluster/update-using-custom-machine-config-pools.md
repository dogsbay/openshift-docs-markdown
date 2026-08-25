---
title: Performing a canary rollout update
---

# Performing a canary rollout update {#update-using-custom-machine-config-pools}

For a more controlled rollout of worker node updates, you can use a *canary update*. A canary update is an update strategy where worker node updates are performed in discrete, sequential stages instead of updating all worker nodes at the same time.

This strategy can be useful in the following scenarios:

- You want a more controlled rollout of worker node updates to ensure that mission-critical applications stay available during the entire update, even if the update process causes your applications to fail.
- You want to update a small subset of worker nodes, evaluate cluster and workload health over a period of time, and then update the remaining nodes.
- You want to fit worker node updates, which often require a host reboot, into smaller defined maintenance windows when it is not possible to take a large maintenance window to update the entire cluster at one time.

In these scenarios, you can create multiple custom machine config pools (MCPs) to prevent certain worker nodes from updating when you update the cluster. After the rest of the cluster is updated, you can update those worker nodes in batches at appropriate times.

**Additional resources**

- [Updating a cluster using the web console](/updating/updating_a_cluster/updating-cluster-web-console#update-upgrading-web_updating-cluster-web-console)
- [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#update-upgrading-cli_updating-cluster-cli)
