---
title: Using the vSphere Problem Detector Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using the vSphere Problem Detector Operator {id="using-vsphere-problem-detector-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "vsphere-problem-detector" %}

{%- set operator_name = "vSphere Problem Detector Operator" %}

You can use the {{ operator_name }} to check a cluster that you deployed on {{ vmw_full }} for common installation and configuration issues that relate to storage.

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-running.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-viewing-events.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-viewing-logs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-config-checks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-storage-class-config-check.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/vsphere-problem-detector-metrics.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)

{%- set operator_name = false -%}