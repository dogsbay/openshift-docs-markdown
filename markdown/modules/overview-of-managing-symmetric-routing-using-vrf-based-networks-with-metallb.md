{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of managing symmetric routing by using VRFs with MetalLB {id="overview-of-managing-symmetric-routing-using-vrf-based-networks-with-metallb_{{ context }}"}

You can overcome the challenges of implementing symmetric routing by using NMState to configure a VRF instance on a host, associating the VRF instance with a MetalLB `BGPPeer` resource, and configuring an egress service for egress traffic with OVN-Kubernetes. {._abstract}

**Figure 1. Network overview of managing symmetric routing by using VRFs with MetalLB**

![Network overview of managing symmetric routing by using VRFs with MetalLB](/images/357_OpenShift_MetalLB_VRF_0823.png)

The configuration process involves three stages:


1: Define a VRF and routing rules

:   *   Configure a `NodeNetworkConfigurationPolicy` custom resource (CR) to associate a VRF instance with a network interface.
    *   Use the VRF routing table to direct ingress and egress traffic.

2: Link the VRF to a MetalLB `BGPPeer`

:   *   Configure a MetalLB `BGPPeer` resource to use the VRF instance on a network interface.
    *   By associating the `BGPPeer` resource with the VRF instance, the designated network interface becomes the primary interface for the BGP session, and MetalLB advertises the services through this interface.

3: Configure an egress service

:   *   Configure an egress service to choose the network associated with the VRF instance for egress traffic.
    *   Optional: Configure an egress service to use the IP address of the MetalLB load-balancer service as the source IP for egress traffic.