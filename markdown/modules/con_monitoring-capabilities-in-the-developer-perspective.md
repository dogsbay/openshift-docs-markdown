{%- set _newdoc_version = "2.18.7" -%}
{%- set _template_generated = "2026-08-03" -%}
{%- set _mod_docs_content_type = "CONCEPT" %}

# Monitoring capabilities from the Developer perspective {id="monitoring-capabilities-in-the-developer-perspective_{{ context }}"}

The **Observe** view in the **Developer** perspective shows monitoring tools filtered by your project access permissions to track performance, troubleshoot issues, and respond to alerts. You can monitor CPU, memory, bandwidth, and network metrics. {._abstract}

{% include "./snippets/snip-unified-perspective-web-console.md" %}

The **Observe** view in the **Developer** perspective uses the same monitoring components as the **Administrator** perspective, but displays only the projects you have permissions for. You can monitor your applications without seeing cluster-wide metrics you cannot access.


:::note

A project represents a Kubernetes namespace with additional annotations. When you select a project in the **Developer** perspective, you view the topology and metrics for that namespace.

:::


After selecting a project in the **Observe** view, the following tabs become available:

*   **Events**: Cluster events filtered by the selected project
*   **Alerting rules**: Configured alerting rules and their current state
*   **Alerts**: Firing alerts for the selected project
*   **Dashboards**: Pre-built visual dashboards showing resource consumption graphs including CPU usage, memory usage, bandwidth consumption, and network-related information
*   **Metrics**: Prometheus query interface for analyzing specific metrics
*   **Silences**: Create and manage alert silences to temporarily suppress alert notifications

The monitoring interface is the same as the **Administrator** perspective, with the key difference being project filtering based on your access permissions.


:::note

In the **Administrator** perspective, the monitoring tabs are immediately available with a project dropdown for filtering. In the **Developer** perspective, you must select a project before the tabs are displayed. This scoping enables your developers to observe their applications by using the same monitoring tools as cluster administrators, focused only on their assigned projects.

:::