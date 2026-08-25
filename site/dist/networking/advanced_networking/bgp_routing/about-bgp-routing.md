---
title: About BGP routing
---

# About BGP routing {#about-bgp-routing}

To integrate BGP with MetalLB and FRR-K8s in OpenShift Container Platform, you can review how FRR-K8s resources model cluster routing. Migrate `FRRConfiguration` custom resources from `metallb-system` to `openshift-frr-k8s` when admins or third parties created them outside the MetalLB Operator.

> [!IMPORTANT]
> If you are using the MetalLB Operator and there are existing `FRRConfiguration` CRs in the `metallb-system` namespace created by cluster administrators or third-party cluster components other than the MetalLB Operator, you must ensure that they are copied to the `openshift-frr-k8s` namespace or that those third-party cluster components use the new namespace. For more information, see "Migrating FRR-K8s resources".

## Additional resources {#additional-resources_about-bgp-routing}

- [FRRouting User Guide: BGP](https://docs.frrouting.org/en/latest/bgp.html)
- [Migrating FRR-K8s resources](/networking/advanced_networking/bgp_routing/migrating-frr-k8s-resources#migrating-frr-k8s-resources)
- [Improve east-west performance by routing pods on the underlay with BGP](/networking/advanced_networking/bgp_routing/no-overlay-mode-bgp-routing#no-overlay-mode-bgp-routing)
