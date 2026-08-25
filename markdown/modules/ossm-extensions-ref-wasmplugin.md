{%- set _mod_docs_content_type = "REFERENCE" %}
# WasmPlugin API reference {id="ossm-wasm-ref-wasmplugin_{{ context }}"}

The WasmPlugins API provides a mechanism to extend the functionality provided by the Istio proxy through WebAssembly filters.

You can deploy multiple WasmPlugins. The `phase` and `priority` settings determine the order of execution (as part of Envoy’s filter chain), allowing the configuration of complex interactions between user-supplied WasmPlugins and Istio’s internal filters.

In the following example, an authentication filter implements an OpenID flow and populates the Authorization header with a JSON Web Token (JWT). Istio authentication consumes this token and deploys it to the ingress gateway. The WasmPlugin file lives in the proxy sidecar filesystem. Note the field `url`.

```yaml
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: openid-connect
  namespace: istio-ingress
spec:
  selector:
    matchLabels:
      istio: ingressgateway
  url: file:///opt/filters/openid.wasm
  sha256: 1ef0c9a92b0420cf25f7fe5d481b231464bc88f486ca3b9c83ed5cc21d2f6210
  phase: AUTHN
  pluginConfig:
    openid_server: authn
    openid_realm: ingress
```

Below is the same example, but this time an Open Container Initiative (OCI) image is used instead of a file in the filesystem. Note the fields `url`, `imagePullPolicy`, and `imagePullSecret`.

```yaml
apiVersion: extensions.istio.io/v1alpha1
kind: WasmPlugin
metadata:
  name: openid-connect
  namespace: istio-system
spec:
  selector:
    matchLabels:
      istio: ingressgateway
  url: oci://private-registry:5000/openid-connect/openid:latest
  imagePullPolicy: IfNotPresent
  imagePullSecret: private-registry-pull-secret
  phase: AUTHN
  pluginConfig:
    openid_server: authn
    openid_realm: ingress
```

**WasmPlugin Field Reference**

<table>
<tbody>
<tr>
  <td>Field</td>
  <td>Type</td>
  <td>Description</td>
  <td>Required</td>
</tr>
<tr>
  <td>spec.selector</td>
  <td>WorkloadSelector</td>
  <td>Criteria used to select the specific set of pods/VMs on which this plugin configuration should be applied. If omitted, this configuration will be applied to all workload instances in the same namespace. If the <code>WasmPlugin</code> field is present in the config root namespace, it will be applied to all applicable workloads in any namespace.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.url</td>
  <td>string</td>
  <td>URL of a Wasm module or OCI container. If no scheme is present, defaults to <code>oci://</code>, referencing an OCI image. Other valid schemes are <code>file://</code> for referencing .wasm module files present locally within the proxy container, and <code>http[s]://</code> for .wasm module files hosted remotely.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.sha256</td>
  <td>string</td>
  <td>SHA256 checksum that will be used to verify the Wasm module or OCI container. If the <code>url</code> field already references a SHA256 (using the <code>@sha256:</code> notation), it must match the value of this field. If an OCI image is referenced by tag and this field is set, its checksum will be verified against the contents of this field after pulling.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.imagePullPolicy</td>
  <td>PullPolicy</td>
  <td>The pull behavior to be applied when fetching an OCI image. Only relevant when images are referenced by tag instead of SHA. Defaults to the value <code>IfNotPresent</code>, except when an OCI image is referenced in the <code>url</code> field and the <code>latest</code> tag is used, in which case the value <code>Always</code> is the default, mirroring K8s behavior. Setting is ignored if the <code>url</code> field is referencing a Wasm module directly using <code>file://</code> or <code>http[s]://</code>.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.imagePullSecret</td>
  <td>string</td>
  <td>Credentials to use for OCI image pulling. The name of a secret in the same namespace as the <code>WasmPlugin</code> object that contains a pull secret for authenticating against the registry when pulling the image.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.phase</td>
  <td>PluginPhase</td>
  <td>Determines where in the filter chain this <code>WasmPlugin</code> object is injected.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.priority</td>
  <td><code>int64</code></td>
  <td>Determines the ordering of <code>WasmPlugins</code> objects that have the same <code>phase</code> value. When multiple <code>WasmPlugins</code> objects are applied to the same workload in the same phase, they will be applied by priority and in descending order. If the <code>priority</code> field is not set, or two <code>WasmPlugins</code> objects with the same value, the ordering will be determined from the name and namespace of the <code>WasmPlugins</code> objects. Defaults to the value <code>0</code>.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.pluginName</td>
  <td>string</td>
  <td>The plugin name used in the Envoy configuration. Some Wasm modules might require this value to select the Wasm plugin to execute.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.pluginConfig</td>
  <td>Struct</td>
  <td>The configuration that will be passed on to the plugin.</td>
  <td>No</td>
</tr>
<tr>
  <td>spec.pluginConfig.verificationKey</td>
  <td>string</td>
  <td>The public key used to verify signatures of signed OCI images or Wasm modules. Must be supplied in PEM format.</td>
  <td>No</td>
</tr>
</tbody>
</table>

The `WorkloadSelector` object specifies the criteria used to determine if a filter can be applied to a proxy. The matching criteria includes the metadata associated with a proxy, workload instance information such as labels attached to the pod/VM, or any other information that the proxy provides to Istio during the initial handshake. If multiple conditions are specified, all conditions need to match in order for the workload instance to be selected. Currently, only label based selection mechanism is supported.

**WorkloadSelector**

<table>
<tbody>
<tr>
  <td>Field</td>
  <td>Type</td>
  <td>Description</td>
  <td>Required</td>
</tr>
<tr>
  <td>matchLabels</td>
  <td>map<string, string></td>
  <td>One or more labels that indicate a specific set of pods/VMs on which a policy should be applied. The scope of label search is restricted to the configuration namespace in which the resource is present.</td>
  <td>Yes</td>
</tr>
</tbody>
</table>

The `PullPolicy` object specifies the pull behavior to be applied when fetching an OCI image.

**PullPolicy**

<table>
<tbody>
<tr>
  <td>Value</td>
  <td>Description</td>
</tr>
<tr>
  <td><empty></td>
  <td>Defaults to the value <code>IfNotPresent</code>, except for OCI images with tag latest, for which the default will be the value <code>Always</code>.</td>
</tr>
<tr>
  <td>IfNotPresent</td>
  <td>If an existing version of the image has been pulled before, that will be used. If no version of the image is present locally, we will pull the latest version.</td>
</tr>
<tr>
  <td>Always</td>
  <td>Always pull the latest version of an image when applying this plugin.</td>
</tr>
</tbody>
</table>

`Struct` represents a structured data value, consisting of fields which map to dynamically typed values. In some languages, Struct might be supported by a native representation. For example, in scripting languages like JavaScript a struct is represented as an object.

**Struct**

<table>
<tbody>
<tr>
  <td>Field</td>
  <td>Type</td>
  <td>Description</td>
</tr>
<tr>
  <td>fields</td>
  <td>map<string, Value></td>
  <td>Map of dynamically typed values.</td>
</tr>
</tbody>
</table>

`PluginPhase` specifies the phase in the filter chain where the plugin will be injected.

**PluginPhase**

<table>
<tbody>
<tr>
  <td>Field</td>
  <td>Description</td>
</tr>
<tr>
  <td><empty></td>
  <td>Control plane decides where to insert the plugin. This will generally be at the end of the filter chain, right before the Router. Do not specify PluginPhase if the plugin is independent of others.</td>
</tr>
<tr>
  <td>AUTHN</td>
  <td>Insert plugin before Istio authentication filters.</td>
</tr>
<tr>
  <td>AUTHZ</td>
  <td>Insert plugin before Istio authorization filters and after Istio authentication filters.</td>
</tr>
<tr>
  <td>STATS</td>
  <td>Insert plugin before Istio stats filters and after Istio authorization filters.</td>
</tr>
</tbody>
</table>