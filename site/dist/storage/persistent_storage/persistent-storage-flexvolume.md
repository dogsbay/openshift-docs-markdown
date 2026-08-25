---
title: Persistent storage using FlexVolume
---

# Persistent storage using FlexVolume {#persistent-storage-using-flexvolume}

To use storage from a back-end that does not have a built-in plugin, you can extend OpenShift Container Platform through FlexVolume drivers and provide persistent storage to applications.

FlexVolume is an out-of-tree plugin that uses an executable model to interface with drivers.

> [!IMPORTANT]
> FlexVolume is a deprecated feature. Deprecated functionality is still included in OpenShift Container Platform and continues to be supported; however, it will be removed in a future release of this product and is not recommended for new deployments.
>
> Out-of-tree Container Storage Interface (CSI) driver is the recommended way to write volume drivers in OpenShift Container Platform. Maintainers of FlexVolume drivers should implement a CSI driver and move users of FlexVolume to CSI. Users of FlexVolume should move their workloads to CSI driver.
>
> For the most recent list of major functionality that has been deprecated or removed within OpenShift Container Platform, refer to the *Deprecated and removed features* section of the OpenShift Container Platform release notes.

Pods interact with FlexVolume drivers through the `flexvolume` in-tree plugin.

**Additional resources**

- [Expanding persistent volumes](/storage/expanding-persistent-volumes#expanding-persistent-volumes)
