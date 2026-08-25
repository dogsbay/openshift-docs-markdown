---
title: Optimizing networking
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Optimizing networking {id="optimizing-networking"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "optimizing-networking" %}

To tunnel traffic between nodes, use Generic Network Virtualization Encapsulation (Geneve). You can tune the network by using network interface controller (NIC) offloads.

Geneve provides benefits over VLANs, such as an increase in networks from 4096 to over 16 million, and layer 2 connectivity across physical networks. This allows for all pods behind a service to communicate with each other, even if they are running on different systems.

Cloud, virtual, and bare-metal environments running {{ product_title }} can use a high percentage of the capabilities of a network interface card (NIC) with minimal tuning. Production clusters using OVN-Kubernetes with Geneve tunneling can handle high-throughput traffic effectively and scale up (for example, utilizing 100 Gbps NICs) and scale out (for example, adding more NICs) without requiring special configuration.

In some high-performance scenarios where maximum efficiency is critical, targeted performance tuning can help optimize CPU usage, reduce overhead, and ensure that you are making full use of the NIC’s capabilities.

For environments where maximum throughput and CPU efficiency are critical, you can further optimize performance with the following strategies:

*   Validate network performance by using tools such as `iPerf3` and `k8s-netperf`. By using these tools, you can benchmark throughput, latency, and packets-per-second (PPS) across pod and node interfaces.
*   Evaluate OVN-Kubernetes User Defined Networking (UDN) routing techniques, such as border gateway protocol (BGP).
*   Use Geneve-offload capable network adapters. Geneve-offload moves the packet checksum calculation and associated CPU overhead off of the system CPU and onto dedicated hardware on the network adapter. This frees up CPU cycles for use by pods and applications, so that users can use the full bandwidth of their network infrastructure.

## Additional resources {id="additional-resources_{{ context }}"}

*   [OVN-Kubernetes](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)

{% leveloffset +1 %}{% include "./modules/optimizing-mtu-networking.md" %}{% endleveloffset %}

**Additional resources**

*   [Changing cluster network MTU](/networking/advanced_networking/changing-cluster-network-mtu#changing-cluster-network-mtu)

{% leveloffset +1 %}{% include "./modules/recommended-install-practices.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipsec-impact-networking.md" %}{% endleveloffset %}

## Additional resources {id="optimizing-networking-additional-resources"}

*   [Specifying advanced network configuration](/installing/installing_aws/ipi/installing-aws-customizations#modifying-nwoperator-config-startup_installing-aws-customizations)
*   [Cluster Network Operator configuration](/networking/networking_operators/cluster-network-operator#nw-operator-cr_cluster-network-operator)
*   [Improving cluster stability in high latency environments using worker latency profiles](/scalability_and_performance/scaling-worker-latency-profiles#scaling-worker-latency-profiles)