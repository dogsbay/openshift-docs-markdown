# The 3scale WebAssembly module backend object {id="ossm-threescale-webassembly-module-backend-object_{{ context }}"}

The `backend` top-level object specifies how to access the 3scale Service Management API for authorizing and reporting HTTP requests. This service is provided by the _Backend_ component of 3scale.

```yaml
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: <threescale_wasm_plugin_name>
spec:
  pluginConfig:
# ...
    backend:
      name: backend
      upstream: <object>
# ...
```

**`backend` object fields**

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
  <td>An identifier for the 3scale backend, currently not referenced elsewhere.</td>
  <td>Optional</td>
</tr>
<tr>
  <td><code>upstream</code></td>
  <td>The details about a network host to be contacted. This must refer to the 3scale Account Management API host, known, system.</td>
  <td>Yes. The most important and required field.</td>
</tr>
</tbody>
</table>