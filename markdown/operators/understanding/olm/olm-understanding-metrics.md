---
title: Operator Lifecycle Manager metrics
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Operator Lifecycle Manager metrics {id="olm-understanding-metrics"}
{%- set context = "olm-understanding-metrics" %}

Operator Lifecycle Manager (OLM) exposes OLM-specific metrics that the Prometheus-based {{ product_title }} cluster monitoring stack can use to track catalog sources, cluster service versions, install plans, and subscriptions. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-metrics.md" %}{% endleveloffset %}