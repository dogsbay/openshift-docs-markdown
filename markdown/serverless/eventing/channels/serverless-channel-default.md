{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Default channel implementation {id="serverless-channel-default"}
{%- set context = "serverless-channel-default" %}

You can use the `default-ch-webhook` config map to specify the default channel implementation of Knative Eventing. You can specify the default channel implementation for the entire cluster or for one or more namespaces. Currently the `InMemoryChannel` and `KafkaChannel` channel types are supported.

{% leveloffset +1 %}{% include "./modules/serverless-channel-default.md" %}{% endleveloffset %}