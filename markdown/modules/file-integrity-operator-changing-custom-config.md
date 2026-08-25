{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the custom File Integrity configuration {id="file-integrity-operator-changing-custom-config_{{ context }}"}

To change the File Integrity configuration, never change the generated config map. Instead, change the config map that is linked to the `FileIntegrity` object through the `spec.name`, `namespace`, and `key` attributes. {._abstract}

**Procedure**

*   Update the config map referenced by the `spec.config` attributes of the `FileIntegrity` object.