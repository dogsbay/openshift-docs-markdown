{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the FileIntegrity custom resource status {id="checking-the-file-integrity-CR-status_{{ context }}"}

The `FileIntegrity` custom resource (CR) reports its status through the `.status.phase` subresource. {._abstract}

**Procedure**

*   To query the `FileIntegrity` CR status, run:
    ```terminal
    $ oc get fileintegrities/worker-fileintegrity  -o jsonpath="{ .status.phase }"
    ```
    ```terminal title="Example output"
    Active
    ```