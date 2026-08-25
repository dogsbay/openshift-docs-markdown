---
title: Expanding single-node OpenShift clusters with GitOps ZTP
---

# Expanding single-node OpenShift clusters with GitOps ZTP {#ztp-sno-additional-worker-node}

You can expand {{ sno }} clusters with {{ ztp_first }}. When you add a worker node to {{ sno }} clusters, the original {{ sno }} cluster retains the control plane node role. Adding a worker node does not require any downtime for the existing {{ sno }} cluster.

> [!NOTE]
> You can only expand a {{ sno }} cluster with one additional worker node. It is not recommended to expand a {{ sno }} cluster with more than one worker node.

If you require workload partitioning on the worker node, you must deploy and remediate the managed cluster policies on the hub cluster before installing the node. This way, the workload partitioning `MachineConfig` objects are rendered and associated with the `worker` machine config pool before the {{ ztp }} workflow applies the `MachineConfig` ignition file to the worker node.

It is recommended that you first remediate the policies, and then install the worker node. If you create the workload partitioning manifests after installing the worker node, you must drain the node manually and delete all the pods managed by daemon sets. When the managing daemon sets create the new pods, the new pods undergo the workload partitioning process.

**Additional resources**

- [Reference configuration for deploying vDUs on {{ sno }}](/openshift-docs-markdown/edge_computing/ztp-reference-cluster-configuration-for-vdu#sno-configure-for-vdu)
- [Adding worker nodes to {{ sno }} clusters](/openshift-docs-markdown/nodes/nodes/nodes-sno-worker-nodes#nodes-sno-worker-nodes)
- [Removing managed cluster nodes by using the command line interface](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.10/html/clusters/cluster_mce_overview#auto-remove-host-steps-cli)

{% include "./modules/ztp-worker-node-node-selector-compatibility.md" %}
