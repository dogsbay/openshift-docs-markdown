---
title: Control plane architecture
---

# Control plane architecture {#control-plane}

You can use a *control plane*, which is composed of control plane machines, to manage the OpenShift Container Platform cluster. The control plane machines manage workloads on the compute machines, which are also known as worker machines.

The cluster manages all upgrades to the machines by the actions of the Cluster Version Operator (CVO), the Machine Config Operator,

and a set of individual Operators.

**Additional resources**

- [Understanding configuration drift detection](/machine_configuration/index#machine-config-drift-detection_machine-config-overview)

**Additional resources**

- [Cluster Operators reference](/operators/operator-reference#operator-reference)

**Additional resources**

- [Operator Lifecycle Manager (OLM) concepts and resources](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)
- [Understanding the software catalog](/operators/understanding/olm-understanding-software-catalog#olm-understanding-software-catalog)

 **Additional resources**

- [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
- [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backing-up-etcd)
