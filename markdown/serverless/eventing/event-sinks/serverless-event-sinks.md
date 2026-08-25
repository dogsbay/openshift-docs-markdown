{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Event sinks {id="serverless-event-sinks"}
{%- set context = "serverless-event-sinks" %}

{% include "./snippets/serverless-about-event-sinks.md" %}

Addressable objects receive and acknowledge an event delivered over HTTP to an address defined in their `status.address.url` field. As a special case, the core Kubernetes `Service` object also fulfills the addressable interface.

Callable objects are able to receive an event delivered over HTTP and transform the event, returning `0` or `1` new events in the HTTP response. These returned events may be further processed in the same way that events from an external event source are processed.

{% leveloffset +1 %}{% include "./modules/specifying-sink-flag-kn.md" %}{% endleveloffset %}


:::tip

You can configure which CRs can be used with the `--sink` flag for Knative (`kn`) CLI commands by [Customizing `kn`](/serverless/cli_tools/advanced-kn-config#advanced-kn-config).

:::