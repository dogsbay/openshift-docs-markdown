{%- set _mod_docs_content_type = "REFERENCE" %}
# componentConfig {id="eso-comoponent-config_{{ context }}"}

The `componentConfig` field defines configuration overrides for a specific `external-secrets` component. {._abstract}

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
  <td><code>componentName</code></td>
  <td><em>string</em></td>
  <td><code>componentName</code> identifies which <code>external-secrets</code> component this configuration applies to. Valid values are <code>ExternalSecretsCoreController</code>, <code>Webhook</code>, <code>CertController</code>, and <code>BitwardenSDKServer</code>.</td>
  <td></td>
  <td>Enum: [<code>ExternalSecretsCoreController</code>, <code>Webhook</code>, <code>CertController</code>, <code>BitwardenSDKServer</code>]<br><br>Required</td>
</tr>
<tr>
  <td><code>deploymentConfigs</code></td>
  <td><em>object</em></td>
  <td><code>deploymentConfigs</code> specifies overrides for the Kubernetes Deployment resource of this component.</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td><code>overrideEnv</code></td>
  <td><strong>EnvVar</strong><br><br><em>array</em></td>
  <td><code>overrideEnv</code> specifies custom environment variables for this component's container. These are merged with operator-managed environment variables, with user-defined values taking precedence. Environment variable names starting with <code>HOSTNAME</code>, <code>KUBERNETES_</code> or <code>EXTERNAL_SECRETS_</code> are reserved and are not allowed.</td>
  <td></td>
  <td>The maximum number of items is 50.</td>
</tr>
</tbody>
</table>