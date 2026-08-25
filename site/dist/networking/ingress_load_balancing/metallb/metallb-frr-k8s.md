---
title: Configuring the integration of MetalLB and FRR-K8s
---

# Configuring the integration of MetalLB and FRR-K8s {#metallb-configure-frr-k8s}

To access advanced routing services not natively provided by MetalLB, configure the `FRRConfiguration` custom resource (CR). Defining the CR exposes specific FRRouting (FRR) capabilities and extends the routing functionality of your cluster beyond standard MetalLB advertisements.

FRRouting (FRR) is a free, open-source internet routing protocol suite for Linux and UNIX platforms. `FRR-K8s` is a Kubernetes-based DaemonSet that exposes a subset of the `FRR` API in a Kubernetes-compliant manner. `MetalLB` generates the `FRR-K8s` configuration corresponding to the MetalLB configuration applied.

![MetalLB integration with FRR](/openshift-docs-markdown/_assets/images/695_OpenShift_MetalLB_FRRK8s_integration_0624.png)

> [!WARNING]
> When configuring Virtual Route Forwarding (VRF), you must change the VRFs to a table ID lower than `1000` as higher than `1000` is reserved for OpenShift Container Platform.
