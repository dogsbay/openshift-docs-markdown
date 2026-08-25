---
title: Operator Lifecycle Manager metrics
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Operator Lifecycle Manager metrics {id="olm-understanding-metrics"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-understanding-metrics" %}

Operator Lifecycle Manager (OLM) exposes OLM-specific metrics that the Prometheus-based {{ product_title }} cluster monitoring stack can use to track catalog sources, cluster service versions, install plans, and subscriptions.

{% leveloffset +1 %}{% include "./modules/olm-metrics.md" %}{% endleveloffset %}