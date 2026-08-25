{%- set _mod_docs_content_type = "REFERENCE" %}
# About the IPAddressPool custom resource {id="nw-metallb-ipaddresspool-cr_{{ context }}"}

To define the IP address ranges available for load balancer services, configure the properties of the MetalLB `IPAddressPool` custom resource (CR). {._abstract}

The following table details the parameters for the `IPAddressPool` CR:

**MetalLB IPAddressPool pool custom resource**

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
  <td>Specifies the name for the address pool. When you add a service, you can specify this pool name in the <code>metallb.io/address-pool</code> annotation to select an IP address from a specific pool. The names <code>doc-example</code>, <code>silver</code>, and <code>gold</code> are used throughout the documentation.</td>
</tr>
<tr>
  <td><code>metadata.namespace</code></td>
  <td><code>string</code></td>
  <td>Specifies the namespace for the address pool. Specify the same namespace that the MetalLB Operator uses.</td>
</tr>
<tr>
  <td><code>metadata.label</code></td>
  <td><code>string</code></td>
  <td>Optional: Specifies the key-value pair assigned to the <code>IPAddressPool</code>. This can be referenced by the <code>ipAddressPoolSelectors</code> in the <code>BGPAdvertisement</code> and <code>L2Advertisement</code> CRD to associate the <code>IPAddressPool</code> with the advertisement</td>
</tr>
<tr>
  <td><code>spec.addresses</code></td>
  <td><code>string</code></td>
  <td>Specifies a list of IP addresses for the MetalLB Operator to assign to services. You can specify multiple ranges in a single pool, where these ranges all share the same settings. Specify each range in Classless Inter-Domain Routing (CIDR) notation or as starting and ending IP addresses separated with a hyphen.</td>
</tr>
<tr>
  <td><code>spec.autoAssign</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Specifies whether the MetalLB Operator automatically assigns IP addresses from this pool. Specify <code>false</code> if you want to explicitly request an IP address from this pool with the <code>metallb.io/address-pool</code> annotation. The default value is <code>true</code>.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>For IP address pool configurations, ensure the addresses parameter specifies only IP addresses that are available and not in use by other network devices, especially gateway addresses, to prevent conflicts when <code>autoAssign</code> is enabled.</dd></dl></td>
</tr>
<tr>
  <td><code>spec.avoidBuggyIPs</code></td>
  <td><code>boolean</code></td>
  <td>Optional: When you set the parameter to enabled, the IP addresses ending <code>.0</code> and <code>.255</code> are not allocated from the pool. The default value is <code>false</code>. Some older consumer network equipment mistakenly block IP addresses ending in <code>.0</code> and <code>.255</code>.</td>
</tr>
</tbody>
</table>

You can assign IP addresses from an `IPAddressPool` to services and namespaces by configuring the `spec.serviceAllocation` specification.

**MetalLB IPAddressPool custom resource spec.serviceAllocation subfields**

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
  <td><code>priority</code></td>
  <td><code>int</code></td>
  <td>Optional: Defines the priority between IP address pools when more than one IP address pool matches a service or namespace. A lower number indicates a higher priority.</td>
</tr>
<tr>
  <td><code>namespaces</code></td>
  <td><code>array (string)</code></td>
  <td>Optional: Specifies a list of namespaces that you can assign to IP addresses in an IP address pool.</td>
</tr>
<tr>
  <td><code>namespaceSelectors</code></td>
  <td><code>array (LabelSelector)</code></td>
  <td>Optional: Specifies namespace labels that you can assign to IP addresses from an IP address pool by using label selectors in a list format.</td>
</tr>
<tr>
  <td><code>serviceSelectors</code></td>
  <td><code>array (LabelSelector)</code></td>
  <td>Optional: Specifies service labels that you can assign to IP addresses from an address pool by using label selectors in a list format.</td>
</tr>
</tbody>
</table>