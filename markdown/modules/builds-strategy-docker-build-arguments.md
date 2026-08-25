{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding Docker build arguments {id="builds-strategy-docker-build-arguments_{{ context }}"}

You can set [Docker build arguments](https://docs.docker.com/engine/reference/builder/#arg) using the `buildArgs` array. The build arguments are passed to Docker when a build is started.


:::tip

See [Understand how ARG and FROM interact](https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact) in the Dockerfile reference documentation.

:::


**Procedure**

*   To set Docker build arguments, add entries to the `buildArgs` array, which is located in the `dockerStrategy` definition of the `BuildConfig` object. For example:
    ```yaml
    dockerStrategy:
    ...
      buildArgs:
        - name: "version"
          value: "latest"
    ```

    :::note

    Only the `name` and `value` fields are supported. Any settings on the `valueFrom` field are ignored.
    
    :::