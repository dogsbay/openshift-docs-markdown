{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing logs in the Kiali console {id="ossm-viewing-logs_{{ context }}"}

You can view logs for your workloads in the Kiali console.  The **Workload Detail** page includes a **Logs** tab which displays a unified logs view that displays both application and proxy logs. You can select how often you want the log display in Kiali to be refreshed.

To change the logging level on the logs displayed in Kiali, you change the logging configuration for the workload or the proxy.

**Prerequisites**

*   Service Mesh installed and configured.
*   Kiali installed and configured.
*   The address for the Kiali console.
*   Application or Bookinfo sample application added to the mesh.

**Procedure**

1.  Launch the Kiali console.
1.  Click **Log In With OpenShift**.

    The Kiali Overview page displays namespaces that have been added to the mesh that you have permissions to view.
1.  Click **Workloads**.
1.  On the **Workloads** page, select the project from the **Namespace** menu.
1.  If necessary, use the filter to find the workload whose logs you want to view.  Click the workload **Name**.  For example, click **ratings-v1**.
1.  On the **Workload Details** page, click the **Logs** tab to view the logs for the workload.


:::tip

If you do not see any log entries, you may need to adjust either the Time Range or the Refresh interval.

:::