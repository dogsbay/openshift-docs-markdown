{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing metrics in the Kiali console {id="ossm-viewing-metrics_{{ context }}"}

You can view inbound and outbound metrics for your applications, workloads, and services in the Kiali console.  The Detail pages include the following tabs:

*   inbound Application metrics
*   outbound Application metrics
*   inbound Workload metrics
*   outbound Workload metrics
*   inbound Service metrics

These tabs display predefined metrics dashboards, tailored to the relevant application, workload or service level. The application and workload detail views show request and response metrics such as volume, duration, size, or TCP traffic. The service detail view shows request and response metrics for inbound traffic only.

Kiali lets you customize the charts by choosing the charted dimensions. Kiali can also present metrics reported by either source or destination proxy metrics. And for troubleshooting, Kiali can overlay trace spans on the metrics.

**Prerequisites**

*   Service Mesh installed and configured.
*   Kiali installed and configured.
*   The address for the Kiali console.
*   (Optional) Distributed tracing installed and configured.

**Procedure**

1.  Launch the Kiali console.
1.  Click **Log In With OpenShift**.

    The Kiali Overview page displays namespaces that have been added to the mesh that you have permissions to view.
1.  Click either **Applications**, **Workloads**, or **Services**.
1.  On the **Applications**, **Workloads**, or **Services** page, select the project from the **Namespace** menu.
1.  If necessary, use the filter to find the application, workload, or service whose logs you want to view.  Click the **Name**.
1.  On the **Application Detail**, **Workload Details**, or **Service Details** page, click either the **Inbound Metrics** or **Outbound Metrics** tab to view the metrics.