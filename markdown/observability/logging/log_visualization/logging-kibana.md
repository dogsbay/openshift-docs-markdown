{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Log visualization with Kibana {id="logging-kibana"}
{%- set context = "logging-kibana" %}

If you are using the ElasticSearch log store, you can use the Kibana console to visualize collected log data.

Using Kibana, you can do the following with your data:

*   Search and browse the data using the **Discover** tab.
*   Chart and map the data using the **Visualize** tab.
*   Create and view custom dashboards using the **Dashboard** tab.

Use and configuration of the Kibana interface is beyond the scope of this documentation. For more information about using the interface, see the [Kibana documentation](https://www.elastic.co/guide/en/kibana/6.8/connect-to-elasticsearch.html).


:::note

The audit logs are not stored in the internal {{ product_title }} Elasticsearch instance by default. To view the audit logs in Kibana, you must use the [Log Forwarding API](/observability/logging/log_storage/logging-config-es-store#cluster-logging-elasticsearch-audit_logging-config-es-store) to configure a pipeline that uses the `default` output for audit logs.

:::


{% leveloffset +1 %}{% include "./modules/cluster-logging-visualizer-indices.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-visualizer-kibana.md" %}{% endleveloffset %}

## Configuring Kibana {id="logging-kibana-configuring"}

You can configure using the Kibana console by modifying the `ClusterLogging` custom resource (CR).

{% leveloffset +2 %}{% include "./modules/cluster-logging-cpu-memory.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/cluster-logging-kibana-scaling.md" %}{% endleveloffset %}