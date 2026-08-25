{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying architecture for --import-mode {id="images-imagestream-specify-architecture_{{ context }}"}

To control the architecture of your imported images and ensure proper deployment, use the `--import-mode=` flag. You can swap your imported image stream between multi-architecture and single architecture by excluding or including the `--import-mode=` flag as needed. {._abstract}

**Procedure**

*   Run the following command to update your image stream from multi-architecture to single architecture by excluding the `--import-mode=` flag:
    ```terminal
    $ oc import-image <multiarch-image-stream-tag> --from=<registry>/<project_name>/<image-name>
    ```
*   Run the following command to update your image stream from single-architecture to multi-architecture:
{% include "./snippets/update-image-stream-to-multi-arch.md" %}