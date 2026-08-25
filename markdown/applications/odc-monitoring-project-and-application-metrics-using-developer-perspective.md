---
title: Monitoring project and application metrics using the Developer perspective
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring project and application metrics using the Developer perspective {id="odc-monitoring-project-and-application-metrics-using-developer-perspective"}
{%- set context = "odc-monitoring-project-and-application-metrics-using-developer-perspective" %}

The **Observe** view in the **Developer** perspective provides options to monitor your project or application metrics, such as CPU, memory, and bandwidth usage, and network related information.

## Prerequisites {id="prerequisites_odc-monitoring-project-and-application-metrics-using-developer-perspective"}

*   You have [created and deployed applications on {{ product_title }}](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have [logged in to the web console](/web_console/web-console#web-console) and have switched to [the **Developer** perspective](/web_console/web-console-overview#about-developer-perspective_web-console-overview).
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have logged in to the web console and have switched to the **Developer** perspective.
{%- endif %}

{% leveloffset +1 %}{% include "./modules/odc-monitoring-your-project-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-monitoring-your-application-metrics.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-image-vulnerabilities-breakdown.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-monitoring-your-app-vulnerabilities.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-odc-monitoring-project-and-application-metrics-using-developer-perspective" ._additional-resources}
*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)