{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing CVO log level (Technology Preview) {id="changing-log-data_{{ context }}"}

{%- set FeatureName = "Changing the CVO log level" %}
{% include "./snippets/technology-preview.md" %}

Adjust the verbosity of the Cluster Version Operator (CVO) log to troubleshoot update issues or diagnose errors by using four available log levels. {._abstract}

The following list outlines the four log levels:

*   `Normal` - The default log level. Contains working log information. Used when everything is fine. Provides helpful notices for auditing or common operations.
*   `Debug` - Used when something goes wrong. Expect a higher quantity of notices.
*   `Trace` - Used to diagnose errors.
*   `TraceAll` - Used to get the complete body content of the logs.


:::note

If `TraceAll` is turned on in a production cluster it may cause widespread performance issues and large log files.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.
*   You have the `TechPreviewNoUpgrade` feature set enabled.

**Procedure**

1.  Enter the following command into the CLI to change the log level:

    ```terminal
    $ oc patch clusterversionoperator/cluster --type=merge --patch '{"spec":{"operatorLogLevel":"<log_level>"}}'
    ```

    ```terminal title="Example output"
    clusterversionoperator.operator.openshift.io/cluster patched
    ```