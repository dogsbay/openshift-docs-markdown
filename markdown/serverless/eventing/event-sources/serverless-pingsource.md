{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating a ping source {id="serverless-pingsource"}
{%- set context = "serverless-pingsource" %}

A ping source is an event source that can be used to periodically send ping events with a constant payload to an event consumer. A ping source can be used to schedule sending events, similar to a timer.

{% leveloffset +1 %}{% include "./modules/serverless-pingsource-odc.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-pingsource-kn.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/specifying-sink-flag-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-pingsource-yaml.md" %}{% endleveloffset %}