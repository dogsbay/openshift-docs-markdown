{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing build logs {id="builds-basic-access-build-logs_{{ context }}"}

You can access build logs using the web console or the CLI.

**Procedure**

*   To stream the logs using the build directly, enter the following command:
    ```terminal
    $ oc describe build <build_name>
    ```