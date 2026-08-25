{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring metrics for core platform monitoring {id="configuring-metrics"}
{%- set context = "configuring-metrics" %}

Configure the collection of metrics to monitor how cluster components and your own workloads are performing.

You can send ingested metrics to remote systems for long-term storage and add cluster ID labels to the metrics to identify the data coming from different clusters.

**Additional resources**
{._additional-resources}

*   [Understanding metrics](/observability/monitoring/about-ocp-monitoring/key-concepts#understanding-metrics_key-concepts)

{% leveloffset +1 %}{% include "./modules/monitoring-configuring-remote-write-storage.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not openshift_rosa_hcp %}
*   [`writeRelabelConfigs`](/rest_api/monitoring_apis/prometheus-monitoring-coreos-com-v1#spec-remotewrite-writerelabelconfigs)
{%- endif %}
*   [`relabel_config` (Prometheus documentation)](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config)

{% leveloffset +2 %}{% include "./modules/monitoring-supported-remote-write-authentication-settings.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-example-remote-write-authentication-settings.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/monitoring-example-remote-write-queue-configuration.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not openshift_rosa_hcp %}
*   [Prometheus REST API reference for remote write](/rest_api/monitoring_apis/prometheus-monitoring-coreos-com-v1#spec-remotewrite-2)
{%- endif %}
*   [Remote write compatible endpoints (Prometheus documentation)](https://prometheus.io/docs/operating/integrations/#remote-endpoints-and-storage)
*   [Remote write tuning (Prometheus documentation)](https://prometheus.io/docs/practices/remote_write/#remote-write-tuning)
*   [Understanding secrets](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-about_nodes-pods-secrets)

{% leveloffset +2 %}{% include "./modules/monitoring-table-of-remote-write-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-creating-cluster-id-labels-for-metrics.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Adding cluster ID labels to metrics](/observability/monitoring/about-ocp-monitoring/key-concepts#adding-cluster-id-labels-to-metrics_key-concepts)
*   [Obtaining your cluster ID](/support/gathering-cluster-data#support-get-cluster-id_gathering-cluster-data)