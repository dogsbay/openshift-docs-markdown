{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Monitoring clusters that run on RHOSO {id="shiftstack-prometheus-configuration"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "shiftstack-prometheus-configuration" %}

You can correlate observability metrics for clusters that run on {{ rhoso_first }}. By collecting metrics from both environments, you can monitor and troubleshoot issues across the infrastructure and application layers.

There are two supported methods for metric correlation for clusters that run on {{ rhoso }}:

*   [Remote writing](https://prometheus.io/docs/practices/remote_write/#remote-write-tuning) to an external Prometheus instance.
*   Collecting data from the {{ product_title }} federation endpoint to the {{ rhoso }} observability stack.

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-shiftstack-remotewrite.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring remote write storage](/observability/monitoring/configuring-user-workload-monitoring/configuring-metrics-uwm#configuring-remote-write-storage_configuring-metrics-uwm)
*   [Adding cluster ID labels to metrics](/observability/monitoring/about-ocp-monitoring/key-concepts#adding-cluster-id-labels-to-metrics_key-concepts)

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-shiftstack-scraping.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Querying metrics by using the federation endpoint for Prometheus](/observability/monitoring/accessing-metrics/accessing-monitoring-apis-by-using-the-cli#monitoring-querying-metrics-by-using-the-federation-endpoint-for-prometheus_accessing-monitoring-apis-by-using-the-cli)

{% leveloffset +1 %}{% include "./modules/monitoring-shiftstack-metrics.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Cluster Observability Operator overview](https://docs.redhat.com/en/documentation/red_hat_openshift_cluster_observability_operator/1-latest/html/about_red_hat_openshift_cluster_observability_operator/cluster-observability-operator-overview-1)