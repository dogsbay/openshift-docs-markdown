{%- set _mod_docs_content_type = "REFERENCE" %}
# networkPolicy {id="eso-network-policy_{{ context }}"}

The `networkPolicy` field represents a custom network policy configuration for operator-managed components. The field includes a name for identification and the network policy rules to be enforced. {._abstract}

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
  <th>Default</th>
  <th>Validation</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>name</code></td>
  <td><em>string</em></td>
  <td><code>name</code> is the logical identifier for this network policy entry. The Operator prepends <code>eso-user-</code> to this value when creating the Kubernetes <code>NetworkPolicy</code> object, for example <code>allow-egress</code> becomes <code>eso-user-allow-egress</code>. The maximum length is 243 to accommodate the prefix within the 253-character Kubernetes name limit.</td>
  <td></td>
  <td>The maximum length is 243 characters.<br><br>The minimum length is 1. character.</td>
</tr>
<tr>
  <td><code>componentName</code></td>
  <td><em>string</em></td>
  <td><code>componentName</code> specifies which external-secrets component this network policy applies to.</td>
  <td></td>
  <td>Enum:[<code>ExternalSecretsCoreController</code> <code>BitwardenSDIServer</code>]</td>
</tr>
<tr>
  <td><code>egress</code> <strong>NetworkPolicyegressRule</strong></td>
  <td><em>array</em></td>
  <td><code>egress</code> is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no <code>NetworkPolicies</code> selecting the pod, and cluster policy otherwise allows the traffic, or if the traffic matches at least one egress rule across all the <code>NetworkPolicy</code> objects whose <code>podSelector</code> matches the pod. If this field is empty, then this <code>NetworkPolicy</code> limits all outgoing traffic and serves solely to ensure that the pods it selects are isolated by default. The Operator automatically handles ingress rules based on the current running ports.</td>
  <td></td>
  <td></td>
</tr>
</tbody>
</table>