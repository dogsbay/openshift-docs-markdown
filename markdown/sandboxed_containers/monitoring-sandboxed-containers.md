{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring {{ sandboxed_containers_first }} {id="monitoring-sandboxed-containers"}
{%- set context = "monitoring-sandboxed-containers" %}

You can use the {{ product_title }} web console to monitor metrics related to the health status of your sandboxed workloads and nodes. {._abstract}

{{ sandboxed_containers_first }} has a pre-configured dashboard available in the web console, and administrators can also access and query raw metrics through Prometheus.

{% leveloffset +1 %}{% include "./modules/sandboxed-containers-metrics-list.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/sandboxed-containers-query-metrics.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   For more information about creating PromQL queries to view metrics, see [Querying metrics](/monitoring/querying-metrics#querying-metrics).

{% leveloffset +1 %}{% include "./modules/sandboxed-containers-dashboard.md" %}{% endleveloffset %}

## Additional resources {id="monitoring-sandboxed-containers_additional-resources" ._additional-resources}
*   For more information about gathering data for support, see [Gathering data about your cluster](/support/gathering-cluster-data#gathering-cluster-data).