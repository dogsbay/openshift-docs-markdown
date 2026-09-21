{%- set _mod_docs_content_type = "CONCEPT" %}
# Resolve catalog content {id="resolve-catalog-content-con_{{ context }}"}

When you specify the cluster extension that you want to install in a custom resource (CR), {{ olmv1_first }} uses catalog selection to resolve what content is installed. You can select catalogs by name or label, exclude catalogs with match expressions, and set catalog priority to decide which source resolves first when more than one catalog provides the requested package.