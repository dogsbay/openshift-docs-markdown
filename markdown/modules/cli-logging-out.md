{%- set _mod_docs_content_type = "PROCEDURE" %}
# Logging out of the OpenShift CLI {id="cli-logging-out_{{ context }}"}

You can log out the {{ oc_first }} to end your current session. {._abstract}

**Procedure**

*   Use the `oc logout` command.
    ```terminal
    $ oc logout
    ```
    ```terminal title="Example output"
    Logged "user1" out on "https://openshift.example.com"
    ```

    This deletes the saved authentication token from the server and removes it from
    your configuration file.