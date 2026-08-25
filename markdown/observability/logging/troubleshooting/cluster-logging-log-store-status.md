{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-elasticsearch" %}
# Viewing the status of the Elasticsearch log store {id="cluster-logging-log-store-status"}
{% include "./_attributes/common-attributes.md" %}

You can view the status of the {{ es_op }} and for a number of Elasticsearch components.

{% leveloffset +1 %}{% include "./modules/cluster-logging-log-store-status-viewing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-log-store-status-comp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ref_cluster-logging-elasticsearch-cluster-status.md" %}{% endleveloffset %}