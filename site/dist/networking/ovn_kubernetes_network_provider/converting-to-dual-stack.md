---
title: Converting to IPv4/IPv6 dual-stack networking
---

# Converting to IPv4/IPv6 dual-stack networking {#converting-to-dual-stack}

To enable IPv4 and IPv6 on your cluster network in OpenShift Container Platform, you can convert a single-stack cluster to dual-stack networking. After conversion, new and existing pods can use both address families when you re-create workloads as needed.

> [!IMPORTANT]
> When using dual-stack networking where IPv6 is required, you cannot use IPv4-mapped IPv6 addresses, such as `::FFFF:198.51.100.1`.

**Additional resources**

- [OVN-Kubernetes purpose](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#nw-ovn-kubernetes-purpose_about-ovn-kubernetes)
