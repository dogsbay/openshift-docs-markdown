{%- set _mod_docs_content_type = "REFERENCE" %}
# `ServiceMeshExtension` container format {id="ossm-extensions-smextension-format_{{ context }}"}

You must have a `.wasm` file containing the bytecode of your WebAssembly module, and a `manifest.yaml` file in the root of the container filesystem to make your container image a valid extension image.


:::note

When creating new WebAssembly extensions, use the `WasmPlugin` API. The `ServiceMeshExtension` API was deprecated in {{ SMProductName }} version 2.2 and was removed in {{ SMProductName }} version 2.3.

:::


```yaml title="manifest.yaml"
schemaVersion: 1

name: <your-extension>
description: <description>
version: 1.0.0
phase: PreAuthZ
priority: 100
module: extension.wasm
```

**Field Reference for manifest.yml**

<table>
<tbody>
<tr>
  <td>Field</td>
  <td>Description</td>
  <td>Required</td>
</tr>
<tr>
  <td>schemaVersion</td>
  <td>Used for versioning of the manifest schema. Currently the only possible value is <code>1</code>.</td>
  <td>This is a required field.</td>
</tr>
<tr>
  <td>name</td>
  <td>The name of your extension.</td>
  <td>This field is just metadata and currently unused.</td>
</tr>
<tr>
  <td>description</td>
  <td>The description of your extension.</td>
  <td>This field is just metadata and currently unused.</td>
</tr>
<tr>
  <td>version</td>
  <td>The version of your extension.</td>
  <td>This field is just metadata and currently unused.</td>
</tr>
<tr>
  <td>phase</td>
  <td>The default execution phase of your extension.</td>
  <td>This is a required field.</td>
</tr>
<tr>
  <td>priority</td>
  <td>The default priority of your extension.</td>
  <td>This is a required field.</td>
</tr>
<tr>
  <td>module</td>
  <td>The relative path from the container filesystem's root to your WebAssembly module.</td>
  <td>This is a required field.</td>
</tr>
</tbody>
</table>