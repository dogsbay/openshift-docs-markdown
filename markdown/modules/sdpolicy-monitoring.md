{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitoring {id="sdpolicy-monitoring_{{ context }}"}

Review the tools you need to monitor cluster performance and stay informed about your cluster’s status. {._abstract}

## Cluster metrics {id="cluster-metrics_{{ context }}"}

{{ product_title }} clusters come with an integrated Prometheus/Grafana stack for cluster monitoring including CPU, memory, and network-based metrics. This is accessible through the web console and can also be used to view cluster-level status and capacity/usage through a Grafana dashboard. These metrics also allow for horizontal pod autoscaling based on CPU or memory metrics provided by an {{ product_title }} user.

## Cluster notifications {id="cluster-status-notification_{{ context }}"}

{% leveloffset +0 %}{% include "./snippets/managed-openshift-about-cluster-notifications.md" %}{% endleveloffset %}