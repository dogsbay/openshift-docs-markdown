---
title: Managing traffic in your service mesh
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing traffic in your service mesh {id="ossm-routing-traffic"}
{%- set context = "traffic-management" %}

Using {{ SMProductName }}, you can control the flow of traffic and API calls between services. Some services in your service mesh might need to communicate within the mesh and others might need to be hidden. You can manage the traffic to hide specific backend services, expose services, create testing or versioning deployments, or add a security layer on a set of services.

{% leveloffset +1 %}{% include "./modules/ossm-gateways.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

{% leveloffset +2 %}{% include "./modules/ossm-automatic-gateway-injection.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-deploying-automatic-gateway-injection.md" %}{% endleveloffset %}
{%- endif %}

{% leveloffset +2 %}{% include "./modules/ossm-routing-ingress.md" %}{% endleveloffset %}

{% if openshift_enterprise %}

**Additional resources**
{._additional-resources}

*   [Configuring the node port service range](/networking/configuring_network_settings/configuring-node-port-service-range#configuring-node-port-service-range)
{% endif %}

{% leveloffset +2 %}{% include "./modules/ossm-routing-gateways.md" %}{% endleveloffset %}

## Understanding automatic routes {id="ossm-auto-route_{{ context }}" ._additional-resources}

{%- set FeatureName = "Istio OpenShift Routing (IOR)" %}
{% leveloffset +1 %}{% include "./modules/deprecated-feature.md" %}{% endleveloffset %}

OpenShift routes for gateways are automatically managed in {{ SMProductShortName }}. Every time an Istio Gateway is created, updated or deleted inside the service mesh, an OpenShift route is created, updated or deleted.


:::note

Starting with {{ SMProductShortName }} 2.5, automatic routes are disabled by default for new instances of the `ServiceMeshControlPlane` resource.

:::


### Routes with subdomains {id="ossm-auto-route-subdomains_{{ context }}"}

{{ SMProductName }} creates the route with the subdomain, but {{ product_title }} must be configured to enable it. Subdomains, for example `*.domain.com`, are supported, but not by default. Configure an {{ product_title }} wildcard policy before configuring a wildcard host gateway.

{% if openshift_enterprise %}
For more information, see "Using wildcard routes" in [Ingress Operator in {{ product_title }}](/networking/networking_operators/ingress-operator#using-wildcard-routes).
{% endif %}

{% leveloffset +2 %}{% include "./modules/ossm-auto-route.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-auto-route-annotations.md" %}{% endleveloffset %}

{% if openshift_enterprise %}

**Additional resources**

*   [Route-specific annotations](/networking/ingress_load_balancing/routes/nw-configuring-routes#nw-route-specific-annotations).
{% endif %}

{% leveloffset +2 %}{% include "./modules/ossm-auto-route-enable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-service-entries.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-virtual-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-destination-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-networkpolicy-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-config-disable-networkpolicy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-routing-sidecar.md" %}{% endleveloffset %}

## Routing Tutorial {id="_routing_tutorial"}

This guide references the Bookinfo sample application to provide examples of routing in an example application. Install the [Bookinfo application](/service_mesh/v2x/prepare-to-deploy-applications-ossm#ossm-tutorial-bookinfo-overview_ossm-create-mesh) to learn how these routing examples work.

{% leveloffset +2 %}{% include "./modules/ossm-routing-bookinfo-example.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-routing-bookinfo-applying.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-routing-bookinfo-test.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-routing-bookinfo-route.md" %}{% endleveloffset %}