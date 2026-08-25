{%- set _mod_docs_content_type = "CONCEPT" %}

## Setting the correct network policy {id="ossm-config-network-policy_{{ context }}"}

{{ SMProductShortName }} creates network policies in the {{ SMProductShortName }} control plane and member namespaces to allow traffic between them. Before you deploy, consider the following conditions to ensure the services in your service mesh that were previously exposed through an {{ product_title }} route.

*   Traffic into the service mesh must always go through the ingress-gateway for Istio to work properly.
*   Deploy services external to the service mesh in separate namespaces that are not in any service mesh.
*   Non-mesh services that need to be deployed within a service mesh enlisted namespace should label their deployments `maistra.io/expose-route: "true"`, which ensures {{ product_title }} routes to these services still work.