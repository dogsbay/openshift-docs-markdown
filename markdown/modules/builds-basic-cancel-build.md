{%- set _mod_docs_content_type = "PROCEDURE" %}
# Canceling a build {id="builds-basic-cancel-build_{{ context }}"}

You can cancel a build using the web console, or with the following CLI command.

**Procedure**

*   To manually cancel a build, enter the following command:
    ```terminal
    $ oc cancel-build <build_name>
    ```