{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring periodic importing of manifest lists {id="images-imagestream-periodic-import-list_{{ context }}"}

To maintain up-to-date image references for complex, multi-architecture images, configure periodic importing of manifest lists. To periodically re-import a manifest list, you can use the `--scheduled` flag, ensuring your image stream tracks the latest versions from external registries. {._abstract}

**Procedure**

*   Set the image stream to periodically update the manifest list by entering the following command:
    ```terminal
    $ oc import-image <multiarch-image-stream-tag>  --from=<registry>/<project_name>/<image-name> \
    --import-mode='PreserveOriginal' --scheduled=true
    ```