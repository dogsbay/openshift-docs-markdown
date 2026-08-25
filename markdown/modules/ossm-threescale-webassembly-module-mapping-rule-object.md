# The 3scale WebAssembly module mapping_rule object {id="ossm-threescale-webassembly-module-mapping-rule-object_{{ context }}"}

The `mapping_rule` object is part of an array in the `mapping_rules` object.

The `mapping_rule` object fields specify the following information:

*   The _HTTP request method_ to match.
*   A pattern to match the path against.
*   The 3scale methods to report along with the amount to report. The order in which you specify the fields determines the evaluation order.

***`mapping_rule` object fields***

<table>
<thead>
<tr>
  <th>Name</th>
  <th>Description</th>
  <th>Required</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>method</code></td>
  <td>Specifies a string representing an HTTP request method, also known as verb. Values accepted match the any one of the accepted HTTP method names, case-insensitive. A special value of any matches any method.</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>pattern</code></td>
  <td>The pattern to match the HTTP request's URI path component. This pattern follows the same syntax as documented by 3scale. It allows wildcards (use of the asterisk (*) character) using any sequence of characters between braces such as <code>{{ this }}</code>.</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>usages</code></td>
  <td>A list of <code>usage</code> objects. When the rule matches, all methods with their <code>deltas</code> are added to the list of methods sent to 3scale for authorization and reporting.<br><br>Embed the <code>usages</code> object with the following required fields:<br><br><ul><li><code>name</code>: The <code>method</code> system name to report.</li><li><code>delta</code>: For how much to increase that <code>method</code> by.</li></ul></td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>last</code></td>
  <td>Whether the successful matching of this rule should stop the evaluation of more mapping rules.</td>
  <td>Optional Boolean. The default is <code>false</code></td>
</tr>
</tbody>
</table>

The following example is independent of existing hierarchies between methods in 3scale. That is, anything run on the 3scale side will not affect this. For example, the _Hits_ metric might be a parent of them all, so it stores 4 hits due to the sum of all reported methods in the authorized request and calls the 3scale `Authrep` API endpoint.

The example below uses a `GET` request to a path, `/products/1/sold`, that matches all the rules.

```yaml title="mapping_rules GET request example"
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: <threescale_wasm_plugin_name>
spec:
  pluginConfig:
# ...
    mapping_rules:
      - method: GET
        pattern: /
        usages:
          - name: hits
            delta: 1
      - method: GET
        pattern: /products/
        usages:
          - name: products
            delta: 1
      - method: ANY
        pattern: /products/{id}/sold
        usages:
          - name: sales
            delta: 1
          - name: products
            delta: 1
# ...
```

All `usages` get added to the request the module performs to 3scale with usage data as follows:

*   Hits: 1
*   products: 2
*   sales: 1