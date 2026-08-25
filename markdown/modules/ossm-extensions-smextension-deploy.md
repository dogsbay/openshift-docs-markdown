{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying `ServiceMeshExtension` resources {id="ossm-smextensions-deploy_{{ context }}"}

You can enable {{ SMProductName }} extensions using the `ServiceMeshExtension` resource. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.


:::note

When creating new WebAssembly extensions, use the `WasmPlugin` API. The `ServiceMeshExtension` API was deprecated in {{ SMProductName }} version 2.2 and removed in {{ SMProductName }} version 2.3.

:::


For a complete example that was built using the Rust SDK, take a look at the [header-append-filter](https://github.com/maistra/header-append-filter). It is a simple filter that appends one or more headers to the HTTP responses, with their names and values taken out from the `config` field of the extension. See a sample configuration in the snippet below.

**Procedure**

1.  Create the following example resource:
    ```yaml title="Example ServiceMeshExtension resource extension.yaml"
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
      image: quay.io/maistra-dev/header-append-filter:2.1
      phase: PostAuthZ
      priority: 100
    ```
1.  Apply your `extension.yaml` file with the following command:
    ```terminal
    $ oc apply -f <extension>.yaml
    ```