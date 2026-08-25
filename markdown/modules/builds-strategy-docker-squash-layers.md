{%- set _mod_docs_content_type = "PROCEDURE" %}
# Squashing layers with docker builds {id="builds-strategy-docker-squash-layers_{{ context }}"}

Docker builds normally create a layer representing each instruction in a Dockerfile. Setting the `imageOptimizationPolicy` to `SkipLayers` merges all instructions into a single layer on top of the base image.

**Procedure**

*   Set the `imageOptimizationPolicy` to `SkipLayers`:
    ```yaml
    strategy:
      dockerStrategy:
        imageOptimizationPolicy: SkipLayers
    ```