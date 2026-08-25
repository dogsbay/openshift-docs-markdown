---
title: Pausing the custom metrics autoscaler for a scaled object
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-pausing" %}
{% include "./_attributes/common-attributes.md" %}
# Pausing the custom metrics autoscaler for a scaled object {id="nodes-cma-autoscaling-custom-pausing"}

You can pause and restart the autoscaling of a workload, as needed.

For example, you might want to pause autoscaling before performing cluster maintenance or to avoid resource starvation by removing non-mission-critical workloads.

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-pausing-workload.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-pausing-restart.md" %}{% endleveloffset %}