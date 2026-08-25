{%- set _mod_docs_content_type = "REFERENCE" %}
# About the L2Advertisement custom resource {id="nw-metallb-l2padvertisement-cr_{{ context }}"}

To configure how application services are announced over a Layer 2 network, define the properties in the `L2Advertisement` custom resource (CR). Establishing these parameters ensures that MetalLB correctly manages routing for your load-balancer IP addresses within the local network infrastructure. {._abstract}

The following table details parameters for the `l2Advertisements` CR:

**L2 advertisements configuration**

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
  <td>Specifies the name for the L2 advertisement.</td>
</tr>
<tr>
  <td><code>metadata.namespace</code></td>
  <td><code>string</code></td>
  <td>Specifies the namespace for the L2 advertisement. Specify the same namespace that the MetalLB Operator uses.</td>
</tr>
<tr>
  <td><code>spec.ipAddressPools</code></td>
  <td><code>string</code></td>
  <td>Optional: The list of <code>IPAddressPools</code> to advertise with this advertisement, selected by name.</td>
</tr>
<tr>
  <td><code>spec.ipAddressPoolSelectors</code></td>
  <td><code>string</code></td>
  <td>Optional: A selector for the <code>IPAddressPools</code> to advertise with this advertisement. This is for associating the <code>IPAddressPool</code> to the advertisement based on the label assigned to the <code>IPAddressPool</code> instead of the name itself. If no <code>IPAddressPool</code> is selected by this or by the list, the advertisement is applied to all the <code>IPAddressPools</code>.</td>
</tr>
<tr>
  <td><code>spec.serviceSelectors</code></td>
  <td><code>array (LabelSelector)</code></td>
  <td>Optional: Kubernetes label selectors that determine which <code>LoadBalancer</code> services receive this advertisement's Layer 2 settings for addresses from the selected pools. If you omit <code>spec.serviceSelectors</code> or specify an empty list, MetalLB applies this advertisement to every <code>LoadBalancer</code> service that draws an IP address from the pools listed in <code>spec.ipAddressPools</code> or matched by <code>spec.ipAddressPoolSelectors</code>. You can use selectors to limit the advertisement to labeled services. On this <code>L2Advertisement</code> resource, if you use <code>spec.serviceSelectors</code> to limit the advertisement to labeled services, <code>LoadBalancer</code> services that use the <code>metallb.io/allow-shared-ip</code> annotation are not announced on Layer 2 when this advertisement matches those services. Do not combine that annotation with <code>serviceSelectors</code> for Layer 2.</td>
</tr>
<tr>
  <td><code>spec.nodeSelectors</code></td>
  <td><code>string</code></td>
  <td>Optional: <code>NodeSelectors</code> limits the nodes to announce as next hops for the load balancer IP. If empty, MetalLB announces all nodes as next hops.<br><br>{%- set FeatureName = "Limiting the nodes to announce as next hops" %}{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}</td>
</tr>
<tr>
  <td><code>spec.interfaces</code></td>
  <td><code>string</code></td>
  <td>Optional: The list of <code>interfaces</code> to announce the load balancer IP address.</td>
</tr>
</tbody>
</table>