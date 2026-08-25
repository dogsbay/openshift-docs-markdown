---
title: Showing data collected by remote health monitoring
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Showing data collected by remote health monitoring {id="showing-data-collected-by-remote-health-monitoring"}

{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "showing-data-collected-by-remote-health-monitoring" %}

As an administrator, you can review the metrics collected by Telemetry and the {{ insights_operator }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/telemetry-showing-data-collected-from-the-cluster.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/insights-operator-showing-data-collected-from-the-cluster.md" %}{% endleveloffset %}

{% endif %}