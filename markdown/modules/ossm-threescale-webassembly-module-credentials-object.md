# The 3scale WebAssembly module credentials object {id="ossm-threescale-webassembly-module-credentials-object_{{ context }}"}

The `credentials` object is a component of the `service` object. `credentials` specifies which kind of credentials to be looked up and the steps to perform this action.

All fields are optional, but you must specify at least one, `user_key` or `app_id`. The order in which you specify each credential is irrelevant because it is pre-established by the module. Only specify one instance of each credential.

```yaml
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: <threescale_wasm_plugin_name>
spec:
  pluginConfig:
# ...
    services:
    - credentials:
        user_key: <array_of_lookup_queries>
        app_id: <array_of_lookup_queries>
        app_key: <array_of_lookup_queries>
# ...
```

***`credentials` object fields***

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
  <td><code>user_key</code></td>
  <td>This is an array of lookup queries that defines a 3scale user key. A user key is commonly known as an API key.</td>
  <td>Optional</td>
</tr>
<tr>
  <td><code>app_id</code></td>
  <td>This is an array of lookup queries that define a 3scale application identifier. Application identifiers are provided by 3scale or by using an identity provider like <a href="https://access.redhat.com/products/red-hat-single-sign-on">Red Hat Single Sign-On (RH-SS0)</a>, or OpenID Connect (OIDC). The resolution of the lookup queries specified here, whenever it is successful and resolves to two values, it sets up the <code>app_id</code> and the <code>app_key</code>.</td>
  <td>Optional</td>
</tr>
<tr>
  <td><code>app_key</code></td>
  <td>This is an array of lookup queries that define a 3scale application key. Application keys without a resolved <code>app_id</code> are useless, so only specify this field when <code>app_id</code> has been specified.</td>
  <td>Optional</td>
</tr>
</tbody>
</table>