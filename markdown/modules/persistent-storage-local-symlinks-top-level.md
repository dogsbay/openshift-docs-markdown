{%- set _mod_docs_content_type = "CONCEPT" %}
# Local Storage Operator symlinks management {id="local-storage-symlinks-top-level_{{ context }}"}

To prevent storage breakage during {{ product_title }} upgrades, {{ product_title }} provides a mechanism, the `LocalVolumeDeviceLink` Custom Resource Definition, to detect, alert, and remap broken symlinks without manual node-level intervention.