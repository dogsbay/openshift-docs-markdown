{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using FROM image for custom builds {id="builds-strategy-custom-from-image_{{ context }}"}

You can use the `customStrategy.from` section to indicate the image to use for the custom build.

**Procedure**

*   Set the `customStrategy.from` section:
    ```yaml
    strategy:
      customStrategy:
        from:
          kind: "DockerImage"
          name: "openshift/sti-image-builder"
    ```