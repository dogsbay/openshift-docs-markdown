{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# About Logging {id="cluster-logging"}
{%- set context = "cluster-logging" %}

As a cluster administrator, you can deploy {{ logging }} on an {{ product_title }} cluster, and use it to collect and aggregate node system audit logs, application container logs, and infrastructure logs. You can forward logs to your chosen log outputs, including on-cluster, Red&#160;Hat managed log storage. You can also visualize your log data in the {{ product_title }} web console, or the Kibana web console, depending on your deployed log storage solution.

{% include "./snippets/logging-kibana-dep-snip.md" %}

{{ product_title }} cluster administrators can deploy {{ logging }} by using Operators. For information, see [Installing logging](/observability/logging/cluster-logging-deploying#cluster-logging-deploying).

The Operators are responsible for deploying, upgrading, and maintaining {{ logging }}. After the Operators are installed, you can create a `ClusterLogging` custom resource (CR) to schedule {{ logging }} pods and other resources necessary to support {{ logging }}. You can also create a `ClusterLogForwarder` CR to specify which logs are collected, how they are transformed, and where they are forwarded to.


:::note

Because the internal {{ product_title }} Elasticsearch log store does not provide secure storage for audit logs, audit logs are not stored in the internal Elasticsearch instance by default. If you want to send the audit logs to the default internal Elasticsearch log store, for example to view the audit logs in Kibana, you must use the Log Forwarding API as described in [Forward audit logs to the log store](/observability/logging/log_storage/logging-config-es-store#cluster-logging-elasticsearch-audit_logging-config-es-store).

:::


{% leveloffset +1 %}{% include "./modules/logging-architecture-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Log visualization with the web console](/observability/logging/log_visualization/log-visualization-ocp-console#log-visualization-ocp-console)

{% leveloffset +1 %}{% include "./modules/cluster-logging-about.md" %}{% endleveloffset %}

{% if openshift_rosa or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-cloudwatch.md" %}{% endleveloffset %}
For information, see [About log collection and forwarding](/observability/logging/log_collection_forwarding/log-forwarding#about-log-collection_log-forwarding).
{% endif %} {._additional-resources}

{% leveloffset +2 %}{% include "./modules/cluster-logging-json-logging-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-logging-collecting-storing-kubernetes-events.md" %}{% endleveloffset %}

For information, see [Collecting and storing Kubernetes events](/observability/logging/log_collection_forwarding/cluster-logging-eventrouter#cluster-logging-eventrouter).

{% leveloffset +2 %}{% include "./modules/cluster-logging-troubleshoot-logging.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-logging-export-fields.md" %}{% endleveloffset %}

For information, see [Log record fields](/observability/logging/cluster-logging-exported-fields#cluster-logging-exported-fields).

{% leveloffset +2 %}{% include "./modules/cluster-logging-eventrouter-about.md" %}{% endleveloffset %}

For information, see [Collecting and storing Kubernetes events](/observability/logging/log_collection_forwarding/cluster-logging-eventrouter#cluster-logging-eventrouter).