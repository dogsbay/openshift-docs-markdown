{%- set _mod_docs_content_type = "REFERENCE" %}
# Additional configuration details for user-defined networks {id="nw-udn-additional-config-details_{{ context }}"}

Configure optional advanced settings for `ClusterUserDefinedNetwork` and `UserDefinedNetwork` CRs when default values conflict with your network topology or when you need persistent IP addresses, custom gateways, or specific subnet configurations. {._abstract}

It is not recommended to set these fields without explicit need and understanding of OVN-Kubernetes network topology.

***Optional configurations for user-defined networks***

<table>
<thead>
<tr>
  <th><strong>CUDN field</strong></th>
  <th><strong>UDN field</strong></th>
  <th><strong>Type</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td><strong>Description</strong></td>
  <td><code>spec.network.<topology>.joinSubnets</code></td>
  <td><code>spec.<topology>.joinSubnets</code></td>
</tr>
<tr>
  <td>object</td>
  <td>When omitted, the platform sets default values for the <code>joinSubnets</code> field of <code>100.65.0.0/16</code> for IPv4 and  <code>fd99::/64</code> for IPv6. If the default address values are used anywhere in the cluster's network you must override it by setting the <code>joinSubnets</code> field. If you choose to set this field, ensure it does not conflict with other subnets in the cluster such as the cluster subnet, the <code>default</code> network cluster subnet, and the masquerade subnet. The <code>joinSubnets</code> field configures the routing between different segments within a user-defined network. Dual-stack clusters can set 2 subnets, one for each IP family; otherwise, only 1 subnet is allowed. This field is only allowed for the <code>Primary</code> network.</td>
  <td><code>spec.network.<topology>.excludeSubnets</code></td>
</tr>
<tr>
  <td><code>spec.<topology>.excludeSubnets</code></td>
  <td>string</td>
  <td>Specifies a list of CIDRs to be removed from the CIDRs specified in the <code>subnets</code> field. The CIDRs in this list must be in range of at least one subnet specified in the <code>subnets</code> field. When omitted, OVN-Kubernetes assigns all IP addresses specified in the <code>subnets</code> field. You must use standard CIDR notation. For example, <code>10.128.0.0/16</code>. You must omit this field if the <code>subnets</code> field is not set or if the <code>ipam.mode</code> field is set to <code>Disabled</code>. You can only set 25 values for the <code>excludeSubnets</code> field.</td>
</tr>
<tr>
  <td><code>spec.network.layer2.reservedSubnets</code></td>
  <td><code>spec.layer2.reservedSubnets</code></td>
  <td>object</td>
</tr>
<tr>
  <td>This optional field specifies a list of CIDRs reserved for static IP assignment, which therefore excludes it from automatic allocation. When omitted, all IP addresses in the <code>subnets</code> field are available for automatic assignment. All IP addresses in the listed ranges are available to request through static IP assignment in pod annotations. Each address must be in the CIDR range specified in the <code>subnets</code> field. The field only accepts 25 entries. The format should match standard CIDR notation (for example, <code>10.128.0.0/16</code>). You must omit this field if the <code>subnets</code> field is unset or the <code>ipam.mode</code> field is <code>Disabled</code>. Specifies a reserved list of addresses for workloads. You can set this field to reserve IP addresses that pods can then request in the future.</td>
  <td><code>spec.network.layer2.infrastructureSubnets</code></td>
  <td><code>spec.layer2.infrastructureSubnets</code></td>
</tr>
<tr>
  <td>object</td>
  <td>This optional field specifies addresses used for OVN-Kubernetes internal network infrastructure. You cannot assign any IP addresses within these ranges to workloads. When omitted, OVN-Kubernetes automatically assigns IP addresses from the <code>subnets</code> field for its infrastructure needs. When the <code>reservedSubnets</code> field are also specified, the CIDRs cannot overlap. Additionally when the <code>defaultGatewayIPs</code> field are also specified, the default gateway IP addresses must belong to one of the CIDRs. Each address must be in the CIDR range specified in <code>subnets</code>. The maximum number of entries allowed is 10. The format should match standard CIDR notation (for example, <code>10.128.0.0/16</code>). You must omit this field if the <code>subnets</code> field is unset or the <code>ipam.mode</code> field is <code>Disabled</code>.</td>
  <td><code>spec.network.layer2.defaultGatewayIPs</code></td>
</tr>
<tr>
  <td><code>spec.layer2.defaultGatewayIPs</code></td>
  <td>object</td>
  <td>This field is optional and specifies an IP address that overrides the addresses assigned by default for the gateway. Acceptable values are both IPv4 and IPv6 addresses for dual stack clusters. Specifies the default gateway IP address used in the internal OVN-Kubernetes topology. Dual-stack clusters can set two IP addresses (one for each IP family), otherwise only one IP address can be used. This field is only allowed when the <code>role</code> field is set to <code>Primary</code>. It is not recommended to set this field without explicit need and understanding of the OVN-Kubernetes network topology. When omitted, OVN-Kubernetes assigns the first IP address from the network's <code>subnet</code> field.</td>
</tr>
<tr>
  <td><code>spec.network.<topology>.ipam.lifecycle</code></td>
  <td><code>spec.layer2.ipam.lifecycle</code></td>
  <td>object</td>
</tr>
<tr>
  <td>The <code>spec.ipam.lifecycle</code> field configures the IP address management system (IPAM). You might use this field for virtual workloads to ensure persistent IP addresses. The only allowed value is <code>Persistent</code>, which ensures that your virtual workloads have persistent IP addresses across reboots and migration. These are assigned by the container network interface (CNI) and used by OVN-Kubernetes to program pod IP addresses. You must not change this for pod annotations. Setting a value of Persistent is only supported when <code>ipam.mode</code> parameter is set to <code>Enabled</code>.</td>
  <td><code>spec.network.<topology>.ipam.mode</code></td>
  <td><code>spec.<topology></code>ipam.mode`</td>
</tr>
<tr>
  <td>object</td>
  <td>The <code>mode</code> parameter controls how much of the IP configuration is managed by OVN-Kubernetes. The following options are available:<ul><li><code>Enabled</code>: When enabled, OVN-Kubernetes applies the IP configuration to the SDN infrastructure and assigns IP addresses from the selected subnet to the individual pods. This is the default setting. When set to <code>Enabled</code>, the <code>subnets</code> field must be defined. <code>Enabled</code> is the default configuration.</li><li><code>Disabled</code>: When disabled, OVN-Kubernetes only assigns MAC addresses and provides layer 2 communication, which allows users to configure IP addresses. <code>Disabled</code> is only available for layer 2 (secondary) networks. By disabling IPAM, features that rely on selecting pods by IP, for example, network policy, services, and so on, no longer function. Additionally, IP port security is also disabled for interfaces attached to this network. The <code>subnets</code> field must be empty when <code>spec.ipam.mode</code> is set to <code>Disabled.</code></li></ul></td>
  <td><code>spec.network.<topology>.mtu</code></td>
</tr>
<tr>
  <td><code>spec.<topology>.mtu</code></td>
  <td>integer</td>
  <td>The maximum transmission units (MTU). The default value is <code>1400</code>. The boundary for IPv4 is <code>576</code>, and for IPv6 it is <code>1280</code>.</td>
</tr>
<tr>
  <td><code>spec.network.localnet.vlan</code></td>
  <td>N/A</td>
  <td>object</td>
</tr>
<tr>
  <td>This field is optional and configures the virtual local area network (VLAN) tagging and allows you to segment the physical network into multiple independent broadcast domains.</td>
  <td><code>spec.network.localnet.vlan.mode</code></td>
  <td>N/A</td>
</tr>
<tr>
  <td>object</td>
  <td>Acceptable values are <code>Access</code>. A value of <code>Access</code> specifies that the network interface belongs to a single VLAN and all traffic will be labelled with an <code>id</code> that is configured in the <code>spec.network.localnet.vlan.mode.access.id</code> field. The <code>id</code> specifies the VLAN <code>id</code> (VID) for access ports. Values must be an integer between 1 and 4094.</td>
  <td><code>spec.network.localnet.physicalNetworkName</code></td>
</tr>
<tr>
  <td>N/A</td>
  <td>string</td>
  <td>Specifies the name for a physical network interface. The value you specify must match the <code>network-name</code> parameter that you provided in your Open vSwitch (OVS) bridge mapping.</td>
</tr>
<tr>
  <td><code>spec.network.transport</code></td>
  <td>N/A</td>
  <td>string</td>
</tr>
<tr>
  <td>Specifies how pod traffic is carried on the cluster infrastructure for the <code>ClusterUserDefinedNetwork</code> CR. Accepted values are <code>EVPN</code> and <code>NoOverlay</code>. Additional configuration is required when setting the <code>spec.network.transport</code> field. For more information, see "About BGP EVPN for primary cluster user-defined networks" and "Improve east-west performance by routing pods on the underlay with BGP".</td>
</tr>
</tbody>
</table>

where:


`<topology>`
:   Can be either `layer2` or `layer3` for the `UserDefinedNetwork` CR. For the `ClusterUserDefinedNetwork` CR the topology can also be `Localnet`.