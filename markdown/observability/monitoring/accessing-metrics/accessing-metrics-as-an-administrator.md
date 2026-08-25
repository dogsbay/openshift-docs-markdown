{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Accessing metrics as an administrator {id="accessing-metrics-as-an-administrator"}
{%- set context = "accessing-metrics-as-an-administrator" %}

You can access metrics to monitor the performance of cluster components and your workloads.

**Additional resources**
{._additional-resources}

*   [Understanding metrics](/observability/monitoring/about-ocp-monitoring/key-concepts#understanding-metrics_key-concepts)

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/monitoring-viewing-a-list-of-available-metrics.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-querying-metrics-for-all-projects-with-mon-dashboard.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Querying Prometheus (Prometheus documentation)](https://prometheus.io/docs/prometheus/latest/querying/basics/)

{% leveloffset +1 %}{% include "./modules/monitoring-getting-detailed-information-about-a-target.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-reviewing-monitoring-dashboards-admin.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About monitoring dashboards](/observability/monitoring/about-ocp-monitoring/key-concepts#about-monitoring-dashboards_key-concepts)