{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating a trigger by using the Knative CLI {id="kn-trigger-update_{{ context }}"}

You can use the `kn trigger update` command with certain flags to update attributes for a trigger.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your {{ product_title }} cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

*   Update a trigger:
    ```terminal
    $ kn trigger update <trigger_name> --filter <key=value> --sink <sink_name> [flags]
    ```
    *   You can update a trigger to filter exact event attributes that match incoming events. For example, using the `type` attribute:
        ```terminal
        $ kn trigger update <trigger_name> --filter type=knative.dev.event
        ```
    *   You can remove a filter attribute from a trigger. For example, you can remove the filter attribute with key `type`:
        ```terminal
        $ kn trigger update <trigger_name> --filter type-
        ```
    *   You can use the `--sink` parameter to change the event sink of a trigger:
        ```terminal
        $ kn trigger update <trigger_name> --sink ksvc:my-event-sink
        ```