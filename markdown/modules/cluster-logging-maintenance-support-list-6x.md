{%- set _mod_docs_content_type = "REFERENCE" %}
# Unsupported configurations {id="cluster-logging-maintenance-support-list_{{ context }}"}

You must set the Red&#160;Hat OpenShift Logging Operator to the `Unmanaged` state to modify the following components:

*   The collector configuration file
*   The collector daemonset

Explicitly unsupported cases include:

*   **Configuring the logging collector using environment variables**. You cannot use environment variables to modify the log collector.
*   **Configuring how the log collector normalizes logs**. You cannot modify default log normalization.