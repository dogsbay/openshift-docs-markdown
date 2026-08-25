{%- set _mod_docs_content_type = "REFERENCE" %}
# About the BGPAdvertisement custom resource {id="nw-metallb-bgpadvertisement-cr_{{ context }}"}

To configure how the cluster announces IP addresses to external peers, define the properties of the `BGPAdvertisement` custom resource (CR). Specifying these parameters ensures that MetalLB correctly manages routing advertisements for your application services within the network. {._abstract}

The following table describes the parameters for the `BGPAdvertisements` CR:

***BGPAdvertisements configuration***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>metadata.name</code></td>
  <td><code>string</code></td>
  <td>Specifies the name for the BGP advertisement.</td>
</tr>
<tr>
  <td><code>metadata.namespace</code></td>
  <td><code>string</code></td>
  <td>Specifies the namespace for the BGP advertisement. Specify the same namespace that the MetalLB Operator uses.</td>
</tr>
<tr>
  <td><code>spec.aggregationLength</code></td>
  <td><code>integer</code></td>
  <td>Optional: Specifies the number of bits to include in a 32-bit CIDR mask. To aggregate the routes that the speaker advertises to BGP peers, the mask is applied to the routes for several service IP addresses and the speaker advertises the aggregated route. For example, with an aggregation length of <code>24</code>, the speaker can aggregate several <code>10.0.1.x/32</code> service IP addresses and advertise a single <code>10.0.1.0/24</code> route. If this <code>BGPAdvertisement</code> resource uses <code>spec.serviceSelectors</code> to limit the advertisement to labeled services, you must omit <code>aggregationLength</code> or set it to <code>32</code>; you cannot set another aggregation length on this same resource together with labeled service selection.</td>
</tr>
<tr>
  <td><code>spec.aggregationLengthV6</code></td>
  <td><code>integer</code></td>
  <td>Optional: Specifies the number of bits to include in a 128-bit CIDR mask. For example, with an aggregation length of <code>124</code>, the speaker can aggregate several <code>fc00:f853:0ccd:e799::x/128</code> service IP addresses and advertise a single <code>fc00:f853:0ccd:e799::0/124</code> route. If this <code>BGPAdvertisement</code> resource uses <code>spec.serviceSelectors</code> to limit the advertisement to labeled services, you must omit <code>aggregationLengthV6</code> or set it to <code>128</code>; you cannot set another aggregation length on this same resource together with labeled service selection.</td>
</tr>
<tr>
  <td><code>spec.communities</code></td>
  <td><code>string</code></td>
  <td>Optional: Specifies one or more BGP communities. Each community is specified as two 16-bit values separated by the colon character. Well-known communities must be specified as 16-bit values:<br><br><ul><li><code>NO_EXPORT</code>: <code>65535:65281</code></li><li><code>NO_ADVERTISE</code>: <code>65535:65282</code></li><li><code>NO_EXPORT_SUBCONFED</code>: <code>65535:65283</code></li></ul>You can also use community objects that are created along with the strings.</td>
</tr>
<tr>
  <td><code>spec.localPref</code></td>
  <td><code>integer</code></td>
  <td>Optional: Specifies the local preference for this advertisement. This BGP attribute applies to BGP sessions within the Autonomous System.</td>
</tr>
<tr>
  <td><code>spec.ipAddressPools</code></td>
  <td><code>string</code></td>
  <td>Optional: The list of <code>IPAddressPools</code> to advertise with this advertisement, selected by name.</td>
</tr>
<tr>
  <td><code>spec.ipAddressPoolSelectors</code></td>
  <td><code>string</code></td>
  <td>Optional: A selector for the <code>IPAddressPools</code> that gets advertised with this advertisement. This is for associating the <code>IPAddressPool</code> to the advertisement based on the label assigned to the <code>IPAddressPool</code> instead of the name itself. If no <code>IPAddressPool</code> is selected by this or by the list, the advertisement is applied to all the <code>IPAddressPools</code>.</td>
</tr>
<tr>
  <td><code>spec.serviceSelectors</code></td>
  <td><code>array (LabelSelector)</code></td>
  <td>Optional: Kubernetes label selectors that determine which <code>LoadBalancer</code> services receive this advertisement's BGP policy for routes from the selected pools. If you omit <code>spec.serviceSelectors</code> or specify an empty list, MetalLB applies this advertisement to every <code>LoadBalancer</code> service that draws an IP address from the pools listed in <code>spec.ipAddressPools</code> or matched by <code>spec.ipAddressPoolSelectors</code>. You can use selectors to limit the advertisement to labeled services. On this <code>BGPAdvertisement</code> resource, if you use <code>spec.serviceSelectors</code> to limit the advertisement to labeled services, labeled service selection and custom BGP route aggregation are mutually exclusive: omit <code>spec.aggregationLength</code> and <code>spec.aggregationLengthV6</code> or set them to <code>32</code> (IPv4) and <code>128</code> (IPv6). You cannot set other aggregation lengths on this same resource together with labeled service selection.</td>
</tr>
<tr>
  <td><code>spec.nodeSelectors</code></td>
  <td><code>string</code></td>
  <td>Optional: By setting the <code>NodeSelectors</code> parameter, you can limit the nodes to announce as next hops for the load balancer IP. When empty, all the nodes are announced as next hops.</td>
</tr>
<tr>
  <td><code>spec.peers</code></td>
  <td><code>string</code></td>
  <td>Optional: Use a list to specify the <code>metadata.name</code> values for each <code>BGPPeer</code> resource that receives advertisements for the MetalLB service IP address. The MetalLB service IP address is assigned from the IP address pool. By default, the MetalLB service IP address is advertised to all configured <code>BGPPeer</code> resources. Set this parameter to limit the advertisement to specific <code>BGPpeer</code> resources.</td>
</tr>
</tbody>
</table>