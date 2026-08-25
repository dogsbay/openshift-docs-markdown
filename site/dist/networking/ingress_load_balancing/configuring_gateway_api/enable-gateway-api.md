---
title: Enable Gateway API
---

# Enable Gateway API {#enable-gateway-api_{{ context }}}

To route traffic using Gateway API, you must first enable the feature on your cluster. You can enable Gateway API by creating a `GatewayClass` custom resource, which triggers the Ingress Operator to provision the necessary controller and components.

After you successfully enable Gateway API, you can begin deploying gateways, assigning network addresses, and configuring listeners to control your network traffic flow.
