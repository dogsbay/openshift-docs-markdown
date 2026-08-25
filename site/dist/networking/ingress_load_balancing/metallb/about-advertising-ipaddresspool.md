---
title: About advertising for the IP address pools
---

# About advertising for the IP address pools {#about-advertise-for-ipaddress-pools}

You can configure MetalLB so that the IP address is advertised with layer 2 protocols, the BGP protocol, or both.

With layer 2, MetalLB provides a fault-tolerant external IP address. With BGP, MetalLB provides fault-tolerance for the external IP address and load balancing.

MetalLB supports advertising by using Layer 2 and BGP for the same set of IP addresses.

MetalLB provides the flexibility to assign address pools to specific BGP peers, effectively limiting advertising to a subset of nodes on the network. This allows for more complex configurations, such as facilitating the isolation of nodes or the segmentation of the network.

## Additional resources {#additional-resources_about-advertiseipaddress}

- [Configuring a community alias](/openshift-docs-markdown/networking/ingress_load_balancing/metallb/metallb-configure-community-alias#metallb-configure-community-alias)
- [Enable IP forwarding on specific interfaces](/openshift-docs-markdown/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#nw-nmstate-enable-per-interface-ip-forwarding_k8s-nmstate-updating-node-network-config)
