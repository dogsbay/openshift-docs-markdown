{%- set _mod_docs_content_type = "CONCEPT" %}
# Network diagnostics {id="ztp-sno-du-disabling-network-diagnostics_{{ context }}"}

{{ sno_caps }} clusters that run DU workloads require less inter-pod network connectivity checks to reduce the additional load created by these pods. The following custom resource (CR) disables these checks. {._abstract}

```yaml title="Recommended network diagnostics configuration (DisableSnoNetworkDiag.yaml)" {minja}
{% include "./snippets/ztp_DisableSnoNetworkDiag.yaml" %}
```