{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Viewing cluster dashboards {id="cluster-logging-dashboards"}
{%- set context = "cluster-logging-dashboards" %}

The **Logging/Elasticsearch Nodes** and **Openshift Logging** dashboards in the
{%- if not (openshift_rosa or openshift_dedicated) %}
{{ product_title }} web console
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
{{ cluster_manager_url }}
{%- endif %}
contain in-depth details about your Elasticsearch instance and the individual Elasticsearch nodes that you can use to prevent and diagnose problems.

The **OpenShift Logging** dashboard contains charts that show details about your Elasticsearch instance at a cluster level, including cluster resources, garbage collection, shards in the cluster, and Fluentd statistics.

The **Logging/Elasticsearch Nodes** dashboard contains charts that show details about your Elasticsearch instance, many at node level, including details on indexing, shards, resources, and so forth.

{% leveloffset +1 %}{% include "./modules/cluster-logging-dashboards-access.md" %}{% endleveloffset %}

For information on the dashboard charts, see [About the OpenShift Logging dashboard](/observability/logging/log_visualization/cluster-logging-dashboards#cluster-logging-dashboards-logging_cluster-logging-dashboards) and [About the Logging/Elastisearch Nodes dashboard](/observability/logging/log_visualization/cluster-logging-dashboards#cluster-logging-dashboards-es_cluster-logging-dashboards).

{% leveloffset +1 %}{% include "./modules/cluster-logging-dashboards-logging.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-dashboards-es.md" %}{% endleveloffset %}