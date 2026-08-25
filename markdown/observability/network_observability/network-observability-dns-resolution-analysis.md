---
title: Network observability DNS resolution analysis
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Network observability DNS resolution analysis {id="network-observability-dns-resolution-analysis_{{ context }}"}
{%- set context = "network-observability-dns-decoding" -%}
{%- set toc = true %}
{% include "./_attributes/common-attributes.md" %}

Learn how DNS resolution analysis uses eBPF-based decoding to identify service discovery issues and follow the steps to enable DNS tracking in the FlowCollector resource to enrich network flow records with domain names.

{% leveloffset +1 %}{% include "./modules/network-observability-dns-resolution-analysis-strategic-benefits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-dns-resolution-analysis-configure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-dns-resolution-analysis-reference.md" %}{% endleveloffset %}

**Additional resources**

*   [Network flows format reference](/observability/network_observability/json-flows-format-reference#network-observability-flows-format_json_reference)
*   [Network Observability Operator runbooks](https://github.com/openshift/runbooks/tree/master/alerts/network-observability-operator)