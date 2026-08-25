{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Rerouting traffic using blue-green strategy {id="traffic-splitting-blue-green"}
{%- set context = "traffic-splitting-blue-green" %}

You can safely reroute traffic from a production version of an app to a new version, by using a [blue-green deployment strategy](https://en.wikipedia.org/wiki/Blue-green_deployment).

{% leveloffset +1 %}{% include "./modules/serverless-blue-green-deploy.md" %}{% endleveloffset %}