{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitoring stack components {id="observability-monitoring-stack_{{ context }}"}

The monitoring stack in {{ product_title }} consists of several integrated components that collect, analyze, store, and alert on metrics. {._abstract}

The monitoring stack uses the following components:

*   Prometheus collects and analyzes metrics from {{ product_title }} components and from workloads, if configured to do so.
*   Alertmanager is a component of Prometheus that handles routing, grouping, and silencing of alerts.
*   Thanos handles long term storage of metrics.

**Figure 1. {{ product_title }} monitoring architecture**

![{{ product_title }} monitoring architecture](/_assets/images/monitoring-architecture.png)


:::note

For {{ sno }} clusters, disable Alertmanager and Thanos because the clusters sends all metrics to the hub cluster for analysis and retention.

:::