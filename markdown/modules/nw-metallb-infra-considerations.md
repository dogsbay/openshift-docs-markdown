{%- set _mod_docs_content_type = "CONCEPT" %}
# Infrastructure considerations for MetalLB {id="nw-metallb-infra-considerations_{{ context }}"}

MetalLB is designed for bare metal and on-premise environments where no native cloud load balancer is available. Before you deploy MetalLB, verify that your infrastructure meets the networking requirements for your chosen mode. {._abstract}


:::important

MetalLB is not supported on cloud provider platforms such as AWS, Azure, or Google Cloud. Cloud platforms virtualize the network layer and expose proprietary APIs instead of standard network protocols. As a result, MetalLB cannot function correctly on these platforms.

Use the load balancing service that the platform provides if your cluster runs on a cloud platform.

:::


## Supported platforms {id="_supported_platforms"}

The following infrastructure platforms support MetalLB:

*   Bare metal
*   VMware vSphere
*   {{ ibm_z_name }} and {{ ibm_linuxone_name }}
*   {{ ibm_z_name }} and {{ ibm_linuxone_name }} for {{ op_system_base_full }} KVM
*   {{ ibm_power_name }}

## Network prerequisites {id="_network_prerequisites"}

MetalLB requires the following network capabilities, depending on the operating mode:


For Layer 2 mode
:   *   Standard ARP (IPv4) or NDP (IPv6) must function on the network. The network must not block or emulate ARP/NDP traffic.
    *   Anti-ARP-spoofing protections, if present, must be disabled on nodes running MetalLB speakers. Some virtualization platforms, such as {{ rh_openstack_first }}, enable this protection by default.

For BGP mode
:   *   An external BGP-capable router must be available and reachable from the cluster nodes.
    *   The network must allow BGP sessions (TCP port 179) between the cluster nodes and the upstream router.

For both modes
:   *   Configure external network infrastructure to route traffic destined for the external IP addresses to the cluster nodes.