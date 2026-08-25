{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Configuring the Elasticsearch log store {id="logging-config-es-store"}
{%- set context = "logging-config-es-store" %}

You can use Elasticsearch 6 to store and organize log data.

You can make modifications to your log store, including:

*   Storage for your Elasticsearch cluster
*   Shard replication across data nodes in the cluster, from full replication to no replication
*   External access to Elasticsearch data

{% leveloffset +1 %}{% include "./modules/configuring-log-storage-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-elasticsearch-audit.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About log collection and forwarding](/observability/logging/log_collection_forwarding/log-forwarding#log-forwarding)

{% leveloffset +1 %}{% include "./modules/cluster-logging-elasticsearch-retention.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-logstore-limits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-elasticsearch-ha.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-elasticsearch-scaledown.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-elasticsearch-storage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-elasticsearch-persistent-storage-empty.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-manual-rollout-rolling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-elasticsearch-exposing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-removing-unused-components-if-no-elasticsearch.md" %}{% endleveloffset %}