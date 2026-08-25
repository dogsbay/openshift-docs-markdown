---
title: Running pods in Linux user namespaces
---

# Running pods in Linux user namespaces {#nodes-pods-user-namespaces}

To enhance container security and prevent potential breakouts, you can isolate pod processes by using Linux user namespaces. By using this configuration, you can allow containers to run with administrative privileges inside the namespace, but remain unprivileged on the host system.

Linux user namespaces allow administrators to isolate the container user and group identifiers (UIDs and GIDs) so that a container can have a different set of permissions in the user namespace than on the host system where it is running. This allows containers to run processes with full privileges inside the user namespace, but the processes can be unprivileged for operations on the host machine.

By default, a container runs in the host user namespace. Running a container in the host user namespace can be useful when the container needs a feature that is available only in the host namespace. However, running pods in the host namespace introduces security concerns, such as the possibility of container breakouts, in which a process inside another container breaks out onto the host where the process can access or modify files on the host or in your containers.

Running containers in individual user namespaces can mitigate container breakouts and several other vulnerabilities that a compromised container can pose to other pods and the node itself.

When running a pod in an isolated user namespace, the UID/GID inside a pod container no longer matches the UID/GID on the host. In order for file system ownership to work correctly, the Linux kernel uses ID-mapped mounts, which translate user IDs between the container and the host at the virtual file system (VFS) layer.

> [!IMPORTANT]
> Not all file systems currently support ID-mapped mounts, such as Network File Systems (NFS) and other network/distributed file systems. Any pod that is using an NFS-backed persistent volume from a vendor that does not support ID-mapped mounts might experience access or permission issues when running in a user namespace. This behavior is not specific to OpenShift Container Platform. It applies to all Kubernetes distributions from Kubernetes v1.33 onward.

To check user namespaces support for storage options, see [CSI drivers supported by OpenShift Container Platform](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi#csi-drivers-supported_persistent-storage-csi).

**Additional resources**

- [Managing security context constraints](/openshift-docs-markdown/authentication/managing-security-context-constraints#configuring-internal-oauth)
- [OpenShift CLI administrator command reference](/openshift-docs-markdown/cli_reference/openshift_cli/administrator-cli-commands#cli-administrator-commands)
