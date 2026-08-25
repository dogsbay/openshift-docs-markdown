{%- set _mod_docs_content_type = "CONCEPT" %}
# What is {{ SMProductName }}? {id="ossm-understanding-service-mesh_{{ context }}"}

A _service mesh_ is the network of microservices that make up applications in a distributed microservice architecture and the interactions between those microservices. When a {{ SMProductShortName }} grows in size and complexity, it can become harder to understand and manage.

Based on the open source [Istio](https://istio.io/) project, {{ SMProductName }} adds a transparent layer on existing distributed applications without requiring any changes to the service code. You add {{ SMProductName }} support to services by deploying a special sidecar proxy to relevant services in the mesh that intercepts all network communication between microservices. You configure and manage the {{ SMProductShortName }} using the {{ SMProductShortName }} control plane features.

{{ SMProductName }} gives you an easy way to create a network of deployed services that provide:

*   Discovery
*   Load balancing
*   Service-to-service authentication
*   Failure recovery
*   Metrics
*   Monitoring

{{ SMProductName }} also provides more complex operational functions including:

*   A/B testing
*   Canary releases
*   Access control
*   End-to-end authentication