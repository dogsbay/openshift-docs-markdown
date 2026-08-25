{%- set _mod_docs_content_type = "REFERENCE" %}
# Common configurable fields in the CertManager CR for the cert-manager components {id="cert-manager-common-configuration-fields_{{ context }}"}

You can configure common fields in the `spec.controllerConfig`, `spec.webhookConfig`, and `spec.cainjectorConfig` sections in the `CertManager` CR to customize the cert-manager components. {._abstract}

***Common configurable fields in the CertManager CR for the cert-manager components***

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
  <td><code>overrideArgs</code></td>
  <td><code>string</code></td>
  <td>You can override the supported arguments for the cert-manager components.</td>
</tr>
<tr>
  <td><code>overrideEnv</code></td>
  <td><code>dict</code></td>
  <td>You can override the supported environment variables for the cert-manager controller. This field is only supported for the cert-manager controller component.</td>
</tr>
<tr>
  <td><code>overrideReplicas</code></td>
  <td><code>int</code></td>
  <td>You can configure the replicas for the cert-manager components. The default value is <code>1</code>. For production environments, the following replica counts are recommended:<br><br><ul><li>controller: 2</li><li>cainjector: 2</li><li>webhook: At least 3.</li></ul></td>
</tr>
<tr>
  <td><code>overrideResources</code></td>
  <td><code>object</code></td>
  <td>You can configure the CPU and memory limits for the cert-manager components.</td>
</tr>
<tr>
  <td><code>overrideScheduling</code></td>
  <td><code>object</code></td>
  <td>You can configure the pod scheduling constraints for the cert-manager components.</td>
</tr>
</tbody>
</table>