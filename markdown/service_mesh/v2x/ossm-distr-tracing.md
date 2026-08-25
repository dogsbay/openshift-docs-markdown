{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Distributed tracing {id="ossm-dist-trac"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-dist-trac" %}

<mark>DRAFT ASSEMBLY - Not currently listed on the Topic Map</mark>

Distributed Tracing is the process of tracking the performance of individual services in an application by tracing the path of the service calls in the application. Each time a user takes action in an application, a request is executed that might require many services to interact to produce a response. The path of this request is called a distributed transaction.

As a developer, you can use the {{ JaegerShortName }} to visualize call flows in a microservice application with {{ SMProductName }}.

{% leveloffset +1 %}{% include "./modules/ossm-config-sampling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-config-external-jaeger.md" %}{% endleveloffset %}