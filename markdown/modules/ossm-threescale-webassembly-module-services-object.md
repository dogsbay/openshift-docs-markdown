# The 3scale WebAssembly module services object {id="ossm-threescale-webassembly-module-services-object_{{ context }}"}

The `services` top-level object specifies which service identifiers are handled by this particular instance of the `module`.

Since accounts have multiple services, you must specify which ones are handled. The rest of the configuration revolves around how to configure services.

The `services` field is required. It is an array that must contain at least one service to be useful.

```yaml
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: <threescale_wasm_plugin_name>
spec:
  pluginConfig:
# ...
    services:
    - id: "2555417834789"
      token: service_token
      authorities:
        - "*.app"
        - 0.0.0.0
        - "0.0.0.0:8443"
      credentials: <object>
      mapping_rules: <object>
# ...
```

Each element in the `services` array represents a 3scale service.

***`services` object fields***

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
  <td><code>ID</code></td>
  <td>An identifier for this 3scale service, currently not referenced elsewhere.</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>token</code></td>
  <td>This <code>token</code> can be found in the proxy configuration for your service in System or you can retrieve the it from System with following <code>curl</code> command:<br><br>`curl \https://<system_host>/admin/api/services/<service_id>/proxy/configs/production/latest.json?access_token=<access_token>" \</td>
  <td>jq '.proxy_config.content.backend_authentication_value`</td>
</tr>
<tr>
  <td>Optional</td>
  <td><code>authorities</code></td>
  <td>An array of strings, each one representing the <em>Authority</em> of a <em>URL</em> to match. These strings accept glob patterns supporting the asterisk (<em>*</em>), plus sign (<em>+</em>), and question mark (<em>?</em>) matchers.</td>
</tr>
<tr>
  <td>Yes</td>
  <td><code>credentials</code></td>
  <td>An object defining which kind of credentials to look for and where.</td>
</tr>
<tr>
  <td>Yes</td>
  <td><code>mapping_rules</code></td>
  <td>An array of objects representing mapping rules and 3scale methods to hit.</td>
</tr>
<tr>
  <td>Optional</td>
</tr>
</tbody>
</table>