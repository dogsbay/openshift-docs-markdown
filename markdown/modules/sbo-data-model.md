{%- set _mod_docs_content_type = "CONCEPT" %}
# Data model {id="sbo-data-model_{{ context }}"}

The data model used in the annotations follows specific conventions. {._abstract}

Service binding annotations must use the following convention:

```yaml
service.binding(/<NAME>)?:
    "<VALUE>|(path=<JSONPATH_TEMPLATE>(,objectType=<OBJECT_TYPE>)?(,elementType=<ELEMENT_TYPE>)?(,sourceKey=<SOURCE_KEY>)?(,sourceValue=<SOURCE_VALUE>)?)"
```
where:

`<NAME>`
:   Specifies the name under which the binding value is to be exposed. You can exclude it only when the `objectType` parameter is set to `Secret` or `ConfigMap`.

`<VALUE>`
:   Specifies the constant value exposed when no `path` is set.

The data model provides the details on the allowed values and semantic for the `path`, `elementType`, `objectType`, `sourceKey`, and `sourceValue` parameters.

**Parameters and their descriptions**

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
  <th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>path</code></td>
  <td>JSONPath template that consists JSONPath expressions enclosed by curly braces {}.</td>
  <td>N/A</td>
</tr>
<tr>
  <td><code>elementType</code></td>
  <td>Specifies whether the value of the element referenced in the <code>path</code> parameter complies with any one of the following types:<br><br><ul><li><code>string</code></li><li><code>sliceOfStrings</code></li><li><code>sliceOfMaps</code></li></ul></td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>objectType</code></td>
  <td>Specifies whether the value of the element indicated in the <code>path</code> parameter refers to a <code>ConfigMap</code>, <code>Secret</code>, or plain string in the current namespace.</td>
  <td><code>Secret</code>, if <code>elementType</code> is non-string.</td>
</tr>
<tr>
  <td><code>sourceKey</code></td>
  <td>Specifies the key in the <code>ConfigMap</code> or <code>Secret</code> resource to be added to the binding secret when collecting the binding data. +<br><br>Note:<br><br><ul><li>When used in conjunction with <code>elementType</code>=<code>sliceOfMaps</code>, the <code>sourceKey</code> parameter specifies the key in the slice of maps whose value is used as a key in the binding secret.</li><li>Use this optional parameter to expose a specific entry in the referenced <code>Secret</code> or <code>ConfigMap</code> resource as binding data.</li><li>When not specified, all keys and values from the <code>Secret</code> or <code>ConfigMap</code> resource are exposed and are added to the binding secret.</li></ul></td>
  <td>N/A</td>
</tr>
<tr>
  <td><code>sourceValue</code></td>
  <td>Specifies the key in the slice of maps. +<br><br>Note:<br><br><ul><li>The value of this key is used as the base to generate the value of the entry for the key-value pair to be added to the binding secret.</li><li>In addition, the value of the <code>sourceKey</code> is used as the key of the entry for the key-value pair to be added to the binding secret.</li><li>It is mandatory only if <code>elementType</code>=<code>sliceOfMaps</code>.</li></ul></td>
  <td>N/A</td>
</tr>
</tbody>
</table>


:::note

The `sourceKey` and `sourceValue` parameters are applicable only if the element indicated in the `path` parameter refers to a `ConfigMap` or `Secret` resource.

:::