---
title: Updating hardware on nodes running on vSphere
---

# Updating hardware on nodes running on vSphere {#updating-hardware-on-nodes-running-on-vsphere}

You must ensure that your nodes running in vSphere are running on the hardware version supported by OpenShift Container Platform. Currently, hardware version 15 or later is supported for vSphere virtual machines in a cluster. You can update your virtual hardware immediately or schedule an update in vCenter.

> [!IMPORTANT]
> - Version 4.22 of OpenShift Container Platform requires VMware virtual hardware version 15 or later.
> - Before upgrading OpenShift 4.12 to OpenShift 4.13, you must update vSphere to **v8.0 Update 1 or later**; otherwise, the OpenShift 4.12 cluster is marked **un-upgradeable**.

> [!WARNING]
> Updating custom API certificates triggers the Machine Config Operator (MCO) to initiate a rolling reboot of the control plane nodes. These nodes must be updated serially. Ensure each node returns to a `Ready` state and the `etcd` static pods are healthy before the next node in the sequence begins its update. Failure to do so might result in a loss of etcd quorum and cluster-wide downtime.

**Additional resources**

- [Evacuating pods on nodes](/openshift-docs-markdown/nodes/nodes/nodes-nodes-working#nodes-nodes-working-evacuating_nodes-nodes-working)
