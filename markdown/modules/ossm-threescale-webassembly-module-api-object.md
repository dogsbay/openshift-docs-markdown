# The 3scale WebAssembly module api object {id="ossm-threescale-webassembly-module-api-object_{{ context }}"}

The `api` top-level string from the 3scale WebAssembly module defines which version of the configuration the module will use.


:::note

A non-existent or unsupported version of the `api` object renders the 3scale WebAssembly module inoperable.

:::


```yaml title="The api top-level string example"
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: <threescale_wasm_plugin_name>
  namespace: <bookinfo>
spec:
  pluginConfig:
    api: v1
# ...
```

The `api` entry defines the rest of the values for the configuration. The only accepted value is `v1`. New settings that break compatibility with the current configuration or need more logic that modules using `v1` cannot handle, will require different values.