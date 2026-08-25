{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing BuildConfig logs {id="builds-basic-access-buildconfig-logs_{{ context }}"}

You can access `BuildConfig` logs using the web console or the CLI.

**Procedure**

*   To stream the logs of the latest build for a `BuildConfig`, enter the following command:
    ```terminal
    $ oc logs -f bc/<buildconfig_name>
    ```