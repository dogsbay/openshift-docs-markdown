---
title: Monitoring project and application metrics by using the Developer perspective
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring project and application metrics by using the Developer perspective {id="odc-monitoring-project-and-application-metrics-using-developer-perspective_{{ context }}"}
{%- set context = "odc-monitoring-project-and-application-metrics-using-developer-perspective" %}

The **Observe** view in the **Developer** perspective enables you to monitor project and application metrics to track performance, troubleshoot issues, and respond to alerts. For example, CPU, memory, and bandwidth usage, and network related information. {._abstract}

## Prerequisites {id="prerequisites_odc-monitoring-project-and-application-metrics-using-developer-perspective"}

*   You have created and deployed applications on {{ product_title }}.
*   You have logged in to the web console.
*   The **Developer** perspective is enabled and you have switched to it.

{% include "./snippets/snip-unified-perspective-web-console.md" %}

{% leveloffset +1 %}{% include "./modules/enabling-developer-perspective_web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/con_monitoring-capabilities-in-the-developer-perspective.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_view-project-dashboards.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-monitoring-your-application-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-image-vulnerabilities-breakdown.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-monitoring-your-app-vulnerabilities.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-odc-monitoring-project-and-application-metrics-using-developer-perspective" ._additional-resources}
*   [Monitoring stack for Red Hat OpenShift](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/4.22)
{%- if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
*   [Accessing metrics as a developer](/observability/monitoring/accessing-metrics/accessing-metrics-as-a-developer#accessing-metrics-as-a-developer)
*   [Managing alerts as a Developer](/observability/monitoring/managing-alerts/managing-alerts-as-a-developer#managing-alerts-as-a-developer)
*   [About {{ product_title }} monitoring](/observability/monitoring/about-ocp-monitoring/about-ocp-monitoring#about-ocp-monitoring)
{%- endif %}
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [About {{ product_title }} monitoring](/observability/monitoring/about-ocp-monitoring#about-ocp-monitoring)
{%- endif %}
*   [Creating applications by using the Developer perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective)
*   [Accessing the web console](/web_console/web-console#web-console)
*   [About the Developer perspective](/web_console/web-console-overview#about-developer-perspective_web-console-overview)