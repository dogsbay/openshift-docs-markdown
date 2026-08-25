{%- set _mod_docs_content_type = "PROCEDURE" %}
# Streaming build logs {id="builds-basic-start-logs_{{ context }}"}

You can specify the `--follow` flag to stream the build’s logs in `stdout`.

**Procedure**

*   To manually stream a build’s logs in `stdout`, enter the following command:
    ```terminal
    $ oc start-build <buildconfig_name> --follow
    ```