{%- set _mod_docs_content_type = "CONCEPT" %}
# Comparison: Fault-tolerant access to external IP addresses {id="overview-traffic-comparision_{{ context }}"}

To ensure continuous service availability and maintain external IP access in {{ product_title }}, configure fault-tolerant networking features. {._abstract}

For the communication methods that provide access to an external IP address, fault tolerant access to the IP address is another consideration. The following features provide fault tolerant access to an external IP address.


IP failover
:   IP failover manages a pool of virtual IP addresses for a set of nodes. IP failover gets implemented with Keepalived and Virtual Router Redundancy Protocol (VRRP). IP failover is a layer 2 mechanism only and relies on multicast. Multicast can have disadvantages for some networks.


MetalLB
:   MetalLB has a layer 2 mode, but it does not use multicast. Layer 2 mode has a disadvantage that it transfers all traffic for an external IP address through one node.


Manually assigning external IP addresses
:   You can configure your cluster with an IP address block that is used to assign external IP addresses to services. By default, this feature is disabled. This feature is flexible, but places the largest burden on the cluster or network administrator. The cluster is prepared to receive traffic that is destined for the external IP, but you must decide how to route traffic to nodes.