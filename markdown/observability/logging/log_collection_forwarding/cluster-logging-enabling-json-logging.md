{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-enabling-json-logging" %}
# Enabling JSON log forwarding {id="cluster-logging-enabling-json-logging"}
{% include "./_attributes/common-attributes.md" %}

You can configure the Log Forwarding API to parse JSON strings into a structured object.

{% leveloffset +1 %}{% include "./modules/cluster-logging-json-log-forwarding.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-configuration-of-json-log-data-for-default-elasticsearch.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-forwarding-json-logs-to-the-default-elasticsearch.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/cluster-logging-forwarding-separate-indices.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About log forwarding](/observability/logging/log_collection_forwarding/log-forwarding#log-forwarding)