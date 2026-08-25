{%- set _mod_docs_content_type = "REFERENCE" %}
# Trust manager custom resource fields {id="cert-manager-trust-manager-fields_{{ context }}"}

You can configure the behavior of the trust-manager operand by modifying the `TrustManager` custom resource (CR). {._abstract}

{%- set FeatureName = "Distributing certificates by using trust manager" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

The following table lists the parameters for configuring trust-manager settings.

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
  <td><code>spec.controllerConfig.labels</code></td>
  <td><code>object</code></td>
  <td>Optional. Specifies a list of key-value pairs to apply as labels to all resources created for the trust manager deployment.</td>
</tr>
<tr>
  <td><code>spec.controllerConfig.annotations</code></td>
  <td><code>object</code></td>
  <td>Optional. Specifies a list of key-value pairs to apply as annotations to all resources created for the trust manager deployment.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.affinity</code></td>
  <td><code>object</code></td>
  <td>Optional. Specifies the scheduling constraints for the trust manager pod. For more information, see <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/">Assigning Pods to Nodes</a>.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.defaultCAPackage</code></td>
  <td><code>object</code></td>
  <td>Optional. Configures the default CA package for trust manager. When enabled, the Operator uses the {{ product_title }} trusted CA bundle injection mechanism.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.defaultCAPackage.policy</code></td>
  <td><code>string</code></td>
  <td>Optional. Specifies whether the default CA package feature is enabled. When set to <code>Enabled</code>, the Operator configures the trusted CA bundle to trust manager. When set to <code>Disabled</code>, no default CA package is configured. The default value is <code>Disabled</code>.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>To enable the <code>useDefaultCAs: true</code> setting in your Bundle CR, you must set the value to <code>Enabled</code>.</dd></dl></td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.filterExpiredCertificates</code></td>
  <td><code>string</code></td>
  <td>Optional. Specifies whether trust manager filters out expired certificates from trust bundles before distributing them. When set to <code>Enabled</code>, the expired certificates are removed from bundles. When set to <code>Disabled</code>, the expired certificates are included in bundles. The default value is <code>Disabled</code>.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.logLevel</code></td>
  <td><code>integer</code></td>
  <td>Optional. Specifies the verbosity of trust manager logging. The minimum value is <code>1</code> and the maximum value is <code>5</code>. The default value is <code>1</code>.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.logFormat</code></td>
  <td><code>string</code></td>
  <td>Optional. Specifies the output format for trust manager logging. The supported formats are <code>text</code> and <code>json</code>. The default value is <code>text</code>.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.nodeSelector</code></td>
  <td><code>object</code></td>
  <td>Optional. Specifies the key-value pairs that limit which nodes can host the trust manager pod. You can specify a maximum of 50 node selectors. For more information, see <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/">Assigning Pods to Nodes</a>.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.resources</code></td>
  <td><code>object</code></td>
  <td>Optional. Defines the compute resource requirements for the trust manager pod.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.secretTargets</code></td>
  <td><code>object</code></td>
  <td>Optional. Defines the configuration for writing trust bundles to <code>Secrets</code>.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.secretTargets.authorizedSecrets</code></td>
  <td><code>array</code></td>
  <td>Optional. A list of specific secret names that trust manager is authorized to create and update.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>If <code>spec.trustManagerConfig.secretTargets.policy</code> is set to <code>Custom</code>, you must specify a value. If <code>spec.trustManagerConfig.secretTargets.policy</code> is set to <code>Disabled</code>, you must not specify a value.</dd></dl></td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.secretTargets.policy</code></td>
  <td><code>string</code></td>
  <td>Optional. Specifies whether trust manager can write trust bundles to <code>Secrets</code>. When set to <code>Disabled</code>, trust manager cannot write trust bundles to <code>Secrets</code>. When set to <code>Custom</code>, trust manager is granted permission to create and update only the secrets listed in the <code>authorizedSecrets</code> parameter. The default value is <code>Disabled</code>.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.tolerations</code></td>
  <td><code>array</code></td>
  <td>Optional. Allows the trust manager pod to be scheduled on nodes with specific taints. You can specify a maximum of 50 tolerations.</td>
</tr>
<tr>
  <td><code>spec.trustManagerConfig.trustNamespace</code></td>
  <td><code>string</code></td>
  <td>Optional. Specifies the namespace where trust manager locates CA certificate sources, such as ConfigMaps and Secrets. This namespace must exist before you create the TrustManager custom resource. The default value is <code>cert-manager</code>.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>You cannot change the value once set.</dd></dl></td>
</tr>
</tbody>
</table>