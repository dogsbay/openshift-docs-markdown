---
title: Integrating Dynamic Resource Allocation
---

# Integrating Dynamic Resource Allocation {#kueue-dra-integrating-dynamic-resource-allocation}

You can configure {{ kueue_name }} to manage quota for workloads that use Dynamic Resource Allocation (DRA) to request GPUs. When DRA quota management is configured, {{ kueue_name }} counts DRA device requests toward quota in the same way that it counts traditional resources such as CPU and memory.

If DRA device quota is not configured, {{ kueue_name }} does not account for GPU requests when admitting workloads, which can result in teams exceeding their GPU allocation.

## Additional resources {#additional-resources_kueue-dra-integrating-dynamic-resource-allocation}

- [Allocating GPUs to pods by using DRA](/openshift-docs-markdown/nodes/pods/nodes-pods-allocate-dra#nodes-pods-allocate-dra)
- [Configuring quotas](/openshift-docs-markdown/ai_workloads/kueue/configuring-quotas#configuring-quotas)
- [Creating a Kueue custom resource](/openshift-docs-markdown/ai_workloads/kueue/install-kueue#create-kueue-cr_install-kueue)
- [Enabling features using feature gates](/openshift-docs-markdown/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
