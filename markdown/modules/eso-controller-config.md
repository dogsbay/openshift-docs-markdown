{%- set _mod_docs_content_type = "REFERENCE" %}
# controllerConfig {id="eso-controller-config_{{ context }}"}

The `controllerConfig` specifies the configurations used by the controller when installing the `external-secrets` operand and the plugins. {._abstract}

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
  <td><code>certProvider</code></td>
  <td><em>string</em></td>
  <td><code>certProvider</code> defines the configuration for the certificate providers used to manage TLS certificates for webhook and plugins.</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td><code>labels</code></td>
  <td><em>object (keys:string, values:string)</em></td>
  <td><code>labels</code> field applies labels to all resources created for the <code>external-secrets</code> operand deployment.</td>
  <td></td>
  <td>The maximum number of properties is 20.<br><br>The minimum number of properties is 0.</td>
</tr>
<tr>
  <td><code>annotations</code></td>
  <td><em>object (keys:string, values:string)</em></td>
  <td><code>annotations</code> add custom annotations to all the resources created for the <code>external-secrets</code> deployment. The annotations are merged with any default annotations set by the Operator. User-specified annotations take precedence over defaults in case of conflicts. Annotation keys containing the reserved domains <code>kubernetes.io/</code>, <code>openshift.io/</code>, <code>k8s.io/</code>, or <code>cert-manager.io/</code> (including subdomains like <code>*.kubernetes.io/</code>) are not allowed.</td>
  <td></td>
  <td>The maximum number of annotations is 20.<br><br>The minimum number of annotations is 0.</td>
</tr>
<tr>
  <td><code>networkPolicies</code></td>
  <td><em>networkPolicy array</em></td>
  <td><code>networkPolicies</code> specifies the list of network policy configurations to be applied to the <code>external-secrets</code> pods. Each entry allows specifying a name for the generated <code>NetworkPolicy</code> object, along with its full Kubernetes <code>NetworkPolicy</code> definition. The Operator prepends <code>eso-user-</code> to the provided name when creating the Kubernetes object. If this field is not provided, <code>external-secrets</code> components are isolated with <code>deny-all</code> network policies, which prevents proper operation.</td>
  <td></td>
  <td>The maximum number of items is 50.<br><br>The minimum number of items is 0.</td>
</tr>
<tr>
  <td><code>componentConfigs</code></td>
  <td><em>ComponentConfig array</em></td>
  <td><code>componentConfigs</code> allows specifying deployment-level configuration overrides for individual <code>external-secrets</code> components. This field enables fine-grained control over deployment settings for each component independently. Each component can have only one configuration entry.</td>
  <td></td>
  <td>The maximum number of items is 4.</td>
</tr>
<tr>
  <td><code>trustedCABundle</code> <strong>ConfigMapKeyReference</strong></td>
  <td><em>object</em></td>
  <td><code>trustedCABundle</code> references a ConfigMap containing PEM-encoded CA certificates for the <code>external-secrets</code> core controller to trust when making outbound TLS connections. If specified, this bundle is used for all outbound TLS traffic, including connections to external secret management systems and configured proxies.<br><br>The ConfigMap must exist in the <code>external-secrets</code> Operand namespace and must not carry the CNO inject-trusted-cabundle label when proxy is configured. When omitted, external providers use standard system certificates. When proxy is configured, proxy TLS connections use the operator-managed {{ product_title }} trusted CA bundle injected by the Cluster Network Operator.</td>
  <td></td>
  <td></td>
</tr>
</tbody>
</table>