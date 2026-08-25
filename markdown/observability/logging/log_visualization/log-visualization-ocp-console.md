{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Log visualization with the web console {id="log-visualization-ocp-console"}
{%- set context = "log-visualization-ocp-console" %}

You can use the {{ product_title }} web console to visualize log data by configuring the {{ log_plug }}. Options for configuration are available during installation of {{ logging }} on the web console.

If you have already installed {{ logging }} and want to configure the plugin, use one of the following procedures.

{% leveloffset +1 %}{% include "./modules/enabling-log-console-plugin.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/logging-plugin-es-loki.md" %}{% endleveloffset %}