{%- set _mod_docs_content_type = "REFERENCE" %}
# Network policy configuration parameters {id="cert-manager-nw-policy-params_{{ context }}"}

You can enable and configure network policies for the cert-manager Operator components by updating the `CertManager` custom resource (CR). The CR includes the following parameters for enabling default network policies and defining custom egress rules. {._abstract}

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
  <td><code>spec.defaultNetworkPolicy</code></td>
  <td><code>boolean</code></td>
  <td>Specifies whether to enable the default network policy for the cert-manager Operator components.<dl><dt>Important</dt><dd>Once you enable default network policies, you cannot disable them. This restriction prevents accidental security degradation. Before enabling this setting, ensure that you plan the network policy requirements.</dd></dl></td>
</tr>
<tr>
  <td><code>spec.networkPolicies</code></td>
  <td><code>object</code></td>
  <td>Defines a list of custom network policy configuration. To apply the configuration, you must set <code>spec.defaultNetworkPolicy</code> to <code>true</code>.</td>
</tr>
<tr>
  <td><code>spec.networkPolicies.componentName</code></td>
  <td><code>string</code></td>
  <td>Specifies the component that this network policy targets. The only valid value is <code>CoreController</code>.</td>
</tr>
<tr>
  <td><code>spec.networkPolicies.egress</code></td>
  <td><code>object</code></td>
  <td>Defines the egress rules for the specified component. Set to <code>{}</code> to allow connections to all external providers.</td>
</tr>
<tr>
  <td><code>spec.networkPolicies.egress.ports</code></td>
  <td><code>object</code></td>
  <td>Defines a list of network ports and protocols for the specified providers.</td>
</tr>
<tr>
  <td><code>spec.networkPolicies.name</code></td>
  <td><code>string</code></td>
  <td>Specifies a unique name for the custom network policy, which is used to generate the <code>NetworkPolicy</code> resource name.</td>
</tr>
</tbody>
</table>