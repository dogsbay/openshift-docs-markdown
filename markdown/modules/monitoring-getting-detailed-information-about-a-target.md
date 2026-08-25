{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting detailed information about a metrics target {id="getting-detailed-information-about-a-target_{{ context }}"}

You can use the {{ product_title }} web console to view, search, and filter the endpoints that are currently targeted for scraping, which helps you to identify and troubleshoot problems. For example, you can view the current status of targeted endpoints to see when {{ product_title }} monitoring is not able to scrape metrics from a targeted component.

{% if not (openshift_dedicated or openshift_rosa) %}
The **Metrics targets** page shows targets for default {{ product_title }} projects and for user-defined projects.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
The **Metrics targets** page shows targets for user-defined projects.
{% endif %}

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa) %}
*   You have access to the cluster as an administrator for the project for which you want to view metrics targets.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  In the {{ product_title }} web console, go to **Observe** → **Targets**. The **Metrics targets** page opens with a list of all service endpoint targets that are being scraped for metrics.

    This page shows details about targets for default {{ product_title }} and user-defined projects. This page lists the following information for each target:
    *   Service endpoint URL being scraped
    *   The `ServiceMonitor` resource being monitored
    *   The **up** or **down** status of the target
    *   Namespace
    *   Last scrape time
    *   Duration of the last scrape
1.  Optional: To find a specific target, perform any of the following actions:
<table>
<thead>
<tr>
  <th>Option</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Filter the targets by status and source.</td>
  <td>Choose filters in the <strong>Filter</strong> list.<br><br>The following filtering options are available:<br><br><ul><li><strong>Status</strong> filters:<ul><li><strong>Up</strong>. The target is currently up and being actively scraped for metrics.</li><li><strong>Down</strong>. The target is currently down and not being scraped for metrics.</li></ul></li><li><strong>Source</strong> filters:<ul><li><strong>Platform</strong>. Platform-level targets relate only to default {{ product_rosa }} projects. These projects provide core {{ product_rosa }} functionality.</li><li><strong>User</strong>. User targets relate to user-defined projects. These projects are user-created and can be customized.</li></ul></li></ul></td>
</tr>
<tr>
  <td>Search for a target by name or label.</td>
  <td>Enter a search term in the <strong>Text</strong> or <strong>Label</strong> field next to the search box.</td>
</tr>
<tr>
  <td>Sort the targets.</td>
  <td>Click one or more of the <strong>Endpoint Status</strong>, <strong>Namespace</strong>, <strong>Last Scrape</strong>, and <strong>Scrape Duration</strong> column headers.</td>
</tr>
</tbody>
</table>

1.  Click the URL in the **Endpoint** column for a target to go to its **Target details** page. This page provides information about the target, including the following information:
    *   The endpoint URL being scraped for metrics
    *   The current **Up** or **Down** status of the target
    *   A link to the namespace
    *   A link to the `ServiceMonitor` resource details
    *   Labels attached to the target
    *   The most recent time that the target was scraped for metrics