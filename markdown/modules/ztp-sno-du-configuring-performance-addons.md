{%- set _mod_docs_content_type = "CONCEPT" %}
# Performance profile {id="ztp-sno-du-configuring-performance-addons_{{ context }}"}

{{ sno_caps }} clusters that run DU workloads require a Node Tuning Operator performance profile to use real-time host capabilities and services. {._abstract}


:::note

In earlier versions of {{ product_title }}, the Performance Addon Operator was used to implement automatic tuning to achieve low latency performance for OpenShift applications. In {{ product_title }} 4.11 and later, this functionality is part of the Node Tuning Operator.

:::


The following example `PerformanceProfile` CR illustrates the required {{ sno }} cluster configuration.

```yaml title="Recommended performance profile configuration (PerformanceProfile.yaml)" {minja}
{% include "./snippets/ztp_PerformanceProfile.yaml" %}
```

{% include "./snippets/performance-profile-workload-partitioning.md" %}