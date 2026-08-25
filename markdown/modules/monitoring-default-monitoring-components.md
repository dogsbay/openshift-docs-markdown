{%- set _mod_docs_content_type = "REFERENCE" %}
# Default monitoring components {id="default-monitoring-components_{{ context }}"}

By default, the {{ product_title }} {{ product_version }} monitoring stack includes the following components:

**Default monitoring stack components**

| Component | Description |
| --- | --- |
| {{ cmo_full }} | The {{ cmo_first }} is a central component of the monitoring stack. It deploys, manages, and automatically updates Prometheus and Alertmanager instances, Thanos Querier, Telemeter Client, and metrics targets. The {{ cmo_short }} is deployed by the Cluster Version Operator (CVO). |
| Prometheus Operator | The Prometheus Operator in the `openshift-monitoring` project creates, configures, and manages platform Prometheus instances and Alertmanager instances. It also automatically generates monitoring target configurations based on Kubernetes label queries. |
| Prometheus | The {{ product_title }} monitoring stack is based on the Prometheus monitoring system. Prometheus is a time-series database and a rule evaluation engine for metrics. Prometheus sends alerts to Alertmanager for processing. |
| Metrics Server | The Metrics Server component (MS in the preceding diagram) collects resource metrics and exposes them in the `metrics.k8s.io` Metrics API service for use by other tools and APIs, which frees the core platform Prometheus stack from handling this functionality. Note that with the {{ product_title }} 4.16 release, Metrics Server replaces Prometheus Adapter. |
| Alertmanager | The Alertmanager service handles alerts received from Prometheus. Alertmanager is also responsible for sending the alerts to external notification systems. |
| kube-state-metrics agent | The kube-state-metrics exporter agent (KSM in the preceding diagram) converts Kubernetes objects to metrics that Prometheus can use. |
| monitoring-plugin | The monitoring-plugin dynamic plugin component deploys the monitoring pages in the **Observe** section of the {{ product_title }} web console. You can use {{ cmo_full }} config map settings to manage monitoring-plugin resources for the web console pages. |
| openshift-state-metrics agent | The openshift-state-metrics exporter (OSM in the preceding diagram) expands upon kube-state-metrics by adding metrics for {{ product_title }}-specific resources. |
| node-exporter agent | The node-exporter agent (NE in the preceding diagram) collects metrics about every node in a cluster. The node-exporter agent is deployed on every node. |
| Thanos Querier | Thanos Querier aggregates and optionally deduplicates core {{ product_title }} metrics and metrics for user-defined projects under a single, multi-tenant interface. |
| Telemeter Client | Telemeter Client sends a subsection of the data from platform Prometheus instances to Red&#160;Hat to enable remote health monitoring for clusters. |

The monitoring stack monitors all components within the stack. The components are automatically updated when {{ product_title }} is updated.