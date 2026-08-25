{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Traffic management {id="ossm-routing-traffic-v1x"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "routing-traffic-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

You can control the flow of traffic and API calls between services in {{ SMProductName }}. For example, some services in your service mesh may need to communicate within the mesh and others may need to be hidden. Manage the traffic to hide specific backend services, expose services, create testing or versioning deployments, or add a security layer on a set of services.

{% leveloffset +1 %}{% include "./modules/ossm-gateways.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-gateways.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-ingress.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-auto-route-1x.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-service-entries.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-virtual-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-destination-rules.md" %}{% endleveloffset %}

This guide references the Bookinfo sample application to provide examples of routing in an example application. Install the [Bookinfo application](/service_mesh/v1x/prepare-to-deploy-applications-ossm#ossm-tutorial-bookinfo-overview_deploying-applications-ossm-v1x) to learn how these routing examples work.

{% leveloffset +1 %}{% include "./modules/ossm-routing-bookinfo-example.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-routing-bookinfo-applying.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-routing-bookinfo-test.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-routing-bookinfo-route.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
## Additional resources {id="_additional_resources" ._additional-resources-traffic-management}
For more information about configuring an {{ product_title }} wildcard policy, see "Using wildcard routes" in [Ingress Operator in {{ product_title }}](/networking/networking_operators/ingress-operator#using-wildcard-routes).
{% endif %}