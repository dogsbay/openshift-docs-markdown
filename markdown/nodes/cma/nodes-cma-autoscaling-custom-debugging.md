---
title: Gathering debugging data
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-debugging" %}
# Gathering debugging data {id="nodes-cma-autoscaling-custom-debugging"}
{% include "./_attributes/common-attributes.md" %}

{% if not openshift_origin %}
When opening a support case, it is helpful to provide debugging information about your cluster to Red Hat Support.

To help troubleshoot your issue, provide the following information:

*   Data gathered using the `must-gather` tool.
*   The unique cluster ID.
{% endif %}

You can use the `must-gather` tool to collect data about the Custom Metrics Autoscaler Operator and its components, including the following items:

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   The `openshift-keda` namespace and its child objects.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   The `keda` namespace and its child objects.
{%- endif %}
*   The Custom Metric Autoscaler Operator installation objects.
*   The Custom Metric Autoscaler Operator CRD objects.

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-gather.md" %}{% endleveloffset %}