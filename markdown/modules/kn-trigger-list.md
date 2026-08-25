{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing triggers by using the Knative CLI {id="kn-trigger-list_{{ context }}"}

You can use the `kn trigger list` command to list existing triggers in your cluster.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have installed the Knative (`kn`) CLI.

**Procedure**

1.  Print a list of available triggers:
    ```terminal
    $ kn trigger list
    ```
    ```terminal title="Example output"
    NAME    BROKER    SINK           AGE   CONDITIONS   READY   REASON
    email   default   ksvc:edisplay   4s    5 OK / 5     True
    ping    default   ksvc:edisplay   32s   5 OK / 5     True
    ```
1.  Optional: Print a list of triggers in JSON format:
    ```terminal
    $ kn trigger list -o json
    ```