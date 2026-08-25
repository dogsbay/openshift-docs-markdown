{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring SSL/TLS when importing manifest lists {id="images-imagestream-ssl-import-list_{{ context }}"}

To control connection security and access policies for manifest lists sourced from external repositories, configure SSL/TLS settings during image importing. To configure SSL/TLS when importing a manifest list, you can use the `--insecure` flag to bypass standard certificate validation requirements if necessary. {._abstract}

**Procedure**

*   Set `--insecure=true` so that importing a manifest list skips SSL/TLS verification. For example:
    ```terminal
    $ oc import-image <multiarch-image-stream-tag> --from=<registry>/<project_name>/<image-name> \
    --import-mode='PreserveOriginal' --insecure=true
    ```