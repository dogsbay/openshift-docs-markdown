---
title: Overview of etcd
---

# Overview of etcd {#etcd-overview}

etcd is the primary Kubernetes data store on OpenShift Container Platform. Knowing how disk, network, and consensus latency affect etcd helps you keep the control plane reliable.

etcd (pronounced et-see-dee) is a consistent, distributed key-value store that stores small amounts of data across a cluster of machines that can fit entirely in memory. As the core component of many projects, etcd is also the primary data store for Kubernetes, which is the standard system for container orchestration.

By using etcd, you can benefit in several ways:

- Support consistent uptime for your cloud-native applications, and keep them working even if individual servers fail
- Store and replicate all cluster states for Kubernetes
- Distribute configuration data to offer redundancy and resiliency for the configuration of nodes

> [!IMPORTANT]
> The default etcd configuration optimizes container orchestration. Use it as designed for the best results.

**Additional resources**

- [Recommended etcd practices](/etcd/etcd-practices#etcd-practices)
