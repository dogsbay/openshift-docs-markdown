{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitoring {id="rosa-sdpolicy-monitoring_{{ context }}"}

This section provides information about the service definition for {{ product_title }} monitoring.

## Cluster metrics {id="rosa-sdpolicy-cluster-metrics_{{ context }}"}

{{ product_title }} clusters come with an integrated Prometheus stack for cluster monitoring including CPU, memory, and network-based metrics. This is accessible through the web console. These metrics also allow for horizontal pod autoscaling based on CPU or memory metrics provided by a ROSA user.

## Cluster notifications {id="rosa-sdpolicy-cluster-status-notifications_{{ context }}"}

{% leveloffset +0 %}{% include "./snippets/managed-openshift-about-cluster-notifications.md" %}{% endleveloffset %}