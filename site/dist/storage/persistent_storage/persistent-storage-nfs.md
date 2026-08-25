---
title: Persistent storage using NFS
---

# Persistent storage using NFS {#persistent-storage-using-nfs}

You can provision OpenShift Container Platform clusters with persistent storage using NFS.

Persistent volumes (PVs) and persistent volume claims (PVCs) provide a convenient method for sharing a volume across a project. While the NFS-specific information contained in a PV definition could also be defined directly in a pod definition, doing so does not create the volume as a distinct cluster resource, making the volume more susceptible to conflicts.

> [!NOTE]
> The in-tree NFS provisioner does not support user namespaces.

**Additional resources**

- [Mounting NFS shares](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_file_systems/mounting-nfs-shares_managing-file-systems)
