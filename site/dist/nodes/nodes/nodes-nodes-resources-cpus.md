---
title: Allocating specific CPUs for nodes in a cluster
---

# Allocating specific CPUs for nodes in a cluster {#nodes-nodes-resources-cpus}

When using the static CPU Manager policy, you can explicitly define a list of CPUs that are reserved for critical system processes on specific nodes. Reserving CPUs for critical system processes can help ensure cluster stability.

For example, on a system with 24 CPUs, you could reserve CPUs numbered 0 - 3 for the control plane allowing the compute nodes to use CPUs 4 - 23.

**Additional resources**

- [Setting up CPU Manager](/scalability_and_performance/using-cpu-manager#setting_up_cpu_manager_using-cpu-manager-and-topology-manager)
- [Allocating resources for nodes in an OpenShift Container Platform cluster](/nodes/nodes/nodes-nodes-resources-configuring#nodes-nodes-resources-configuring-about_nodes-nodes-resources-configuring)
