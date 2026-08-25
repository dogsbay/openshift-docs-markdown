{%- set _mod_docs_content_type = "CONCEPT" %}
# Migrating from `ServiceMeshExtension` to `WasmPlugin` resources {id="ossm-extensions-migration-overview_{{ context }}"}

The `ServiceMeshExtension` API, which was deprecated in {{ SMProductName }} version 2.2, was removed in {{ SMProductName }} version 2.3. If you are using the `ServiceMeshExtension` API, you must migrate to the `WasmPlugin` API to continue using your WebAssembly extensions.

The APIs are very similar. The migration consists of two steps:

1.  Renaming your plugin file and updating the module packaging.
1.  Creating a `WasmPlugin` resource that references the updated container image.

## API changes {id="ossm-extensions-migration-api-changes_{{ context }}"}

The new `WasmPlugin` API is similar to the `ServiceMeshExtension`, but with a few differences, especially in the field names:

**Field changes between `ServiceMeshExtensions` and `WasmPlugin`**

<table>
<tbody>
<tr>
  <td>ServiceMeshExtension</td>
  <td>WasmPlugin</td>
</tr>
<tr>
  <td><code>spec.config</code></td>
  <td><code>spec.pluginConfig</code></td>
</tr>
<tr>
  <td><code>spec.workloadSelector</code></td>
  <td><code>spec.selector</code></td>
</tr>
<tr>
  <td><code>spec.image</code></td>
  <td><code>spec.url</code></td>
</tr>
<tr>
  <td><code>spec.phase</code> valid values: PreAuthN, PostAuthN, PreAuthZ, PostAuthZ, PreStats, PostStats</td>
  <td><code>spec.phase</code> valid values: <empty>, AUTHN, AUTHZ, STATS</td>
</tr>
</tbody>
</table>

The following is an example of how a `ServiceMeshExtension` resource could be converted into a `WasmPlugin` resource.

```yaml title="ServiceMeshExtension resource"
apiVersion: maistra.io/v1
kind: ServiceMeshExtension
metadata:
  name: header-append
  namespace: istio-system
spec:
  workloadSelector:
    labels:
      app: httpbin
  config:
    first-header: some-value
    another-header: another-value
  image: quay.io/maistra-dev/header-append-filter:2.2
  phase: PostAuthZ
  priority: 100
```

```yaml title="New WasmPlugin resource equivalent to the ServiceMeshExtension above"
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: header-append
  namespace: istio-system
spec:
  selector:
    matchLabels:
      app: httpbin
  url: oci://quay.io/maistra-dev/header-append-filter:2.2
  phase: STATS
  pluginConfig:
    first-header: some-value
    another-header: another-value
```

## Container image format changes {id="ossm-extensions-migration-format-changes_{{ context }}"}

The new `WasmPlugin` container image format is similar to the `ServiceMeshExtensions`, with the following differences:

*   The `ServiceMeshExtension` container format required a metadata file named `manifest.yaml` in the root directory of the container filesystem. The `WasmPlugin` container format does not require a `manifest.yaml` file.
*   The `.wasm` file (the actual plugin) that previously could have any filename now must be named `plugin.wasm` and must be located in the root directory of the container filesystem.