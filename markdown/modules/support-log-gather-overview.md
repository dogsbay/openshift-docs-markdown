{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ support_log_gather }} {id="support-log-gather-overview_{{ context }}"}

{{ support_log_gather }} Operator builds on the functionality of the traditional `must-gather` tool to automate the collection of debugging data. It streamlines troubleshooting by packaging the collected information into a single `.tar` file and automatically uploading it to the specified Red&#160;Hat Support case. {._abstract}

{%- set FeatureName = "Support Log Gather" %}
{% include "./snippets/technology-preview.md" %}

The key features of {{ support_log_gather }} include the following:

*   **No administrator privileges required**: Enables you to collect and upload logs without needing elevated permissions, making it easier for non-administrators to gather data securely.
*   **Simplified log collection**: Collects debugging data from the cluster, such as resource definitions and service logs.
*   **Configurable data upload**: Provides configuration options to either automatically upload the `.tar` file to a support case, or store it locally for manual upload.