{%- set _mod_docs_content_type = "PROCEDURE" %}
# Canceling all builds {id="builds-basic-cancel-all_{{ context }}"}

You can cancel all builds from the build configuration with the following CLI command.

**Procedure**

*   To cancel all builds, enter the following command:
    ```terminal
    $ oc cancel-build bc/<buildconfig_name>
    ```