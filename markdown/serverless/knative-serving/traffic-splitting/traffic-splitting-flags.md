{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# CLI flags for traffic splitting {id="traffic-splitting-flags"}
{%- set context = "traffic-splitting-flags" %}

The Knative (`kn`) CLI supports traffic operations on the traffic block of a service as part of the `kn service update` command.

{% leveloffset +1 %}{% include "./modules/serverless-traffic-splitting-flags-kn.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/serverless-custom-revision-urls.md" %}{% endleveloffset %}