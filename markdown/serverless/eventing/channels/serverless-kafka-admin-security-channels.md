{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Security configuration for channels {id="serverless-kafka-admin-security-channels"}
{%- set context = "serverless-kafka-admin-security-channels" %}

{% leveloffset +1 %}{% include "./modules/serverless-kafka-tls-channels.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kafka-sasl-channels.md" %}{% endleveloffset %}