---
title: Prepare worker node pools before a cluster update with {{ cgu_operator }}
---

# Prepare worker node pools before a cluster update with {{ cgu_operator }} {#core-cluster-upgrades-worker-batching}

You can configure worker node batching to control how many worker nodes update simultaneously and how workloads tolerate disruption during cluster updates by using `MachineConfigPool` and `PodDisruptionBudget` resources.

## Additional resources {#additional-resources_core-cluster-upgrades-worker-batching}

- [Configuring application pods before updating your OpenShift Container Platform cluster](/openshift-docs-markdown/post_installation_configuration/day_2_core_cnf_clusters/updating/update-cnf-update-prep#update-cnf-update-prep)
- [Kubernetes PodDisruptionBudget documentation](https://kubernetes.io/docs/tasks/run-application/configure-pdb/)
- [Pod Topology Spread Constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)
