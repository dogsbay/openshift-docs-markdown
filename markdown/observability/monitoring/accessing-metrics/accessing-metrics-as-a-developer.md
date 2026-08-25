{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Accessing metrics as a developer {id="accessing-metrics-as-a-developer"}
{%- set context = "accessing-metrics-as-a-developer" %}

You can access metrics to monitor the performance of your cluster workloads.

**Additional resources**
{._additional-resources}

*   [Understanding metrics](/observability/monitoring/about-ocp-monitoring/key-concepts#understanding-metrics_key-concepts)

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/monitoring-viewing-a-list-of-available-metrics.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/monitoring-querying-metrics-for-user-defined-projects-with-mon-dashboard.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Querying Prometheus (Prometheus documentation)](https://prometheus.io/docs/prometheus/latest/querying/basics/)

{% leveloffset +1 %}{% include "./modules/monitoring-reviewing-monitoring-dashboards-developer.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About monitoring dashboards](/observability/monitoring/about-ocp-monitoring/key-concepts#about-monitoring-dashboards_key-concepts)
*   [Monitoring project and application metrics using the Developer perspective](/applications/odc-monitoring-project-and-application-metrics-using-developer-perspective#monitoring-project-and-application-metrics-using-developer-perspective)