---
title: OADP monitoring
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# OADP monitoring {id="oadp-monitoring"}
{%- set toc = true %}

{%- set context = "oadp-monitoring" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" %}

Monitor {{ oadp_short }} operations by using the {{ product_title }} monitoring stack to create service monitors, configure alerting rules, and view metrics. This helps you track backup and restore performance, manage clusters, and receive alerts for important events. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-monitoring-setup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-creating-service-monitor.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-creating-alerting-rule.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-list-of-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-viewing-metrics-ui.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
*   [Managing alerts as an Administrator](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/managing_alerts/managing-alerts-as-an-administrator)