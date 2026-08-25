{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Accessing monitoring APIs by using the CLI {id="accessing-monitoring-apis-by-using-the-cli"}
{%- set context = "accessing-monitoring-apis-by-using-the-cli" %}

In {{ product_title }}, you can access web service APIs for some monitoring components from the command-line interface (CLI).


:::important

In certain situations, accessing API endpoints can degrade the performance and scalability of your cluster, especially if you use endpoints to retrieve, send, or query large amounts of metrics data.

To avoid these issues, consider the following recommendations:

*   Avoid querying endpoints frequently. Limit queries to a maximum of one every 30 seconds.
*   Do not retrieve all metrics data through the `/federate` endpoint for Prometheus. Query the endpoint only when you want to retrieve a limited, aggregated data set. For example, retrieving fewer than 1,000 samples for each request helps minimize the risk of performance degradation.

:::


{% leveloffset +1 %}{% include "./modules/monitoring-about-accessing-monitoring-web-service-apis.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Reviewing monitoring dashboards as a cluster administrator](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#reviewing-monitoring-dashboards-admin_accessing-metrics-as-an-administrator)
*   [Reviewing monitoring dashboards as a developer](/observability/monitoring/accessing-metrics/accessing-metrics-as-a-developer#reviewing-monitoring-dashboards-developer_accessing-metrics-as-a-developer)

{% leveloffset +1 %}{% include "./modules/monitoring-accessing-third-party-monitoring-web-service-apis.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-querying-metrics-by-using-the-federation-endpoint-for-prometheus.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/accessing-metrics-outside-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-resources-reference-for-the-cluster-monitoring-operator.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [Enabling monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
*   [Configuring remote write storage for core platform monitoring](/observability/monitoring/configuring-core-platform-monitoring/configuring-metrics#configuring-remote-write-storage_configuring-metrics)
{%- endif %}
*   [Configuring remote write storage for monitoring of user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/configuring-metrics-uwm#configuring-remote-write-storage_configuring-metrics-uwm)
*   [Accessing metrics as an administrator](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#accessing-metrics-as-an-administrator)
*   [Accessing metrics as a developer](/observability/monitoring/accessing-metrics/accessing-metrics-as-a-developer#accessing-metrics-as-a-developer)
*   [Managing alerts as an Administrator](/observability/monitoring/managing-alerts/managing-alerts-as-an-administrator#managing-alerts-as-an-administrator)
*   [Managing alerts as a Developer](/observability/monitoring/managing-alerts/managing-alerts-as-a-developer#managing-alerts-as-a-developer)