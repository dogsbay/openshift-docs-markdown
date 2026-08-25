{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# About log storage {id="about-log-storage"}
{%- set context = "about-log-storage" %}

You can use an internal Loki or Elasticsearch log store on your cluster for storing logs, or you can use a [`ClusterLogForwarder` custom resource (CR)](/observability/logging/log_collection_forwarding/configuring-log-forwarding#logging-create-clf_configuring-log-forwarding) to forward logs to an external store.

## Log storage types {id="log-storage-overview-types"}

{% include "./snippets/logging-loki-statement-snip.md" %}

{% leveloffset +2 %}{% include "./modules/cluster-logging-about-es-logstore.md" %}{% endleveloffset %}

## Querying log stores {id="log-storage-overview-querying"}

You can query Loki by using the [LogQL log query language](https://grafana.com/docs/loki/latest/logql/).

## Additional resources {id="additional-resources_log-storage-overview" ._additional-resources}
*   [Loki components documentation](https://grafana.com/docs/loki/latest/get-started/components/)
*   [Loki Object Storage documentation](https://loki-operator.dev/docs/object_storage.md/)