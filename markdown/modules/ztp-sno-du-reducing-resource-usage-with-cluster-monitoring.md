{%- set _mod_docs_content_type = "CONCEPT" %}
# Alertmanager {id="ztp-sno-du-reducing-resource-usage-with-cluster-monitoring_{{ context }}"}

{{ sno_caps }} clusters that run DU workloads require reduced CPU resources consumed by the {{ product_title }} monitoring components. The following `ConfigMap` custom resource (CR) disables Alertmanager. {._abstract}

```yaml title="Recommended cluster monitoring configuration (ReduceMonitoringFootprint.yaml)" {minja}
{% include "./snippets/ztp_ReduceMonitoringFootprint.yaml" %}
```