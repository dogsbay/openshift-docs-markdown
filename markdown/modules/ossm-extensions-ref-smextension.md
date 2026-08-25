{%- set _mod_docs_content_type = "REFERENCE" %}
# ServiceMeshExtension reference {id="ossm-wasm-ref-smextension_{{ context }}"}

The ServiceMeshExtension API provides a mechanism to extend the functionality provided by the Istio proxy through WebAssembly filters. There are two parts to writing a WebAssembly extension:

1.  Write your extension using an SDK that exposes the proxy-wasm API and compile it to a WebAssembly module.
1.  Package it into a container.


:::note

When creating new WebAssembly extensions, use the `WasmPlugin` API. The `ServiceMeshExtension` API, which was deprecated in {{ SMProductName }} version 2.2, was removed in {{ SMProductName }} version 2.3.

:::


**ServiceMeshExtension Field Reference**

<table>
<tbody>
<tr>
  <td>Field</td>
  <td>Description</td>
</tr>
<tr>
  <td>metadata.namespace</td>
  <td>The <code>metadata.namespace</code> field of a <code>ServiceMeshExtension</code> source has a special semantic: if it equals the Control Plane Namespace, the extension will be applied to all workloads in the Service Mesh that match its <code>workloadSelector</code> value. When deployed to any other Mesh Namespace, it will only be applied to workloads in that same Namespace.</td>
</tr>
<tr>
  <td>spec.workloadSelector</td>
  <td>The <code>spec.workloadSelector</code> field has the same semantic as the <code>spec.selector</code> field of the <a href="https://istio.io/v1.6/docs/reference/config/networking/gateway/#Gateway">Istio Gateway resource</a>. It will match a workload based on its Pod labels. If no <code>workloadSelector</code> value is specified, the extension will be applied to all workloads in the namespace.</td>
</tr>
<tr>
  <td>spec.config</td>
  <td>This is a structured field that will be handed over to the extension, with the semantics dependent on the extension you are deploying.</td>
</tr>
<tr>
  <td>spec.image</td>
  <td>A container image URI pointing to the image that holds the extension.</td>
</tr>
<tr>
  <td>spec.phase</td>
  <td>The phase determines where in the filter chain the extension is injected, in relation to existing Istio functionality like Authentication, Authorization and metrics generation. Valid values are: PreAuthN, PostAuthN, PreAuthZ, PostAuthZ, PreStats, PostStats. This field defaults to the value set in the <code>manifest.yaml</code> file of the extension, but can be overwritten by the user.</td>
</tr>
<tr>
  <td>spec.priority</td>
  <td>If multiple extensions with the same <code>spec.phase</code> value are applied to the same workload instance, the <code>spec.priority</code> value determines the ordering of execution. Extensions with higher priority will be executed first. This allows for inter-dependent extensions. This field defaults to the value set in the <code>manifest.yaml</code> file of the extension, but can be overwritten by the user.</td>
</tr>
</tbody>
</table>