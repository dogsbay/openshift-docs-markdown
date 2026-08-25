{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster-Wide (Single Tenant) mesh deployment model {id="ossm-deploy-cluster-wide-mesh_{{ context }}"}

A cluster-wide deployment contains a Service Mesh Control Plane that monitors resources for an entire cluster. Monitoring resources for an entire cluster closely resembles Istio functionality in that the control plane uses a single query across all namespaces to monitor Istio and Kubernetes resources. As a result, cluster-wide deployments decrease the number of requests sent to the API server.

Similar to Istio, a cluster-wide mesh includes namespaces with the `istio-injection=enabled` namespace label by default. You can change this label by modifying the `spec.memberSelectors` field of the `ServiceMeshMemberRoll` resource.