---
title: Configuring the integration of MetalLB and FRR-K8s
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the integration of MetalLB and FRR-K8s {id="metallb-configure-frr-k8s"}
{%- set context = "configure-metallb-frr-k8s" %}

To access advanced routing services not natively provided by MetalLB, configure the `FRRConfiguration` custom resource (CR). Defining the CR exposes specific FRRouting (FRR) capabilities and extends the routing functionality of your cluster beyond standard MetalLB advertisements. {._abstract}

FRRouting (FRR) is a free, open-source internet routing protocol suite for Linux and UNIX platforms. `FRR-K8s` is a Kubernetes-based DaemonSet that exposes a subset of the `FRR` API in a Kubernetes-compliant manner. `MetalLB` generates the `FRR-K8s` configuration corresponding to the MetalLB configuration applied.

![MetalLB integration with FRR](/_assets/images/695_OpenShift_MetalLB_FRRK8s_integration_0624.png)


:::warning

When configuring Virtual Route Forwarding (VRF), you must change the VRFs to a table ID lower than `1000` as higher than `1000` is reserved for {{ product_title }}.

:::


{% leveloffset +1 %}{% include "./modules/nw-metallb-frr-configurations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-frr-k8s-configuration-crd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-frr-k8s-merge-multiple-configurations.md" %}{% endleveloffset %}