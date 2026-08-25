{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding tags for an external image {id="images-imagestream-external-image-tags_{{ context }}"}

To enable {{ product_title }} resources to track and consume container images sourced from external registries, add tags to the corresponding image streams. This action integrates external image content securely into your cluster’s local image management system. {._abstract}

**Procedure**

*   Add tags pointing to internal or external images, by using the `oc tag` command for all tag-related operations:
    ```terminal
    $ oc tag <repository/image> <image-name:tag>
    ```

    For example, this command maps the `docker.io/python:3.6.0` image to the `3.6` tag in the `python` image stream.
    ```terminal
    $ oc tag docker.io/python:3.6.0 python:3.6
    ```
    ```terminal title="Example output"
    Tag python:3.6 set to docker.io/python:3.6.0.
    ```

    If the external image is secured, you must create a secret with credentials for accessing that registry.