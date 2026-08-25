{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ ServerlessProductShortName }} administrator metrics {id="serverless-admin-metrics"}
{%- set context = "serverless-admin-metrics" %}

Metrics enable cluster administrators to monitor how {{ ServerlessProductName }} cluster components and workloads are performing.

{% if openshift_enterprise %}
You can view different metrics for {{ ServerlessProductName }} by navigating to [**Dashboards**](/observability/monitoring/reviewing-monitoring-dashboards#reviewing-monitoring-dashboards-admin_reviewing-monitoring-dashboards) in the {{ product_title }} web console **Administrator** perspective.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
You can view different metrics for {{ ServerlessProductName }} by navigating to **Dashboards** in the {{ product_title }} web console **Administrator** perspective.
{% endif %}

## Prerequisites {id="prerequisites_serverless-admin-metrics"}

{% if openshift_enterprise %}
*   See the {{ product_title }} documentation on [Accessing metrics as an administrator](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator) for information about enabling metrics for your cluster.
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}

*   You have access to the **Administrator** perspective in the {{ product_title }} web console.


:::warning

If {{ SMProductShortName }} is enabled with mTLS, metrics for Knative Serving are disabled by default because Service Mesh prevents Prometheus from scraping metrics.

{% if not openshift_dedicated %}
For information about resolving this issue, see [Enabling Knative Serving metrics when using Service Mesh with mTLS](/serverless/integrations/serverless-ossm-setup#serverless-ossm-enabling-serving-metrics_serverless-ossm-setup).
{% endif %}

Scraping the metrics does not affect autoscaling of a Knative service, because scraping requests do not go through the activator. Consequently, no scraping takes place if no pods are running.

:::