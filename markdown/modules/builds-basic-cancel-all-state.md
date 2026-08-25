{%- set _mod_docs_content_type = "PROCEDURE" %}
# Canceling all builds in a given state {id="builds-basic-cancel-all-state_{{ context }}"}

You can cancel all builds in a given state, such as `new` or `pending`, while ignoring the builds in other states.

**Procedure**

*   To cancel all in a given state, enter the following command:
    ```terminal
    $ oc cancel-build bc/<buildconfig_name>
    ```