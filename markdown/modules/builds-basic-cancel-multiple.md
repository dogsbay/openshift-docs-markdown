{%- set _mod_docs_content_type = "PROCEDURE" %}
# Canceling multiple builds {id="builds-basic-cancel-multiple_{{ context }}"}

You can cancel multiple builds with the following CLI command.

**Procedure**

*   To manually cancel multiple builds, enter the following command:
    ```terminal
    $ oc cancel-build <build1_name> <build2_name> <build3_name>
    ```