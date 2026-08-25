---
title: OpenShift Container Platform storage overview
---

# OpenShift Container Platform storage overview {#storage-overview}

OpenShift Container Platform supports multiple types of storage, both for on-premise and cloud providers. You can manage container storage for persistent and non-persistent data in an OpenShift Container Platform cluster.

## Storage types {#storage-types}

OpenShift Container Platform storage is broadly classified into two categories, namely ephemeral storage and persistent storage.

### Ephemeral storage {#ephemeral-storage}

Pods and containers are ephemeral or transient in nature and designed for stateless applications. Ephemeral storage allows administrators and developers to better manage the local storage for some of their operations. For more information about ephemeral storage overview, types, and management, see [Understanding ephemeral storage](/openshift-docs-markdown/storage/understanding-ephemeral-storage#understanding-ephemeral-storage).

### Persistent storage {#persistent-storage}

Stateful applications deployed in containers require persistent storage. OpenShift Container Platform uses a pre-provisioned storage framework called persistent volumes (PV) to allow cluster administrators to provision persistent storage. The data inside these volumes can exist beyond the lifecycle of an individual pod. Developers can use persistent volume claims (PVCs) to request storage requirements. For more information about persistent storage overview, configuration, and lifecycle, see [Understanding persistent storage](/openshift-docs-markdown/storage/understanding-persistent-storage#understanding-persistent-storage).

## Container Storage Interface (CSI) {#container-storage-interface}

CSI is an API specification for the management of container storage across different container orchestration (CO) systems. You can manage the storage volumes within the container native environments, without having specific knowledge of the underlying storage infrastructure. With the CSI, storage works uniformly across different container orchestration systems, regardless of the storage vendors you are using. For more information about CSI, see [Using Container Storage Interface (CSI)](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi).

## Dynamic Provisioning {#dynamic-provisioning-overview}

Dynamic Provisioning allows you to create storage volumes on-demand, eliminating the need for cluster administrators to pre-provision storage. For more information about dynamic provisioning, see [Dynamic provisioning](/openshift-docs-markdown/storage/dynamic-provisioning#dynamic-provisioning).
