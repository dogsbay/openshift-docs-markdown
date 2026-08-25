{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing the Dockerfile FROM image {id="builds-strategy-docker-from-image_{{ context }}"}

You can replace the `FROM` instruction of the Dockerfile with the `from` parameters of the `BuildConfig` object. If the Dockerfile uses multi-stage builds, the image in the last `FROM` instruction will be replaced.

**Procedure**

*   To replace the `FROM` instruction of the Dockerfile with the `from` parameters of the `BuildConfig` object, add the following settings to the `BuildConfig` object:
    ```yaml
    strategy:
      dockerStrategy:
        from:
          kind: "ImageStreamTag"
          name: "debian:latest"
    ```