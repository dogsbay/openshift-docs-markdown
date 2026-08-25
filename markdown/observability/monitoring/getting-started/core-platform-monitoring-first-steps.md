{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Core platform monitoring first steps {id="core-platform-monitoring-first-steps"}
{%- set context = "core-platform-monitoring-first-steps" %}

After {{ product_title }} is installed, core platform monitoring components immediately begin collecting metrics, which you can query and view.
The default in-cluster monitoring stack includes the core platform Prometheus instance that collects metrics from your cluster and the core Alertmanager instance that routes alerts, among other components.
Depending on who will use the monitoring stack and for what purposes, as a cluster administrator, you can further configure these monitoring components to suit the needs of different users in various scenarios.

## Configuring core platform monitoring: Postinstallation steps {id="configuring-core-platform-monitoring-postinstallation-steps_{{ context }}"}

After {{ product_title }} is installed, cluster administrators typically configure core platform monitoring to suit their needs.
These activities include setting up storage and configuring options for Prometheus, Alertmanager, and other monitoring components.


:::note

By default, in a newly installed {{ product_title }} system, users can query and view collected metrics.
You need only configure an alert receiver if you want users to receive alert notifications.
Any other configuration options listed here are optional.

:::


*   [Create the `cluster-monitoring-config` `ConfigMap` object](/observability/monitoring/configuring-core-platform-monitoring/preparing-to-configure-the-monitoring-stack#creating-cluster-monitoring-configmap_preparing-to-configure-the-monitoring-stack) if it does not exist.
*   [Configure notifications for default platform alerts](/observability/monitoring/configuring-core-platform-monitoring/configuring-alerts-and-notifications#configuring-alert-notifications_configuring-alerts-and-notifications) so that Alertmanager can send alerts to an external notification system such as email, Slack, or PagerDuty.
*   For shorter term data retention, [configure persistent storage](/observability/monitoring/configuring-core-platform-monitoring/storing-and-recording-data#configuring-persistent-storage_storing-and-recording-data) for Prometheus and Alertmanager to store metrics and alert data.
Specify the metrics data retention parameters for Prometheus and Thanos Ruler.

    :::important

    *   In multi-node clusters, you must configure persistent storage for Prometheus, Alertmanager, and Thanos Ruler to ensure high availability.
    *   By default, in a newly installed {{ product_title }} system, the monitoring `ClusterOperator` resource reports a `PrometheusDataPersistenceNotConfigured` status message to remind you that storage is not configured.
    
    :::

*   For longer term data retention, [configure the remote write feature](/observability/monitoring/configuring-core-platform-monitoring/configuring-metrics#configuring-remote-write-storage_configuring-metrics) to enable Prometheus to send ingested metrics to remote systems for storage.

    :::important

    Be sure to [add cluster ID labels to metrics](/observability/monitoring/configuring-core-platform-monitoring/configuring-metrics#creating-cluster-id-labels-for-metrics_configuring-metrics) for use with your remote write storage configuration.
    
    :::

*   [Grant monitoring cluster roles](/observability/monitoring/configuring-core-platform-monitoring/preparing-to-configure-the-monitoring-stack#granting-users-permissions-for-core-platform-monitoring_preparing-to-configure-the-monitoring-stack) to any non-administrator users that need to access certain monitoring features.
*   [Assign tolerations](/observability/monitoring/configuring-core-platform-monitoring/configuring-performance-and-scalability#assigning-tolerations-to-monitoring-components_configuring-performance-and-scalability) to monitoring stack components so that administrators can move them to tainted nodes.
*   [Set the body size limit](/observability/monitoring/configuring-core-platform-monitoring/configuring-performance-and-scalability#setting-the-body-size-limit-for-metrics-scraping_configuring-performance-and-scalability) for metrics collection to help avoid situations in which Prometheus consumes excessive amounts of memory when scraped targets return a response that contains a large amount of data.
*   [Modify or create alerting rules](/observability/monitoring/managing-alerts/managing-alerts-as-an-administrator#managing-alerting-rules-for-core-platform-monitoring_managing-alerts-as-an-administrator) for your cluster.
These rules specify the conditions that trigger alerts, such as high CPU or memory usage, network latency, and so forth.
*   [Specify resource limits and requests for monitoring components](/observability/monitoring/configuring-core-platform-monitoring/configuring-performance-and-scalability#managing-cpu-and-memory-resources-for-monitoring-components_configuring-performance-and-scalability) to ensure that the containers that run monitoring components have enough CPU and memory resources.

With the monitoring stack configured to suit your needs, Prometheus collects metrics from the specified services and stores these metrics according to your settings.
You can go to the **Observe** pages in the {{ product_title }} web console to view and query collected metrics, manage alerts, identify performance bottlenecks, and scale resources as needed:

*   [View dashboards](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#reviewing-monitoring-dashboards-admin_accessing-metrics-as-an-administrator) to visualize collected metrics, troubleshoot alerts, and monitor other information about your cluster.
*   [Query collected metrics](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#querying-metrics-for-all-projects-with-mon-dashboard_accessing-metrics-as-an-administrator) by creating PromQL queries or using predefined queries.