{%- set _mod_docs_content_type = "CONCEPT" %}
# Container Storage Interface migration {id="container-storage-interface-migration-con_{{ context }}"}

CSI migration redirects operations that target a deprecated in-tree volume plugin to the equivalent CSI driver, so that existing persistent volumes keep working after the in-tree plugin is removed.