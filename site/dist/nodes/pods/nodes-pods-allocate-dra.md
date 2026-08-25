---
title: Allocating GPUs to pods by using DRA
---

# Allocating GPUs to pods by using DRA {#nodes-pods-allocate-dra}

You can use {{ attribute_based_full }} to enable fine-tuned control over graphics processing unit (GPU) resource allocation in OpenShift Container Platform, allowing pods to request GPUs based on specific device attributes, including product name, GPU memory capacity, compute capability, vendor name and driver version. Having access to these attributes, which are exposed by a third-party Dynamic Resource Allocation (DRA) driver, allows OpenShift Container Platform to schedule a pod on a node that has the specific devices that the workload needs.

This workflow provides significant improvement in the device allocation workflow when compared to device plugins, which require per-container device requests, do not support device sharing, and do not support expression-based device filtering.

## Additional resources {#additional-resources_nodes-pods-allocate-dra}

- [Enabling features using feature gates](/openshift-docs-markdown/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
