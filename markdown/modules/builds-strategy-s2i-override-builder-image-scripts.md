{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding source-to-image builder image scripts {id="builds-strategy-s2i-override-builder-image-scripts_{{ context }}"}

You can override the `assemble`, `run`, and `save-artifacts` source-to-image (S2I) scripts provided by the builder image.

**Procedure**

*   To override the `assemble`, `run`, and `save-artifacts` S2I scripts provided by the builder image, complete one of the following actions:
    *   Provide an `assemble`, `run`, or `save-artifacts` script in the `.s2i/bin` directory of your application source repository.
    *   Provide a URL of a directory containing the scripts as part of the strategy definition in the `BuildConfig` object. For example:
        ```yaml
        strategy:
          sourceStrategy:
            from:
              kind: "ImageStreamTag"
              name: "builder-image:latest"
            scripts: "http://somehost.com/scripts_directory" # (1)
        ```
        1.  The build process appends `run`, `assemble`, and `save-artifacts` to the path. If any or all scripts with these names exist, the build process uses these scripts in place of scripts with the same name that are provided in the image.

            :::note

            Files located at the `scripts` URL take precedence over files located in `.s2i/bin` of the source repository.
            
            :::