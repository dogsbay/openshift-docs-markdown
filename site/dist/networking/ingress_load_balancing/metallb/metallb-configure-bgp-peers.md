---
title: Configuring MetalLB BGP peers
---

# Configuring MetalLB BGP peers {#metallb-configure-bgp-peers}

As a cluster administrator, you can add, modify, and delete Border Gateway Protocol (BGP) peers. The MetalLB Operator uses the BGP peer custom resources to identify which peers that MetalLB `speaker` pods contact to start BGP sessions.

The peers receive the route advertisements for the load-balancer IP addresses that MetalLB assigns to services.

## Additional resources {#additional-resources_configure-metallb-bgp-peers}

- [About virtual routing and forwarding](/networking/multiple_networks/about-virtual-routing-and-forwarding#cnf-about-virtual-routing-and-forwarding_about-virtual-routing-and-forwarding)
- [Example: Network interface with a VRF instance node network configuration policy](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#virt-example-host-vrf_k8s-nmstate-updating-node-network-config)
- [Configuring an egress service](/networking/ovn_kubernetes_network_provider/configuring-egress-traffic-for-vrf-loadbalancer-services#configuring-egress-traffic-loadbalancer-services)
- [Managing symmetric routing with MetalLB](/networking/ingress_load_balancing/metallb/metallb-configure-return-traffic#metallb-configure-return-traffic)

## Additional resources {#_additional_resources}

- [Configuring services to use MetalLB](/networking/ingress_load_balancing/metallb/metallb-configure-services#metallb-configure-services)
