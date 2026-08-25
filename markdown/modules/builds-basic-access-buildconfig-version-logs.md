{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing BuildConfig logs for a given version build {id="builds-basic-access-buildconfig-version-logs_{{ context }}"}

You can access logs for a given version build for a `BuildConfig` using the web console or the CLI.

**Procedure**

*   To stream the logs for a given version build for a `BuildConfig`, enter the following command:
    ```terminal
    $ oc logs --version=<number> bc/<buildconfig_name>
    ```