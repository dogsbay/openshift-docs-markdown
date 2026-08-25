---
title: Admission fair sharing
---

# Admission fair sharing {#admission-fair-sharing}

Use admission fair sharing to fairly distribute workloads across local Queues that share a single `ClusterQueue`.

You can balance workload admission by prioritizing workloads from local Queues that have used fewer resources historically. With admission fair sharing, you can track usage over time with a configurable decay function and apply admission penalties when workloads are admitted.

When multiple tenants share a single `ClusterQueue`, some tenants risk resource starvation. Admission fair sharing adresses this issue by meeting the following requirements:

Enforce multi-tenant fairness (business critical)
:   Ensure fair distribution of cluster resources across all tenants based on their usage history.

Improve service predictability
:   Guarantee each tenant gets a consistent share of resources, reducing latency spikes and preventing starvation.

Enable scalable governance
:   Complement static quotas with dynamic, usage-based admission ordering that adapts as tenant demand changes.
