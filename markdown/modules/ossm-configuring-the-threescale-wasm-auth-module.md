# Configuring the threescale-wasm-auth module {id="ossm-configuring-the-threescale-wasm-auth-module_{{ context }}"}

Cluster administrators on {{ product_title }} can configure the `threescale-wasm-auth` module to authorize HTTP requests to 3scale API Management through an application binary interface (ABI). The ABI defines the interaction between host and the module, exposing the hosts services, and allows you to use the module to process proxy requests.

## The WasmPlugin API extension {id="the-wasmplugin-api-extension_{{ context }}"}

{{ SMProductShortName }} provides a custom resource definition to specify and apply Proxy-WASM extensions to sidecar proxies, known as [`WasmPlugin`](/service_mesh/v2x/ossm-extensions#ossm-extensions-wasmplugin-format_ossm-extensions). {{ SMProductShortName }} applies this custom resource to the set of workloads that require HTTP API management with 3scale.

{% if openshift_enterprise %}
See [custom resource definition](/operators/understanding/crds/crd-extending-api-with-crds#crd-extending-api-with-crds) for more information.
{% endif %}


:::note

Configuring the WebAssembly extension is currently a manual process. Support for fetching the configuration for services from the 3scale system will be available in a future release.

:::


**Prerequisites**

*   Identify a Kubernetes workload and namespace on your {{ SMProductShortName }} deployment that you will apply this module.
*   You must have a 3scale tenant account. See [SaaS](https://www.3scale.net/signup) or [3scale 2.11 On-Premises](https://access.redhat.com/documentation/en-us/red_hat_3scale_api_management/2.11/html-single/installing_3scale/index#install-threescale-on-openshift-guide) with a matching service and relevant applications and metrics defined.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   If you apply the module to the `<product_page>` microservice in the `bookinfo` namespace, see the [Bookinfo sample application](/service_mesh/v2x/ossm-create-mesh#ossm-tutorial-bookinfo-overview_ossm-create-mesh).
    {%- endif %}
    *   The following example is the YAML format for the custom resource for `threescale-wasm-auth` module.
    This example refers to the upstream Maistra version of {{ SMProductShortName }}, `WasmPlugin` API. You must declare the namespace where the `threescale-wasm-auth` module is deployed, alongside a `selector` to identify the set of applications the module will apply to:
        ```yaml
        apiVersion: extensions.istio.io/v1alpha1
        kind: WasmPlugin
        metadata:
          name: <threescale_wasm_plugin_name>
          namespace: <bookinfo> (1)
        spec:
          selector: (2)
            labels:
              app: <product_page>
          pluginConfig: <yaml_configuration>
          url: oci://registry.redhat.io/3scale-amp2/3scale-auth-wasm-rhel8:0.0.3
          phase: AUTHZ
          priority: 100
        ```
        1.  The `namespace`.
        1.  The `selector`.
*   The `spec.pluginConfig` field depends on the module configuration and it is not populated in the previous example. Instead, the example uses the `<yaml_configuration>` placeholder value. You can use the format of this custom resource example.
    *   The `spec.pluginConfig` field varies depending on the application. All other fields persist across multiple instances of this custom resource. As examples:
        *   `url`:  Only changes when newer versions of the module are deployed.
        *   `phase`:  Remains the same, since this module needs to be invoked after the proxy has done any local authorization, such as validating OpenID Connect (OIDC) tokens.
*   After you have the module configuration in `spec.pluginConfig` and the rest of the custom resource, apply it with the `oc apply` command:
    ```terminal
    $ oc apply -f threescale-wasm-auth-bookinfo.yaml
    ```