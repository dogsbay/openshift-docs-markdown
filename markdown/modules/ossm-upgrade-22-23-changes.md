{%- set _mod_docs_content_type = "CONCEPT" %}
# Upgrade changes from version 2.2 to version 2.3 {id="ossm-upgrade-22-23-changes_{{ context }}"}

Upgrading the {{ SMProductShortName }} control plane from version 2.2 to 2.3 introduces the following behavioral changes:

*   This release requires use of the `WasmPlugin` API. Support for the `ServiceMeshExtension` API, which was deprecated in 2.2, has now been removed. If you attempt to upgrade while using the `ServiceMeshExtension` API, then the upgrade fails.