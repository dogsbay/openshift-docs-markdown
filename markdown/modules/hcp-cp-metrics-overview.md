{%- set _mod_docs_content_type = "CONCEPT" %}
# Control plane metrics for {{ hcp }} {id="hcp-cp-metrics-overview_{{ context }}"}

You can observe hosted control plane health from the hosted cluster monitoring stack when metrics forwarding is enabled. {._abstract}

With propagated metrics, you can diagnose API server, etcd, Operator, and scheduling issues from the hosted cluster web console and CLI without management cluster credentials. Selected control plane metrics are propagated from the management cluster into the hosted cluster platform Prometheus.

After you enable forwarding on the `HostedCluster` resource, you can use familiar PromQL queries, alerts, and dashboards.


:::important

For {{ product_title }} 4.22.7 and earlier, the `hypershift.openshift.io/enable-metrics-forwarding` annotation was the mechanism for enabling metrics forwarding. As of {{ product_title }} 4.22.8, this annotation is deprecated. When the `spec.monitoring.metricsForwarding` field is set on a `HostedCluster` object, the spec field takes precedence over the annotation. The annotation continues to be honored for clusters that have not yet set the `spec.monitoring` field.

For information about migrating from the annotation to the new API, see "Migrating from annotation-based to API-based metrics forwarding".

:::


## Metrics forwarding architecture {id="hcp-cp-metrics-architecture_{{ context }}"}

When you enable metrics forwarding, {{ hcp }} deploys components on both the management cluster and the hosted cluster.

On the management cluster, in the hosted control plane namespace, the following steps take place:

*   The `endpoint-resolver` deployment discovers pod IP addresses for control plane components.
*   The `metrics-proxy` deployment scrapes control plane pods, applies per-component metric filters, injects {{ product_title }}-compatible labels, and serves aggregated metrics at paths, such as `/metrics/kube-apiserver` and `/metrics/etcd`, behind a TLS-passthrough Route.

On the hosted cluster, in the `openshift-monitoring` namespace, the following steps take place:

*   The `control-plane-metrics-forwarder` deployment runs HAProxy and TCP-proxies scrape requests to the management cluster `metrics-proxy` Route.
*   A `PodMonitor` named `control-plane-metrics-forwarder` configures platform Prometheus to scrape the forwarder using mutual TLS (mTLS).

The data path is as follows:

1.  Platform Prometheus in the hosted cluster discovers the `PodMonitor` and scrapes the metrics-forwarder.
1.  The metrics-forwarder forwards the scrape over mTLS to the management cluster `metrics-proxy` Route.
1.  The metrics-proxy scrapes control plane pods through the endpoint-resolver and returns filtered, relabeled metrics.