---
title: Managing traffic in your service mesh
---

# Managing traffic in your service mesh {#ossm-routing-traffic}

Using {{ SMProductName }}, you can control the flow of traffic and API calls between services. Some services in your service mesh might need to communicate within the mesh and others might need to be hidden. You can manage the traffic to hide specific backend services, expose services, create testing or versioning deployments, or add a security layer on a set of services.

**Additional resources**

- [Configuring the node port service range](/networking/configuring_network_settings/configuring-node-port-service-range#configuring-node-port-service-range)

## Understanding automatic routes {#ossm-auto-route_traffic-management}

OpenShift routes for gateways are automatically managed in {{ SMProductShortName }}. Every time an Istio Gateway is created, updated or deleted inside the service mesh, an OpenShift route is created, updated or deleted.

> [!NOTE]
> Starting with {{ SMProductShortName }} 2.5, automatic routes are disabled by default for new instances of the `ServiceMeshControlPlane` resource.

### Routes with subdomains {#ossm-auto-route-subdomains_traffic-management}

{{ SMProductName }} creates the route with the subdomain, but OpenShift Container Platform must be configured to enable it. Subdomains, for example `*.domain.com`, are supported, but not by default. Configure an OpenShift Container Platform wildcard policy before configuring a wildcard host gateway.

For more information, see "Using wildcard routes" in [Ingress Operator in OpenShift Container Platform](/networking/networking_operators/ingress-operator#using-wildcard-routes).

**Additional resources**

- [Route-specific annotations](/networking/ingress_load_balancing/routes/nw-configuring-routes#nw-route-specific-annotations).

## Routing Tutorial {#_routing_tutorial}

This guide references the Bookinfo sample application to provide examples of routing in an example application. Install the [Bookinfo application](/service_mesh/v2x/prepare-to-deploy-applications-ossm#ossm-tutorial-bookinfo-overview_ossm-create-mesh) to learn how these routing examples work.
