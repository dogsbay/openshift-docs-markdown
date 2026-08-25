{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating to `WasmPlugin` resources {id="ossm-extensions-migrating-to-wasmplugin_{{ context }}"}

To upgrade your WebAssembly extensions from the `ServiceMeshExtension` API to the `WasmPlugin` API, you rename your plugin file.

**Prerequisites**

*   `ServiceMeshControlPlane` is upgraded to version 2.2 or later.

**Procedure**

1.  Update your container image. If the plugin is already in `/plugin.wasm` inside the container, skip to the next step.  If not:
    1.  Ensure the plugin file is named `plugin.wasm`. You must name the extension file `plugin.wasm`.
    1.  Ensure the plugin file is located in the root (/) directory. You must store extension files in the root of the container filesystem..
    1.  Rebuild your container image and push it to a container registry.
1.  Remove the `ServiceMeshExtension` resource and create a `WasmPlugin` resource that refers to the new container image you built.