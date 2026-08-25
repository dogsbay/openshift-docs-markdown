{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Developer and non-administrator steps {id="developer-and-non-administrator-steps"}
{%- set context = "developer-and-non-administrator-steps" %}

After monitoring for user-defined projects is enabled and configured, developers and other non-administrator users can then perform the following activities to set up and use monitoring for their own projects:

*   [Deploy and monitor services](/observability/monitoring/configuring-user-workload-monitoring/configuring-metrics-uwm#setting-up-metrics-collection-for-user-defined-projects_configuring-metrics-uwm).
*   [Create and manage alerting rules](/observability/monitoring/managing-alerts/managing-alerts-as-a-developer#managing-alerting-rules-for-user-defined-projects-uwm_managing-alerts-as-a-developer).
*   [Receive and manage alerts](/observability/monitoring/managing-alerts/managing-alerts-as-a-developer#managing-alerts-as-a-developer) for your projects.
*   If granted the `alert-routing-edit` cluster role, [configure alert routing](/observability/monitoring/configuring-user-workload-monitoring/configuring-alerts-and-notifications-uwm#configuring-alert-routing-for-user-defined-projects_configuring-alerts-and-notifications-uwm).
*   [View dashboards](/observability/monitoring/accessing-metrics/accessing-metrics-as-a-developer#reviewing-monitoring-dashboards-developer_accessing-metrics-as-a-developer) by using the {{ product_title }} web console.
*   [Query the collected metrics](/observability/monitoring/accessing-metrics/accessing-metrics-as-a-developer#querying-metrics-for-user-defined-projects-with-mon-dashboard_accessing-metrics-as-a-developer) by creating PromQL queries or using predefined queries.