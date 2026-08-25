{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting environment variables when starting a build {id="builds-basic-start-environment-variable_{{ context }}"}

You can specify the `--env` flag to set any desired environment variable for the build.

**Procedure**

*   To specify a desired environment variable, enter the following command:
    ```terminal
    $ oc start-build <buildconfig_name> --env=<key>=<value>
    ```