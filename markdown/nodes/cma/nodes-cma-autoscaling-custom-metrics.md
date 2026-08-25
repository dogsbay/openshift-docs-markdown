---
title: Viewing Operator metrics
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-metrics" %}
{% include "./_attributes/common-attributes.md" %}
# Viewing Operator metrics {id="nodes-cma-autoscaling-custom-metrics"}

The Custom Metrics Autoscaler Operator exposes ready-to-use metrics that it pulls from the on-cluster monitoring component. You can query the metrics by using the Prometheus Query Language (PromQL) to analyze and diagnose issues. All metrics are reset when the controller pod restarts.

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-metrics-access.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cma-autoscaling-custom-metrics-provided.md" %}{% endleveloffset %}