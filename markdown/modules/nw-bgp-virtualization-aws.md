{%- set _mod_docs_content_type = "CONCEPT" %}
# About BGP routing for OpenShift Virtualization on AWS {id="nw-bgp-virtualization-aws_{{ context }}"}

Border Gateway Protocol (BGP) Cloud Connector integrates {{ product_title }} with {{ aws_short }} Route Server allowing direct, routed connectivity to {{ VirtProductName }} virtual machines (VMs) on {{ aws_short }}. {._abstract}

By using the BGP Cloud Connector, you do not need Network Address Translation (NAT).

{% if not openshift_rosa_hcp %}
{%- set FeatureName = "BGP routing for {{ VirtProductName }} on {{ aws_short }}" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}
{% endif %}

VM workloads are often designed to require that a network interface of the VM is routable to and from an outside network on the same IP address the VM sees.
Mechanisms to do this on on-premise networks, such as localnet bridges, require an external Layer 2 network.
{{ aws_short }} Virtual Private Cloud (VPCs) operate at Layer 3.

By using the BGP Cloud Connector, you can use compute nodes as routers to pass traffic between workloads within your cluster and the VPC of the cluster.
BGP Cloud Connector configures compute nodes to establish Border Gateway Protocol (BGP) peering with the {{ aws_short }} Route Server. BGP uses this configuration to advertise pod and VM network routes from Cluster User Defined Networks (CUDNs) directly into your {{ aws_short }} VPC.

BGP Cloud Connector consists of the following two core layers:

*   Cloud infrastructure layer, where the underlying {{ aws_short }} VPC, subnets, and {{ aws_short }} Route Server get provisioned alongside your cluster.
*   In-cluster Operator layer, where an Operator that manages cluster-wide and project-scoped custom resources (CRs) configure routing, BGP peering, and network interfaces.

The Operator automatically discovers your {{ aws_short }} Route Server topology and establishes BGP peering sessions between designated compute nodes and local subnet Route Server endpoints by generating `FRRConfiguration` CRs.

The Operator also automates the following required {{ aws_short }}-side networking configuration:

*   Managing Route Server peers dynamically as nodes scale, reboot, or undergo cluster upgrades.
*   Disabling source/destination checks on primary compute node Elastic Network Interfaces (ENIs) so BGP-enabled compute nodes can forward external traffic.

The following list details key benefits of using {{ aws_short }} Route Server with BGP Cloud Connector:

*   Direct, NAT-free routed connectivity between VM network interfaces and the VPC.
*   Native cloud routing integration without custom downstream implementations.
*   Compatibility with standard enterprise BGP tools and multicloud architectures.