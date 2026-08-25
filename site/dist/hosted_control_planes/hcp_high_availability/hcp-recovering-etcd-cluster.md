---
title: Recovering an unhealthy etcd cluster for {{ hcp }}
---

# Recovering an unhealthy etcd cluster for {{ hcp }} {#hcp-recovering-etcd-cluster}

In a highly available control plane, three etcd pods run as a part of a stateful set in an etcd cluster. To recover an etcd cluster, identify unhealthy etcd pods by checking the etcd cluster health.
