{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding the monitoring stack - key concepts {id="key-concepts"}
{%- set context = "key-concepts" %}

Get familiar with the {{ product_title }} monitoring concepts and terms. Learn about how you can improve performance and scale of your cluster, store and record data, manage metrics and alerts, and more.

## About performance and scalability {id="about-performance-and-scalability_{{ context }}"}

You can optimize the performance and scale of your clusters.
You can configure the monitoring stack by performing any of the following actions:

*   Control the placement and distribution of monitoring components:
    *   Use node selectors to move components to specific nodes.
    *   Assign tolerations to enable moving components to tainted nodes.
*   Use pod topology spread constraints.
*   Manage CPU and memory resources.
{%- if not (openshift_dedicated or openshift_rosa) %}
*   Set the body size limit for metrics scraping.
*   Use metrics collection profiles.
{%- endif %}

**Additional resources**
{._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring performance and scalability for core platform monitoring](/observability/monitoring/configuring-core-platform-monitoring/configuring-performance-and-scalability#configuring-performance-and-scalability)
{%- endif %}
*   [Configuring performance and scalability for user workload monitoring](/observability/monitoring/configuring-user-workload-monitoring/configuring-performance-and-scalability-uwm#configuring-performance-and-scalability-uwm)

{% leveloffset +2 %}{% include "./modules/monitoring-using-node-selectors-to-move-monitoring-components.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-using-pod-topology-spread-constraints-for-monitoring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-about-specifying-limits-and-requests-for-monitoring-components.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +2 %}{% include "./modules/monitoring-configuring-metrics-collection-profiles.md" %}{% endleveloffset %}
{% endif %}

## About storing and recording data {id="about-storing-and-recording-data_{{ context }}" ._additional-resources}

You can store and record data to help you protect the data and use them for troubleshooting.
You can configure the monitoring stack by performing any of the following actions:

*   Configure persistent storage:
    *   Protect your metrics and alerting data from data loss by storing them in a persistent volume (PV). As a result, they can survive pods being restarted or recreated.
    *   Avoid getting duplicate notifications and losing silences for alerts when the Alertmanager pods are restarted.
*   Modify the retention time and size for Prometheus and Thanos Ruler metrics data.
*   Configure logging to help you troubleshoot issues with your cluster:
{%- if not (openshift_dedicated or openshift_rosa) %}
    *   Configure audit logs for Metrics Server.
{%- endif %}
    *   Set log levels for monitoring.
    *   Enable the query logging for Prometheus and Thanos Querier.

**Additional resources**
{._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Storing and recording data for core platform monitoring](/observability/monitoring/configuring-core-platform-monitoring/storing-and-recording-data#storing-and-recording-data)
{%- endif %}
*   [Storing and recording data for user workload monitoring](/observability/monitoring/configuring-user-workload-monitoring/storing-and-recording-data-uwm#storing-and-recording-data-uwm)

{% leveloffset +2 %}{% include "./modules/monitoring-retention-time-and-size-for-prometheus-metrics-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-understanding-metrics.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring metrics for core platform monitoring](/observability/monitoring/configuring-core-platform-monitoring/configuring-metrics#configuring-metrics)
{%- endif %}
*   [Configuring metrics for user workload monitoring](/observability/monitoring/configuring-user-workload-monitoring/configuring-metrics-uwm#configuring-metrics-uwm)
*   [Accessing metrics as an administrator](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#accessing-metrics-as-an-administrator)
*   [Accessing metrics as a developer](/observability/monitoring/accessing-metrics/accessing-metrics-as-a-developer#accessing-metrics-as-a-developer)

{% leveloffset +2 %}{% include "./modules/monitoring-controlling-the-impact-of-unbound-attributes-in-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-adding-cluster-id-labels-to-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-about-monitoring-dashboards.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Reviewing monitoring dashboards as a cluster administrator](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#reviewing-monitoring-dashboards-admin_accessing-metrics-as-an-administrator)
*   [Reviewing monitoring dashboards as a developer](/observability/monitoring/accessing-metrics/accessing-metrics-as-a-developer#reviewing-monitoring-dashboards-developer_accessing-metrics-as-a-developer)

{% leveloffset +1 %}{% include "./modules/monitoring-about-managing-alerts.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring alerts and notifications for core platform monitoring](/observability/monitoring/configuring-core-platform-monitoring/configuring-alerts-and-notifications#configuring-alerts-and-notifications)
{%- endif %}
*   [Configuring alerts and notifications for user workload monitoring](/observability/monitoring/configuring-user-workload-monitoring/configuring-alerts-and-notifications-uwm#configuring-alerts-and-notifications-uwm)
*   [Managing alerts as an Administrator](/observability/monitoring/managing-alerts/managing-alerts-as-an-administrator#managing-alerts-as-an-administrator)
*   [Managing alerts as a Developer](/observability/monitoring/managing-alerts/managing-alerts-as-a-developer#managing-alerts-as-a-developer)

{% leveloffset +2 %}{% include "./modules/monitoring-managing-silences.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +2 %}{% include "./modules/monitoring-managing-core-platform-alerting-rules.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-tips-for-optimizing-alerting-rules-for-core-platform-monitoring.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +2 %}{% include "./modules/monitoring-about-creating-alerting-rules-for-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-managing-alerting-rules-for-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-optimizing-alerting-for-user-defined-projects.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-searching-alerts-silences-and-alerting-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-understanding-alert-routing-for-user-defined-projects.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling alert routing for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-alert-routing-for-user-defined-projects_preparing-to-configure-the-monitoring-stack-uwm)

{% leveloffset +1 %}{% include "./modules/monitoring-sending-notifications-to-external-systems.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring alert notifications for core platform monitoring](/observability/monitoring/configuring-core-platform-monitoring/configuring-alerts-and-notifications#configuring-alert-notifications_configuring-alerts-and-notifications)
{%- endif %}
*   [Configuring alert notifications for user workload monitoring](/observability/monitoring/configuring-user-workload-monitoring/configuring-alerts-and-notifications-uwm#configuring-alert-notifications_configuring-alerts-and-notifications-uwm)