{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying metrics for user-defined projects with the {{ product_title }} web console {id="querying-metrics-for-user-defined-projects-with-mon-dashboard_{{ context }}"}

Monitor user-defined workloads by using the {{ product_title }} metrics query browser. The query browser uses Prometheus Query Language (PromQL) queries to examine metrics visualized on a plot. {._abstract}

As a developer, you must specify a project name when querying metrics. You must have the required privileges to view metrics for the selected project.

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}

:::note

Developers cannot access the third-party UIs provided with {{ product_title }} monitoring.

:::

{% endif %}

**Prerequisites**

*   You have access to the cluster as a developer or as a user with view permissions for the project that you are viewing metrics for.
*   You have enabled monitoring for user-defined projects.
*   You have deployed a service in a user-defined project.
*   You have created a `ServiceMonitor` custom resource definition (CRD) for the service to define how the service is monitored.

**Procedure**

1.  In the {{ product_title }} web console, click **Observe** -> **Metrics**.
1.  To add one or more queries, perform any of the following actions:
    | Option | Description |
    | --- | --- |
    | Select an existing query. | From the **Select query** drop-down list, select an existing query. |
    | Create a custom query. | Add your Prometheus Query Language (PromQL) query to the **Expression** field. As you type a PromQL expression, autocomplete suggestions appear in a drop-down list. These suggestions include functions, metrics, labels, and time tokens. Use the keyboard arrows to select one of these suggested items and then press Enter to add the item to your expression. Move your mouse pointer over a suggested item to view a brief description of that item. |
    | Add multiple queries. | Click **Add query**. |
    | Duplicate an existing query. | Click the options menu {{ kebab }} next to the query, then choose **Duplicate query**. |
    | Disable a query from being run. | Click the options menu {{ kebab }} next to the query and choose **Disable query**. |
1.  To run queries that you created, click **Run queries**. The metrics from the queries are visualized on the plot. If a query is invalid, the UI shows an error message.

    :::note

    *   When drawing time series graphs, queries that operate on large amounts of data might time out or overload the browser. To avoid this, click **Hide graph** and calibrate your query by using only the metrics table. Then, after finding a feasible query, enable the plot to draw the graphs.
    *   By default, the query table shows an expanded view that lists every metric and its current value. Click the **˅** down arrowhead to minimize the expanded view for a query.
    
    :::

1.  Optional: Save the page URL to use this set of queries again in the future.
1.  Explore the visualized metrics. Initially, all metrics from all enabled queries are shown on the plot. Select which metrics are shown by performing any of the following actions:
<table>
<thead>
<tr>
  <th>Option</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Hide all metrics from a query.</td>
  <td>Click the options menu {{ kebab }} for the query and click <strong>Hide all series</strong>.</td>
</tr>
<tr>
  <td>Hide a specific metric.</td>
  <td>Go to the query table and click the colored square near the metric name.</td>
</tr>
<tr>
  <td>Zoom into the plot and change the time range.</td>
  <td>Perform one of the following actions:<br><br><ul><li>Visually select the time range by clicking and dragging on the plot horizontally.</li><li>Use the menu to select the time range.</li></ul></td>
</tr>
<tr>
  <td>Reset the time range.</td>
  <td>Click <strong>Reset zoom</strong>.</td>
</tr>
<tr>
  <td>Display outputs for all queries at a specific point in time.</td>
  <td>Hover over the plot at the point you are interested in. The query outputs appear in a pop-up box.</td>
</tr>
<tr>
  <td>Hide the plot.</td>
  <td>Click <strong>Hide graph</strong>.</td>
</tr>
</tbody>
</table>