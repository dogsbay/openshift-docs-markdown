---
title: Investigating monitoring issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Investigating monitoring issues {id="investigating-monitoring-issues"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "investigating-monitoring-issues" %}

{{ product_title }} includes a preconfigured, preinstalled, and self-updating monitoring stack that provides monitoring for core platform components. In {{ product_title }} {{ product_version }}, cluster administrators can optionally enable monitoring for user-defined projects.

Use these procedures if the following issues occur:

*   Your own metrics are unavailable.
*   Prometheus is consuming a lot of disk space. 
*   The `KubePersistentVolumeFillingUp` alert is firing for Prometheus.

{% leveloffset +1 %}{% include "./modules/monitoring-investigating-why-user-defined-metrics-are-unavailable.md" %}{% endleveloffset %}

{%- if not openshift_rosa_hcp %}
## Additional resources {id="_additional_resources"}
{%- if not (openshift_rosa or openshift_dedicated) %}
*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
{%- endif %}
*   [Specifying how a service is monitored](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/configuring-metrics-uwm#specifying-how-a-service-is-monitored_configuring-metrics-uwm)
*   [Getting detailed information about a metrics target](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator#getting-detailed-information-about-a-target_accessing-metrics-as-an-administrator)
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-determining-why-prometheus-is-consuming-disk-space.md" %}{% endleveloffset %}

{%- if not openshift_rosa_hcp %}
## Additional resources {id="_additional_resources"}
*   [Setting scrape intervals, evaluation intervals, and enforced limits for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/configuring-performance-and-scalability-uwm#setting-scrape-and-evaluation-intervals-limits-for-user-defined-projects_configuring-performance-and-scalability-uwm)
{% endif %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/monitoring-resolving-the-kubepersistentvolumefillingup-alert-firing-for-prometheus.md" %}{% endleveloffset %}

{% endif %}