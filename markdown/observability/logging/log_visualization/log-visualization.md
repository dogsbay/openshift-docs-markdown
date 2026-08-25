{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# About log visualization {id="log-visualization"}
{%- set context = "log-visualization" %}

You can visualize your log data in the {{ product_title }} web console, or the Kibana web console, depending on your deployed log storage solution. The Kibana console can be used with ElasticSearch log stores, and the {{ product_title }} web console can be used with the ElasticSearch log store or the LokiStack.

{% include "./snippets/logging-kibana-dep-snip.md" %}

{% leveloffset +1 %}{% include "./modules/configuring-log-visualizer.md" %}{% endleveloffset %}

## Viewing logs for a resource {id="log-visualization-resource-logs"}

Resource logs are a default feature that provides limited log viewing capability. You can view the logs for various resources, such as builds, deployments, and pods by using the {{ oc_first }} and the web console.


:::tip

To enhance your log retrieving and viewing experience, install the {{ logging }}. The {{ logging }} aggregates all the logs from your {{ product_title }} cluster, such as node system audit logs, application container logs, and infrastructure logs, into a dedicated log store. You can then query, discover, and visualize your log data through the Kibana console or the {{ product_title }} web console. Resource logs do not access the {{ logging }} log store.

:::


{% leveloffset +2 %}{% include "./modules/viewing-resource-logs-cli-console.md" %}{% endleveloffset %}