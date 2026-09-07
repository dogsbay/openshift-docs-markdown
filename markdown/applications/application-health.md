---
title: Monitoring application health by using health checks
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "application-health" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring application health by using health checks {id="application-health"}

You can monitor application health on your {{ product_title }} cluster by configuring readiness, liveness, and startup probes for your application containers. You can also observe probe failure events so you can address issues before they affect users. {._abstract}

In software systems, components can become unhealthy due to transient issues such as temporary connectivity loss, configuration errors, or problems with external dependencies. {{ product_title }} applications have a number of options to detect and handle unhealthy containers.

{% leveloffset +1 %}{% include "./modules/application-health-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/application-health-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-monitoring-application-health-using-developer-perspective.md" %}{% endleveloffset %}

{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/odc-adding-health-checks.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/odc-editing-health-checks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-monitoring-health-checks.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Enabling the Developer perspective in the web console](/web_console/web-console-overview#enabling-developer-perspective_web-console_web-console-overview)
{%- endif %}
*   [Creating applications using the Developer perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective)