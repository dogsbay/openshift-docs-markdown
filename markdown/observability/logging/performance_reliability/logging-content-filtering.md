{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Filtering logs by content {id="logging-content-filtering"}
{%- set context = "logging-content-filtering" %}

Collecting all logs from a cluster might produce a large amount of data, which can be expensive to transport and store.

You can reduce the volume of your log data by filtering out low priority data that does not need to be stored. {{ logging_uc }} provides content filters that you can use to reduce the volume of log data.


:::note

Content filters are distinct from `input` selectors. `input` selectors select or ignore entire log streams based on source metadata. Content filters edit log streams to remove and modify records based on the record content.

:::


Log data volume can be reduced by using one of the following methods:

*   [Configuring content filters to drop unwanted log records](/observability/logging/performance_reliability/logging-content-filtering#logging-content-filter-drop-records_logging-content-filtering)
*   [Configuring content filters to prune log records](/observability/logging/performance_reliability/logging-content-filtering#logging-content-filter-prune-records_logging-content-filtering)

{% leveloffset +1 %}{% include "./modules/logging-content-filter-drop-records.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/logging-content-filter-prune-records.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_logging-content-filtering" ._additional-resources}
*   [About forwarding logs to third-party systems](/observability/logging/log_collection_forwarding/configuring-log-forwarding#cluster-logging-collector-log-forwarding-about_configuring-log-forwarding)