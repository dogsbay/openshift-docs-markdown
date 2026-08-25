{%- set _mod_docs_content_type = "REFERENCE" %}
# AdminPolicyBasedExternalRoute object configuration {id="nw-secondary-ext-gw-object_{{ context }}"}

You can define an `AdminPolicyBasedExternalRoute` object, which is cluster scoped, with specific properties. {._abstract}

A namespace can be selected by only one `AdminPolicyBasedExternalRoute` CR at a time.

The following tables detail supported fields for objects.

***`AdminPolicyBasedExternalRoute` object***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>metadata.name</code></td>
  <td><code>string</code></td>
  <td>Specifies the name of the  <code>AdminPolicyBasedExternalRoute</code> object.</td>
</tr>
<tr>
  <td><code>spec.from</code></td>
  <td><code>string</code></td>
  <td>Specifies a namespace selector that the routing policies apply to. Only <code>namespaceSelector</code> is supported for external traffic. For example:<br><br><pre>from:&#10;  namespaceSelector:&#10;    matchLabels:&#10;      kubernetes.io/metadata.name: novxlan-externalgw-ecmp-4059</pre><br><br>A namespace can only be targeted by one <code>AdminPolicyBasedExternalRoute</code> CR. If a namespace is selected by more than one <code>AdminPolicyBasedExternalRoute</code> CR, a <code>failed</code> error status occurs on the second and subsequent CRs that target the same namespace. To apply updates, you must change the policy itself or related objects such as target namespaces, pod gateways, or namespaces hosting them from dynamic hops. The policy is then re-evaluated and your changes are applied.</td>
</tr>
<tr>
  <td><code>spec.nextHops</code></td>
  <td><code>object</code></td>
  <td>Specifies the destinations where the packets are forwarded to. Must be either or both of <code>static</code> and <code>dynamic</code>. You must have at least one next hop defined.</td>
</tr>
</tbody>
</table>

***`nextHops` object***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>static</code></td>
  <td><code>array</code></td>
  <td>Specifies an array of static IP addresses.</td>
</tr>
<tr>
  <td><code>dynamic</code></td>
  <td><code>array</code></td>
  <td>Specifies an array of pod selectors corresponding to pods configured with a network attachment definition to use as the external gateway target.</td>
</tr>
</tbody>
</table>

***`nextHops.static` object***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>ip</code></td>
  <td><code>string</code></td>
  <td>Specifies either an IPv4 or IPv6 address of the next destination hop.</td>
</tr>
<tr>
  <td><code>bfdEnabled</code></td>
  <td><code>boolean</code></td>
  <td>Optional field. Specifies whether Bi-Directional Forwarding Detection (BFD) is supported by the network. The default value is <code>false</code>.</td>
</tr>
</tbody>
</table>

***`nextHops.dynamic` object***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>podSelector</code></td>
  <td><code>string</code></td>
  <td>Specifies a set-based label selector to filter the pods in the namespace that match this network configuration. For more information, see "Set-based requirement" in the <em>Additional resources</em> section.</td>
</tr>
<tr>
  <td><code>namespaceSelector</code></td>
  <td><code>string</code></td>
  <td>Specifies a <code>set-based</code> selector to filter the namespaces that the <code>podSelector</code> applies to. You must specify a value for this field.</td>
</tr>
<tr>
  <td><code>bfdEnabled</code></td>
  <td><code>boolean</code></td>
  <td>Optional field. Specifies whether Bi-Directional Forwarding Detection (BFD) is supported by the network. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>networkAttachmentName</code></td>
  <td><code>string</code></td>
  <td>Optional field. Specifies the name of a network attachment definition. The name must match the list of logical networks associated with the pod. If this field is not specified, the host network of the pod is used. However, the pod must be configured as a host network pod to use the host network.</td>
</tr>
</tbody>
</table>