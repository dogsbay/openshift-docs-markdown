{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connecting an event source to a sink using the Developer perspective {id="serverless-sink-source-odc"}
{%- set context = "serverless-sink-source-odc" %}

When you create an event source by using the {{ product_title }} web console, you can specify a sink that events are sent to from that source. The sink can be any addressable or callable resource that can receive incoming events from other resources.

{% leveloffset +1 %}{% include "./modules/serverless-connect-sink-source-odc.md" %}{% endleveloffset %}