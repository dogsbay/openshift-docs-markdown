{%- set _mod_docs_content_type = "CONCEPT" %}
# Operator Lifecycle Manager {id="ztp-sno-du-reducing-resource-usage-with-olm-pprof_{{ context }}"}

{{ sno_caps }} clusters that run distributed unit workloads require consistent access to CPU resources. Operator Lifecycle Manager (OLM) collects performance data from Operators at regular intervals, resulting in an increase in CPU utilisation. The following `ConfigMap` custom resource (CR) disables the collection of Operator performance data by OLM. {._abstract}

```yaml title="Recommended cluster OLM configuration (ReduceOLMFootprint.yaml)"
{% include "./snippets/ztp_ReduceOLMFootprint.yaml" %}
```