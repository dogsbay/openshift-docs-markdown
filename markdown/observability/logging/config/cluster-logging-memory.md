{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-memory" %}
# Configuring CPU and memory limits for {{ logging }} components {id="cluster-logging-memory"}
{% include "./_attributes/common-attributes.md" %}

You can configure both the CPU and memory limits for each of the {{ logging }} components as needed.

{% leveloffset +1 %}{% include "./modules/cluster-logging-cpu-memory.md" %}{% endleveloffset %}