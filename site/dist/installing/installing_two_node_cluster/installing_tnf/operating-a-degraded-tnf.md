---
title: Operating a degraded two-node OpenShift cluster with fencing
---

# Operating a degraded two-node OpenShift cluster with fencing {#operating-a-degraded-tnf}

A two-node OpenShift cluster with fencing (TNF) enters a `degraded` state when one of its two control plane nodes becomes unavailable. The remaining node continues to host the active control plane; however, the cluster loses its high-availability (HA) redundancy until the failed node recovers.

Degraded operation is an intentional design state rather than a system failure. In this state, the cluster remains functional and core services continue to operate. Only specific capabilities that strictly require two-node redundancy are temporarily unavailable.

> [!IMPORTANT]
> A degraded cluster has zero fault tolerance. If the surviving node also fails, the cluster fails. Restore the second node as soon as possible. Degraded operation is a temporary recovery window, not a long-term steady state.
