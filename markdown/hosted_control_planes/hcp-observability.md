---
title: "Observability for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Observability for {{ hcp }} {id="hcp-observability"}
{%- set context = "hcp-observability" %}

You can gather metrics for {{ hcp }} by configuring metrics sets. Monitoring dashboards are created in the management cluster for each hosted cluster that it manages.

{% leveloffset +1 %}{% include "./modules/hosted-control-planes-metrics-sets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-metrics-sets-ref.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-cluster-ids.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-ids-example.md" %}{% endleveloffset %}

**Additional resources**

*   [Dashboard customization](/hosted_control_planes/hcp-observability#hcp-customize-dashboards_hcp-observability)
*   [Configuring metrics sets for hosted control planes](/hosted_control_planes/hcp-observability#hosted-control-planes-metrics-sets_hcp-observability)
*   [Enabling monitoring dashboards in a hosted cluster](/hosted_control_planes/hcp-observability#hosted-control-planes-monitoring-dashboard_hcp-observability)

{% leveloffset +1 %}{% include "./modules/hosted-control-planes-monitoring-dashboard.md" %}{% endleveloffset %}

**Additional resources**

*   [Customized hosted cluster identifiers](/hosted_control_planes/hcp-observability#hcp-cluster-ids_hcp-observability)

{% leveloffset +2 %}{% include "./modules/hcp-customize-dashboards.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-cp-metrics-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cp-metrics-enable.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cp-query-metrics.md" %}{% endleveloffset %}

**Additional resources**

*   [Exposed metrics](/operators/understanding/olm/olm-understanding-metrics#olm-metrics_olm-understanding-metrics)

{% leveloffset +2 %}{% include "./modules/hcp-cp-query-metrics-console.md" %}{% endleveloffset %}

**Additional resources**

*   [Exposed metrics](/operators/understanding/olm/olm-understanding-metrics#olm-metrics_olm-understanding-metrics)

{% leveloffset +2 %}{% include "./modules/hcp-cp-metrics-dashboards.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-connectivity-metrics.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-connect-data-plane.md" %}{% endleveloffset %}

**Additional resources**

*   [Troubleshooting connectivity for {{ hcp }}](/hosted_control_planes/hcp-troubleshooting#hcp-ts-connectivity_hcp-troubleshooting)

{% leveloffset +2 %}{% include "./modules/hcp-connect-control-plane.md" %}{% endleveloffset %}