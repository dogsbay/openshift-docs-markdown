{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a trigger by using the Knative CLI {id="delete-kn-trigger_{{ context }}"}

You can use the `kn trigger delete` command to delete a trigger.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

*   Delete a trigger:
    ```terminal
    $ kn trigger delete <trigger_name>
    ```

**Verification**

1.  List existing triggers:
    ```terminal
    $ kn trigger list
    ```
1.  Verify that the trigger no longer exists:
    ```terminal title="Example output"
    No triggers found.
    ```