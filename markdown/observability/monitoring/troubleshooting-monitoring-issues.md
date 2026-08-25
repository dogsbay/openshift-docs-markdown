{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting monitoring issues {id="troubleshooting-monitoring-issues"}
{%- set context = "troubleshooting-monitoring-issues" %}

You can troubleshoot common monitoring issues by using the procedures in this assembly. These procedures help you resolve problems with metrics collection, Prometheus storage, and alert configuration for both platform and user-defined project monitoring. {._abstract}

{%- if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/monitoring-investigating-why-user-defined-metrics-are-unavailable.md" %}{% endleveloffset %}
{%- endif %}

{%- if openshift_dedicated or openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/sd-monitoring-troubleshooting-issues.md" %}{% endleveloffset %}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-determining-why-prometheus-is-consuming-disk-space.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-resolving-the-kubepersistentvolumefillingup-alert-firing-for-prometheus.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/monitoring-resolving-the-alertmanagerreceiversnotconfigured-alert.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Enabling monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
{%- endif %}
*   [Specifying how a service is monitored](/observability/monitoring/configuring-user-workload-monitoring/configuring-metrics-uwm#specifying-how-a-service-is-monitored_configuring-metrics-uwm)
*   [Getting detailed information about a metrics target](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#getting-detailed-information-about-a-target_accessing-metrics-as-an-administrator)
*   [Accessing monitoring APIs by using the CLI](/observability/monitoring/accessing-metrics/accessing-monitoring-apis-by-using-the-cli#accessing-monitoring-apis-by-using-the-cli)
*   [Setting scrape intervals, evaluation intervals, and enforced limits for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/configuring-performance-and-scalability-uwm#setting-scrape-and-evaluation-intervals-limits-for-user-defined-projects_configuring-performance-and-scalability-uwm)
*   [Submitting a support case](/support/getting-support#support-submitting-a-case_getting-support)
{%- if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring alert notifications for default platform monitoring](/observability/monitoring/configuring-core-platform-monitoring/configuring-alerts-and-notifications#configuring-alert-notifications_configuring-alerts-and-notifications)
*   [Configuring alert notifications for user workload monitoring](/observability/monitoring/configuring-user-workload-monitoring/configuring-alerts-and-notifications-uwm#configuring-alert-notifications_configuring-alerts-and-notifications-uwm)
{%- endif %}