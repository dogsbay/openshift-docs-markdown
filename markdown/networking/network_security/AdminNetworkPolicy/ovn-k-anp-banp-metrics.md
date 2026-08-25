---
title: Monitoring ANP and BANP
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Monitoring ANP and BANP {id="ovn-k-anp-banp-metrics"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ovn-k-anp-banp-metrics" %}

To monitor and troubleshoot `AdminNetworkPolicy` and `BaselineAdminNetworkPolicy` resources in {{ product_title }}, you can use OVN-Kubernetes metrics that report resource counts, rules, and northbound database objects.

{% leveloffset +1 %}{% include "./modules/nw-anp-banp-metrics.md" %}{% endleveloffset %}