{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ ServerlessProductShortName }} developer metrics overview {id="serverless-developer-metrics"}
{%- set context = "serverless-developer-metrics" %}

Metrics enable developers to monitor how Knative services are performing. You can use the {{ product_title }} monitoring stack to record and view health checks and metrics for your Knative services.

{% if openshift_enterprise %}
You can view different metrics for {{ ServerlessProductName }} by navigating to [**Dashboards**](/observability/monitoring/reviewing-monitoring-dashboards#reviewing-monitoring-dashboards-developer_reviewing-monitoring-dashboards) in the {{ product_title }} web console **Developer** perspective.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
You can view different metrics for {{ ServerlessProductName }} by navigating to **Dashboards** in the {{ product_title }} web console **Developer** perspective.
{% endif %}


:::warning

If {{ SMProductShortName }} is enabled with mTLS, metrics for Knative Serving are disabled by default because Service Mesh prevents Prometheus from scraping metrics.

{% if not openshift_dedicated %}
For information about resolving this issue, see [Enabling Knative Serving metrics when using Service Mesh with mTLS](/serverless/integrations/serverless-ossm-setup#serverless-ossm-enabling-serving-metrics_serverless-ossm-setup).
{% endif %}

Scraping the metrics does not affect autoscaling of a Knative service, because scraping requests do not go through the activator. Consequently, no scraping takes place if no pods are running.

:::


{% if openshift_enterprise %}
## Additional resources {id="additional-resources_serverless-service-monitoring" ._additional-resources}
*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
*   [Specifying how a service is monitored](/observability/monitoring/configuring-user-workload-monitoring/configuring-metrics-uwm#specifying-how-a-service-is-monitored_configuring-metrics-uwm)
{% endif %}