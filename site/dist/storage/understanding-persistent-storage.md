---
title: Understanding persistent storage
---

# Understanding persistent storage {#understanding-persistent-storage}

Persistent storage decouples data from pod lifecycles, allowing stateful applications to retain data across restarts and failures. Administrators provision persistent volumes (PVs), and developers create persistent volume claims (PVCs) to request storage without infrastructure knowledge.

**Additional resources**

- [When using Persistent Volumes with high file counts in OpenShift, why do pods fail to start or take an excessive amount of time to achieve "Ready" state? (Red Hat Knowledgebase)](https://access.redhat.com/solutions/6221251)

**Additional resources**

- [Block volume support](/openshift-docs-markdown/storage/understanding-persistent-storage#block-volume-support_understanding-persistent-storage)
- [GCP hyperdisk-balanced disk additional limitations](https://cloud.google.com/compute/docs/disks/attach-disks)
- [VMware vSphere CSI Driver Operator](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-vsphere)

**Additional resources**

- [OpenShift reports SELinux-related conflicts when creating Pods (Red Hat Knowledgebase)](https://access.redhat.com/solutions/7131398)
- [Opting out of the SELinux mount option default](/openshift-docs-markdown/storage/understanding-persistent-storage#using_selinuxChangePolicy_pod-opt-out_understanding-persistent-storage)

**Additional resources**

- [OpenShift reports SELinux-related conflicts when creating Pods (Red Hat Knowledgebase)](https://access.redhat.com/solutions/7131398)
- [Opting out of the SELinux mount option default](/openshift-docs-markdown/storage/understanding-persistent-storage#using_selinuxChangePolicy_pod-opt-out_understanding-persistent-storage)

## Additional resources {#additional-resources_understanding-persistent-storage}

- [Enabling features using feature gates](/openshift-docs-markdown/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
