---
title: Persistent storage using Cinder
---

# Persistent storage using Cinder {#persistent-storage-cinder}

OpenShift Container Platform supports OpenStack Cinder volumes. You can provision your OpenShift Container Platform cluster with persistent storage using OpenStack Cinder. Some familiarity with Kubernetes and OpenStack is assumed.

Persistent volumes are not bound to a single project or namespace; they can be shared across the OpenShift Container Platform cluster. Persistent volume claims are specific to a project or namespace and can be requested by users.

> [!IMPORTANT]
> OpenShift Container Platform 4.11 and later provides automatic migration for the Cinder in-tree volume plugin to its equivalent CSI driver.
>
> CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes. For more information about migration, see "CSI automatic migration".

**Additional resources**

- [CSI automatic migration](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)
- [OpenStack Cinder](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/8/html-single/architecture_guide/index#comp-cinder)
