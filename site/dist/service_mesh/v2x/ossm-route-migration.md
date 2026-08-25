---
title: Route migration
---

# Route migration {#ossm-route-migration}

Automatic route creation, also known as Istio OpenShift Routing (IOR), is a deprecated feature that is disabled by default for any `ServiceMeshControlPlane` resource that was created using {{ SMProductName }} 2.5 and later. Migrating from IOR to explicitly-managed routes provides a more flexible way to manage and configure ingress gateways. When route resources are explicitly created they can be managed alongside the other gateway and application resources as part of a GitOps management model.

## Additional resources {#additional-resources_route-migration}

- [Creating an HTTP-based Route](/networking/ingress_load_balancing/routes/creating-basic-routes#nw-creating-a-route_route-configuration)
- [Understanding automatic routes](/service_mesh/v2x/ossm-traffic-manage#ossm-auto-route_traffic-management)
