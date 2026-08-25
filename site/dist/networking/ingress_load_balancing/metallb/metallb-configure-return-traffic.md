---
title: Managing symmetric routing with MetalLB
---

# Managing symmetric routing with MetalLB {#metallb-configure-return-traffic}

As a cluster administrator, you can effectively manage traffic for pods behind a MetalLB load-balancer service with multiple host interfaces by implementing features from MetalLB, NMState, and OVN-Kubernetes. By combining these features in this context, you can provide symmetric routing, traffic segregation, and support clients on different networks with overlapping CIDR addresses.

To achieve this functionality, learn how to implement virtual routing and forwarding (VRF) instances with MetalLB, and configure egress services.

**Additional resources**

- [About virtual routing and forwarding](/openshift-docs-markdown/networking/multiple_networks/about-virtual-routing-and-forwarding#cnf-about-virtual-routing-and-forwarding_about-virtual-routing-and-forwarding)
- [Exposing a service through a network VRF](/openshift-docs-markdown/networking/ingress_load_balancing/metallb/metallb-configure-bgp-peers#nw-metallb-bgp-peer-vrf_configure-metallb-bgp-peers)
- [Example: Network interface with a VRF instance node network configuration policy](/openshift-docs-markdown/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-example-host-vrf_k8s-nmstate-updating-node-network-config)
- [Configuring an egress service](/openshift-docs-markdown/networking/ovn_kubernetes_network_provider/configuring-egress-traffic-for-vrf-loadbalancer-services#configuring-egress-traffic-loadbalancer-services)
