---
title: Understanding networking
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding networking {id="understanding-networking"}
{%- set context = "understanding-networking" %}

Understanding networking is essential for building resilient, secure, and scalable applications in {{ product_title }}. From basic pod-to-pod communication to complex traffic routing and security rules, every component of your application relies on the network to function correctly. {._abstract}

The following diagram shows the flow of external and internal network traffic among networking components for an {{ aws_first }} external client when connecting to a pod in a cluster.

**Figure 1. Diagram showing traffic flow among networking components**

![Diagram showing traffic flow among networking components](/_assets/images/494_OpenShift_pod_networking_0426.png)

{% leveloffset +1 %}{% include "./modules/nw-understanding-networking-core-layers-and-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-understanding-networking-managing-traffic-within.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-understanding-networking-managing-traffic-entering-leaving.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-understanding-networking-securing-network-traffic.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About network policy](/networking/network_security/network_policy/about-network-policy#about-network-policy)