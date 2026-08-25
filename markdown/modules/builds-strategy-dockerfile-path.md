{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using Dockerfile path {id="builds-strategy-dockerfile-path_{{ context }}"}

By default, docker builds use a Dockerfile located at the root of the context specified in the `BuildConfig.spec.source.contextDir` field.

The `dockerfilePath` field allows the build to use a different path to locate your Dockerfile, relative to the `BuildConfig.spec.source.contextDir` field. It can be a different file name than the default Dockerfile, such as `MyDockerfile`, or a path to a Dockerfile in a subdirectory, such as `dockerfiles/app1/Dockerfile`.

**Procedure**

*   Set the `dockerfilePath` field for the build to use a different path to locate your Dockerfile:
    ```yaml
    strategy:
      dockerStrategy:
        dockerfilePath: dockerfiles/app1/Dockerfile
    ```