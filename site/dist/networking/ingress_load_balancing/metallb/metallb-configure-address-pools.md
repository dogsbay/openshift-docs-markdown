---
title: Configuring MetalLB address pools
---

# Configuring MetalLB address pools {#metallb-configure-address-pools}

To allocate and manage the IP addresses assigned to load balancer services, configure MetalLB address pool custom resources. Defining these pools ensures that application workloads remain reachable through designated network ranges for consistent external access.

The namespaces used in the examples show `metallb-system` as the namespace.

For more information about how to install the MetalLB Operator, see [About MetalLB and the MetalLB Operator](/openshift-docs-markdown/networking/networking_operators/metallb-operator/about-metallb#about-metallb).

## Additional resources {#additional-resources_metallb-configure-address-pools}

- [Configuring MetalLB with an L2 advertisement and label](/openshift-docs-markdown/networking/ingress_load_balancing/metallb/about-advertising-ipaddresspool#nw-metallb-configure-with-L2-advertisement-label_about-advertising-ip-address-pool)
- [Configuring MetalLB BGP peers](/openshift-docs-markdown/networking/ingress_load_balancing/metallb/metallb-configure-bgp-peers#metallb-configure-bgp-peers)
- [Configuring services to use MetalLB](/openshift-docs-markdown/networking/ingress_load_balancing/metallb/metallb-configure-services#metallb-configure-services)
