# The 3scale WebAssembly module system object {id="ossm-threescale-webassembly-module-system-object_{{ context }}"}

The `system` top-level object specifies how to access the 3scale Account Management API for a specific account. The `upstream` field is the most important part of the object. The `system` object is optional, but recommended unless you are providing a fully static configuration for the 3scale WebAssembly module, which is an option if you do not want to provide connectivity to the _system_ component of 3scale.

When you provide static configuration objects in addition to the `system` object, the static ones always take precedence.

```yaml
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: <threescale_wasm_plugin_name>
spec:
  pluginConfig:
    system:
      name: <saas_porta>
      upstream: <object>
      token: <my_account_token>
      ttl: 300
# ...
```

**`system` object fields**

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
  <td><code>name</code></td>
  <td>An identifier for the 3scale service, currently not referenced elsewhere.</td>
  <td>Optional</td>
</tr>
<tr>
  <td><code>upstream</code></td>
  <td>The details about a network host to be contacted. <code>upstream</code> refers to the 3scale Account Management API host known as system.</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>token</code></td>
  <td>A 3scale personal access token with read permissions.</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>ttl</code></td>
  <td>The minimum amount of seconds to consider a configuration retrieved from this host as valid before trying to fetch new changes. The default is 600 seconds (10 minutes). <strong>Note:</strong> there is no maximum amount, but the module will generally fetch any configuration within a reasonable amount of time after this TTL elapses.</td>
  <td>Optional</td>
</tr>
</tbody>
</table>