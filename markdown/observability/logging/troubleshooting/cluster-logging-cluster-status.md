{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-cluster-status" %}
{% include "./_attributes/common-attributes.md" %}
# Viewing Logging status {id="cluster-logging-cluster-status"}

You can view the status of the {{ clo }} and other {{ logging }} components.

{% leveloffset +1 %}{% include "./modules/cluster-logging-clo-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-clo-status-comp.md" %}{% endleveloffset %}