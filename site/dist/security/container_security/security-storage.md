---
title: Securing attached storage
---

# Securing attached storage {#security-storage}

You should understand how OpenShift Container Platform secures attached storage to protect persistent data in containerized workloads. OpenShift Container Platform uses Security-Enhanced Linux (SELinux) capabilities, group ID (GID) annotations, and Container Storage Interface (CSI)-compliant storage providers to isolate storage access and prevent unauthorized data exposure.

**Additional resources**

- [Understanding persistent storage](/openshift-docs-markdown/storage/understanding-persistent-storage#understanding-persistent-storage)
- [Configuring CSI volumes](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
- [Dynamic provisioning](/openshift-docs-markdown/storage/dynamic-provisioning#dynamic-provisioning)
- [Persistent storage using NFS](/openshift-docs-markdown/storage/persistent_storage/persistent-storage-nfs#persistent-storage-using-nfs)
- [Persistent storage using AWS Elastic Block Store](/openshift-docs-markdown/storage/persistent_storage/persistent-storage-aws#persistent-storage-aws)
- [Persistent storage using GCE Persistent Disk](/openshift-docs-markdown/storage/persistent_storage/persistent-storage-gce#persistent-storage-using-gce)
