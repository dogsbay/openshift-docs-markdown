{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Service Mesh and Istio differences {id="ossm-vs-community-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-vs-istio-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

An installation of {{ SMProductName }} differs from upstream Istio community installations in multiple ways. The modifications to {{ SMProductName }} are sometimes necessary to resolve issues, provide additional features, or to handle differences when deploying on {{ product_title }}.

The current release of {{ SMProductName }} differs from the current upstream Istio community release in the following ways:

{% leveloffset +1 %}{% include "./modules/ossm-multitenant.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-vs-istio-1x.md" %}{% endleveloffset %}
#### Additional resources {id="additional-resources_ossm-vs-istio-v1x" ._additional-resources}

*   [Automatic route creation](/service_mesh/v1x/ossm-traffic-manage#ossm-auto-route-1x_routing-traffic-v1x)

{% leveloffset +1 %}{% include "./modules/ossm-kiali-service-mesh.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-jaeger-service-mesh.md" %}{% endleveloffset %}