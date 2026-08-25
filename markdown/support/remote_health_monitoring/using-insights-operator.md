---
title: Using the Insights Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using the Insights Operator {id="using-insights-operator"}

{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "using-insights-operator" %}

The {{ insights_operator }} periodically gathers configuration and component failure status and, by default, reports that data every two hours to Red&#160;Hat. This information enables Red&#160;Hat to assess configuration and deeper failure data than is reported through Telemetry. Users of {{ product_title }} can display the report in the {{ insights_advisor_url }} service on {{ hybrid_console }}. {._abstract}

**Additional resources**
{._additional-resources}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
{%- endif %}
*   [Using {{ red_hat_lightspeed }} to identify issues with your cluster](/support/remote_health_monitoring/using-insights-to-identify-issues-with-your-cluster#using-insights-to-identify-issues-with-your-cluster)

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/insights-operator-configuring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/insights-operator-configuring-configmap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-insights-config.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/understanding-insights-operator-alerts.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/disabling-insights-operator-alerts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/enabling-insights-operator-alerts.md" %}{% endleveloffset %}
{%- endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/insights-operator-downloading-archive.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/running-insights-operator-gather.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/insights-operator-gather-duration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/running-insights-operator-gather-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/running-insights-operator-gather-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ insights_operator }} Gathered Data GitHub repository](https://github.com/openshift/insights-operator/blob/master/docs/gathered-data.md)

{%- endif %}
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +2 %}{% include "./modules/disabling-insights-operator-gather.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/enabling-insights-operator-gather.md" %}{% endleveloffset %}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/obfuscating-dvo-data.md" %}{% endleveloffset %}