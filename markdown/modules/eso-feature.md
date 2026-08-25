{%- set _mod_docs_content_type = "REFERENCE" %}
# Feature {id="eso-feature_{{ context }}"}

The `Feature` field configures an optional capability that is applied by the `external-secrets-operator` across its managed deployments. {._abstract}

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
  <td><strong>FeatureName</strong><br><br><em>string</em></td>
  <td><code>name</code> identifies the optional feature to configure. Currently, the only supported value is <code>UnsafeAllowGenericTargets</code>.</td>
  <td></td>
  <td>Enum: [<code>UnsafeAllowGenericTargets</code>]</td>
</tr>
<tr>
  <td><code>mode</code></td>
  <td><strong>mode</strong><br><br><em>string</em></td>
  <td><code>mode</code> mode controls whether the feature is active. When set to <code>Enabled</code>, the Operator applies the configuration associated with the named feature to the relevant managed deployments. For <code>UnsafeAllowGenericTargets</code>, this passes the <code>--unsafe-allow-generic-targets</code> flag to the <code>external-secrets</code> core controller, allowing <code>ExternalSecret</code> resources to target Kubernetes resources other than <code>Secrets</code>. For example, ConfigMaps or custom resources.<br><br><dl><dt>Warning</dt><dd>Generic targets require additional RBAC permissions on the affected operand; enabling this feature without the appropriate permissions will cause reconciliation failures.</dd></dl></td>
  <td>Disabled</td>
  <td>Enum:[<code>Enabled</code> <code>Disabled</code>]</td>
</tr>
</tbody>
</table>