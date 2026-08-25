{%- set _mod_docs_content_type = "PROCEDURE" %}
# Examine the default configuration {id="file-integrity-examine-default-config_{{ context }}"}

The default File Integrity Operator configuration is stored in a config map with the same name as the `FileIntegrity` CR. {._abstract}

**Procedure**

*   To examine the default config, run:
    ```terminal
    $ oc describe cm/worker-fileintegrity
    ```