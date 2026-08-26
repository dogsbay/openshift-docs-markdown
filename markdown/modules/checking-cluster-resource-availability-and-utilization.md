{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking cluster resource availability and utilization {id="checking-cluster-resource-availability-and-utilization_{{ context }}"}

{{ product_title }} provides a comprehensive set of monitoring dashboards that you can analyze to better understand the state of cluster components. {._abstract}

As an administrator, you can access dashboards for core {{ product_title }} components, including:

*   etcd
*   Kubernetes compute resources
*   Kubernetes network resources
*   Prometheus
*   Dashboards relating to cluster and node performance

**Figure 1. Example compute resources dashboard**

![Screenshot of the {{ product_title }} monitoring dashboard showing compute resources including CPU usage](/images/monitoring-dashboard-compute-resources.png)

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Observe** → **Dashboards**.
1.  Choose a dashboard in the **Dashboard** list. Some dashboards, such as the **etcd** dashboard, produce additional sub-menus when selected.
1.  Optional: Select a time range for the graphs in the **Time Range** list.
    *   Select a pre-defined time period.
    *   Set a custom time range by selecting **Custom time range** in the **Time Range** list.
        1.  Input or select the **From** and **To** dates and times.
        1.  Click **Save** to save the custom time range.
1.  Optional: Select a **Refresh Interval**.
1.  Hover over each of the graphs within a dashboard to display detailed information about specific items.