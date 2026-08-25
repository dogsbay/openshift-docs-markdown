{%- set _mod_docs_content_type = "REFERENCE" %}
# configMapKeyReference {id="eso-configmap-key-reference_{{ context }}"}

The `configMapKeyReference` specifies a specific key in a ConfigMap. {._abstract}

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
  <td><code>name</code> specifies the name of the ConfigMap resource being referred to.</td>
  <td></td>
  <td>The maximum length of the name is 253 characters.<br><br>The minimum length of the name is 1 character.</td>
</tr>
<tr>
  <td><code>key</code></td>
  <td><em>string</em></td>
  <td><code>key</code> specifies the specific key to be used in the ConfigMap. When ommitted, defaults to <code>ca-bundle.crt</code>.</td>
  <td><code>ca-bundle.crt</code></td>
  <td>The maximum length of the key is 253 characters.<br><br>The minimum length of the key is 1 character.<br><br>The pattern is: <code>^[-._a-zA-Z0-9]+$</code></td>
</tr>
</tbody>
</table>